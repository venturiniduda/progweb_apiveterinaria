declare const _default: {
    meta: {
        type: "problem";
        docs: {
            recommended: true;
            description: string;
            url: string;
        };
        schema: {
            type: "object";
            properties: {
                ignoreCase: {
                    type: "boolean";
                };
                allowPattern: {
                    type: "string";
                };
            };
            additionalProperties: false;
        }[];
        messages: {
            invalidFragment: string;
        };
        defaultOptions: [{
            ignoreCase: true;
            allowPattern: string;
        }];
    };
    create(context: import("@eslint/core").RuleContext<{
        LangOptions: import("../types.js").MarkdownLanguageOptions;
        Code: import("../index.js").MarkdownSourceCode;
        RuleOptions: NoMissingLinkFragmentsOptions;
        Node: Node;
        MessageIds: "invalidFragment";
    }>): {
        heading(node: import("mdast").Heading): void;
        html(node: import("mdast").Html): void;
        link(node: import("mdast").Link): void;
        "root:exit"(): void;
    };
};
export default _default;
export type NoMissingLinkFragmentsMessageIds = "invalidFragment";
export type NoMissingLinkFragmentsOptions = [{
    ignoreCase?: boolean;
    allowPattern?: string;
}];
export type NoMissingLinkFragmentsRuleDefinition = MarkdownRuleDefinition<{
    RuleOptions: NoMissingLinkFragmentsOptions;
    MessageIds: NoMissingLinkFragmentsMessageIds;
}>;
import type { Node } from "mdast";
import type { MarkdownRuleDefinition } from "../types.js";
