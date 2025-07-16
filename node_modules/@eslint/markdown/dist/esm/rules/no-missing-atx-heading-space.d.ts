declare const _default: {
    meta: {
        type: "problem";
        docs: {
            recommended: true;
            description: string;
            url: string;
        };
        fixable: "whitespace";
        messages: {
            missingSpace: string;
        };
    };
    create(context: import("@eslint/core").RuleContext<{
        LangOptions: import("../types.js").MarkdownLanguageOptions;
        Code: import("../index.js").MarkdownSourceCode;
        RuleOptions: [];
        Node: import("mdast").Node;
        MessageIds: "missingSpace";
    }>): {
        paragraph(node: import("mdast").Paragraph): void;
    };
};
export default _default;
export type NoMissingAtxHeadingSpaceMessageIds = "missingSpace";
export type NoMissingAtxHeadingSpaceOptions = [];
export type NoMissingAtxHeadingSpaceRuleDefinition = MarkdownRuleDefinition<{
    RuleOptions: NoMissingAtxHeadingSpaceOptions;
    MessageIds: NoMissingAtxHeadingSpaceMessageIds;
}>;
import type { MarkdownRuleDefinition } from "../types.js";
