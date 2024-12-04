type scalar = string | number | boolean | null;
type Subject = scalar | object | Symbol;
type MultipleSubjects<T> = Array<T>;
type MatchingSubject<T> = T | MultipleSubjects<T> | [...MultipleSubjects<T>];
type MatchingRule<T, R> = [MatchingSubject<T>, R];
type MatchingRules<T, R> = Array<MatchingRule<T, R>> | Record<string | number | symbol, R>;
declare const defaultPlaceholder: unique symbol;
declare const match: {
    <T extends Subject, R>(subject: T, rules: MatchingRules<T, R>, fallback?: any): R;
    default: typeof defaultPlaceholder;
};
export default match;
