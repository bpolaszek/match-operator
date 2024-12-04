class UnhandledMatchError extends Error {
  constructor(value: any, ...args: any[]) {
    super(...args)
    this.name = 'UnhandledMatchError'
    this.message = `Unhandled match value of type ${typeof value} - ${value}`
    // @ts-ignore
    Error.captureStackTrace(this, UnhandledMatchError)
  }
}

type scalar = string | number | boolean | null
type Subject = scalar | object | Symbol
type MultipleSubjects<T> = Array<T>
type MatchingSubject<T> = T | MultipleSubjects<T> | [...MultipleSubjects<T>]
type MatchingRule<T, R> = [MatchingSubject<T>, R]
type MatchingRules<T, R> = Array<MatchingRule<T, R>> | Record<string | number | symbol, R>

function die(error: Error): never {
  throw error
}

const defaultPlaceholder = Symbol()
const defaultFallback = <T>(subject: T) => die(new UnhandledMatchError(subject))

const match = <T extends Subject, R>(subject: T, rules: MatchingRules<T, R>, fallback: any = defaultFallback<T>): R => {
  const map = new Map<T | Symbol, R>()
  const entries = Array.isArray(rules) ? rules : Object.entries(rules).map(([key, value]) => [key, value])

  for (const [...expressions] of entries) {
    const returnValue = expressions.pop() as R
    for (const key of expressions.flat()) {
      if (!map.has(key as T)) {
        map.set(key as T, returnValue)
      }
    }
  }

  if (!map.has(defaultPlaceholder)) {
    map.set(defaultPlaceholder, fallback)
  }

  const result = map.get(subject) ?? map.get(defaultPlaceholder)

  if (typeof result === 'function') {
    return result(subject)
  }

  return result as R
}

match.default = defaultPlaceholder

export default match
