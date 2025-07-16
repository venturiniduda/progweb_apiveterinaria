declare const _default: {
    meta: {
        type: "problem";
        docs: {
            recommended: true;
            description: string;
            url: string;
        };
        messages: {
            skippedHeading: string;
        };
    };
    create(context: import("@eslint/core").RuleContext<{
        LangOptions: import("../types.js").MarkdownLanguageOptions;
        Code: import("../index.js").MarkdownSourceCode;
        RuleOptions: [];
        Node: import("mdast").Node;
        MessageIds: "skippedHeading";
    }>): {
        heading(node: import("mdast").Heading): void;
    };
};
export default _default;
export type HeadingIncrementMessageIds = "skippedHeading";
export type HeadingIncrementOptions = [];
export type HeadingIncrementRuleDefinition = MarkdownRuleDefinition<{
    RuleOptions: HeadingIncrementOptions;
    MessageIds: HeadingIncrementMessageIds;
}>;
import type { MarkdownRuleDefinition } from "../types.js";
