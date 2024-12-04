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

const defaultPlaceholder = Symbol()

const match = <T extends Subject, R>(subject: T, rules: Array<MatchingRule<T, R>>): R => {
  const map = new Map<T | Symbol, R>()
  for (const [...expressions] of rules) {
    const returnValue = expressions.pop() as R
    for (const key of expressions.flat()) {
      if (!map.has(key as T)) {
        map.set(key as T, returnValue)
      }
    }
  }

  if (!map.has(subject) && !map.has(defaultPlaceholder)) {
    throw new UnhandledMatchError(subject)
  }

  const result = map.get(subject) ?? map.get(defaultPlaceholder)

  if (typeof result === 'function') {
    return result(subject)
  }

  return result as R
}

match.default = defaultPlaceholder

export default match
