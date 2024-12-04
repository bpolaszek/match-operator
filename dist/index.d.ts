type scalar = string | number | boolean | null;
type Subject = scalar | object | Symbol;
type ReturnValue = any;
type MultipleSubjects = Array<Subject>;
type MatchingSubject = Subject | MultipleSubjects | [...MultipleSubjects];
type MatchingRule = [MatchingSubject, ReturnValue];
declare const defaultPlaceholder: unique symbol;
declare const match: {
    (subject: Subject, rules: Array<MatchingRule>): any;
    default: typeof defaultPlaceholder;
};
export default match;
