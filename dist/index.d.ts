type scalar = string | number | boolean | null;
type SingleConditionalExpression = scalar | object | Symbol;
type MultipleConditionalExpressions = Array<SingleConditionalExpression>;
type ConditionalExpression = SingleConditionalExpression | MultipleConditionalExpressions;
type MatchingRule = [ConditionalExpression, any];
declare const defaultPlaceholder: unique symbol;
declare const match: {
    (subject: scalar, rules: Array<MatchingRule>): any;
    default: typeof defaultPlaceholder;
};
export default match;
