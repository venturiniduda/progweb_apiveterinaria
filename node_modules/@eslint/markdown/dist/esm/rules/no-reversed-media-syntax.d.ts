declare const _default: {
    meta: {
        type: "problem";
        docs: {
            recommended: true;
            description: string;
            url: string;
        };
        fixable: "code";
        messages: {
            reversedSyntax: string;
        };
    };
    create(context: import("@eslint/core").RuleContext<{
        LangOptions: import("../types.js").MarkdownLanguageOptions;
        Code: import("../index.js").MarkdownSourceCode;
        RuleOptions: [];
        Node: Node;
        MessageIds: "reversedSyntax";
    }>): {
        paragraph(node: Paragraph): void;
    };
};
export default _default;
export type NoReversedMediaSyntaxMessageIds = "reversedSyntax";
export type NoReversedMediaSyntaxOptions = [];
export type NoReversedMediaSyntaxRuleDefinition = MarkdownRuleDefinition<{
    RuleOptions: NoReversedMediaSyntaxOptions;
    MessageIds: NoReversedMediaSyntaxMessageIds;
}>;
import type { Node } from "mdast";
import type { Paragraph } from "mdast";
import type { MarkdownRuleDefinition } from "../types.js";
