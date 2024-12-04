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
type ReturnValue = any
type MultipleSubjects = Array<Subject>
type MatchingSubject = Subject | MultipleSubjects | [...MultipleSubjects]
type MatchingRule = [MatchingSubject, ReturnValue]

const defaultPlaceholder = Symbol()

const match = (subject: Subject, rules: Array<MatchingRule>) => {
  const map = new Map()
  for (const [...expressions] of rules) {
    const returnValue = expressions.pop()
    for (const key of expressions.flat()) {
      if (!map.has(key)) {
        map.set(key, returnValue)
      }
    }
  }

  if (!map.has(subject) && !map.has(defaultPlaceholder)) {
    throw new UnhandledMatchError(subject)
  }

  return map.get(subject) ?? map.get(defaultPlaceholder)
}

match.default = defaultPlaceholder

export default match
