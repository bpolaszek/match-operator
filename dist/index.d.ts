type scalar = string | number | boolean | null;
type Subject = scalar | object | Symbol;
type MultipleSubjects<T> = Array<T>;
type MatchingSubject<T> = T | MultipleSubjects<T> | [...MultipleSubjects<T>];
type MatchingRule<T, R> = [MatchingSubject<T>, R];
declare const defaultPlaceholder: unique symbol;
declare const match: {
    <T extends Subject, R>(subject: T, rules: MatchingRule<T, R>[]): R;
    default: typeof defaultPlaceholder;
};
export default match;
