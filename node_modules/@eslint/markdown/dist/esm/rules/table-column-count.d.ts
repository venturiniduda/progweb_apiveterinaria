declare const _default: {
    meta: {
        type: "problem";
        docs: {
            recommended: true;
            description: string;
            url: string;
        };
        messages: {
            inconsistentColumnCount: string;
        };
    };
    create(context: import("@eslint/core").RuleContext<{
        LangOptions: import("../types.js").MarkdownLanguageOptions;
        Code: import("../index.js").MarkdownSourceCode;
        RuleOptions: [];
        Node: import("mdast").Node;
        MessageIds: "inconsistentColumnCount";
    }>): {
        table(node: import("mdast").Table): void;
    };
};
export default _default;
export type TableColumnCountMessageIds = "inconsistentColumnCount";
export type TableColumnCountOptions = [];
export type TableColumnCountRuleDefinition = MarkdownRuleDefinition<{
    RuleOptions: TableColumnCountOptions;
    MessageIds: TableColumnCountMessageIds;
}>;
import type { MarkdownRuleDefinition } from "../types.js";
