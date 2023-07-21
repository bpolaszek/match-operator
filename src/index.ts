class UnhandledMatchError extends Error {
  constructor(value: any, ...args: any[]) {
    super(...args)
    this.name = 'UnhandledMatchError'
    this.message = `Unhandled match value of type ${typeof value}`
    // @ts-ignore
    Error.captureStackTrace(this, UnhandledMatchError)
  }
}

type scalar = string | number | boolean | null
type SingleConditionalExpression = scalar | object | Symbol
type MultipleConditionalExpressions = Array<SingleConditionalExpression>
type ConditionalExpression = SingleConditionalExpression | MultipleConditionalExpressions
type MatchingRule = [ConditionalExpression, any]

const defaultPlaceholder = Symbol()

const match = (subject: scalar, rules: Array<MatchingRule>) => {
  const map = new Map()
  for (const rule of rules) {
    let [expressions, returnValue] = rule
    if (!Array.isArray(expressions)) {
      expressions = [expressions]
    }
    for (let key of expressions as Array<SingleConditionalExpression>) {
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
