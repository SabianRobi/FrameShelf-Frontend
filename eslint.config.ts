import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
    jsxA11y.flatConfigs.recommended,
    {
        name: "Rules for React files",
        files: ["src/**/*.js", "src/**/*.ts", "src/**/*.jsx", "src/**/*.tsx"],
        ignores: [".git/", "node_modules/*", "dist/**/*", "*.config.*"],
        languageOptions: {
            parser: typescriptParser,
            sourceType: "module",
            ecmaVersion: "latest",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                NodeJS: true
            }
        },
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: true
        },
        plugins: {
            "@stylistic": stylistic,
            "@typescript-eslint": tsPlugin,
            "react-hooks": reactHooks,
            react,
            perfectionist,
            js
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,

            // ? React rules
            "react-hooks/rules-of-hooks": "error",
            "react/no-children-prop": [
                "warn",
                {
                    allowFunctions: false
                }
            ],
            "react/jsx-curly-brace-presence": [
                "warn",
                { props: "never", children: "never", propElementValues: "always" }
            ],
            // ? Eslint rules
            "no-console": ["warn", { allow: ["warn", "error", "info"] }],
            "no-alert": "error",
            "max-lines": ["warn", { max: 350, skipComments: true }],
            "no-duplicate-imports": "error",
            "prefer-arrow-callback": "warn",
            // prettier-ignore
            "curly": [ "warn", "all" ],
            // prettier-ignore
            "eqeqeq": "error",
            "max-depth": ["warn", 3],
            "capitalized-comments": ["warn", "always"],
            "no-unsafe-finally": "error",
            "no-unreachable": "error",
            "for-direction": "error",
            // prettier-ignore
            "complexity": [ "warn", 25 ],
            "no-magic-numbers": "off",
            "no-var": "error",
            "prefer-const": "error",
            "arrow-body-style": ["warn", "as-needed"],
            // ? Stylistic rules
            "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
            "@stylistic/switch-colon-spacing": ["warn", { after: true, before: false }],
            "@stylistic/spaced-comment": ["warn", "always"],
            "@stylistic/semi-style": ["warn", "last"],
            "@stylistic/semi-spacing": ["warn", { before: false, after: true }],
            "@stylistic/no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1, maxBOF: 0 }],
            "@stylistic/max-len": [
                "warn",
                {
                    code: 120,
                    ignoreStrings: true,
                    ignoreComments: true,
                    ignoreTemplateLiterals: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                    ignoreRegExpLiterals: true
                }
            ],
            "@stylistic/lines-between-class-members": ["error", "always"],
            "@stylistic/comma-style": ["error", "last"],
            "@stylistic/comma-spacing": ["error", { before: false, after: true }],
            "@stylistic/comma-dangle": ["warn", "never"],
            "@stylistic/arrow-spacing": ["warn", { before: true, after: true }],
            "@stylistic/arrow-parens": ["warn", "as-needed"],
            "@stylistic/eol-last": ["warn", "always"],
            "@stylistic/array-bracket-spacing": ["warn", "never"],
            "@stylistic/lines-around-comment": [
                "warn",
                {
                    allowEnumStart: true,
                    allowInterfaceStart: true,
                    allowModuleStart: true,
                    allowTypeStart: true
                }
            ],
            "@stylistic/keyword-spacing": [
                "warn",
                {
                    before: true,
                    after: true,
                    overrides: {
                        for: { before: false },
                        while: { before: false },
                        static: { after: false }
                    }
                }
            ],
            "@stylistic/no-confusing-arrow": "warn",
            "@stylistic/no-multi-spaces": ["warn", { ignoreEOLComments: false }],
            "@stylistic/rest-spread-spacing": ["warn", "never"],
            "@stylistic/space-before-blocks": "warn",
            "@stylistic/type-annotation-spacing": "warn",
            "@stylistic/jsx-pascal-case": ["warn", { allowLeadingUnderscore: false, allowNamespace: true }],
            "perfectionist/sort-jsx-props": [
                "warn",
                {
                    type: "alphabetical",
                    order: "asc"
                }
            ],
            "@stylistic/jsx-tag-spacing": [
                "warn",
                {
                    beforeSelfClosing: "proportional-always",
                    afterOpening: "never",
                    beforeClosing: "never"
                }
            ],
            "@stylistic/padding-line-between-statements": [
                "warn",
                {
                    blankLine: "always",
                    prev: "*",
                    next: ["enum", "interface", "type"]
                }
            ],
            // ? Typescript rules
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    destructuredArrayIgnorePattern: "[A-Z]",
                    caughtErrors: "none"
                }
            ],
            "@typescript-eslint/no-magic-numbers": [
                "off",
                {
                    ignoreEnums: true,
                    ignoreNumericLiteralTypes: true,
                    ignoreReadonlyClassProperties: true,
                    ignoreTypeIndexes: true
                }
            ],
            "@typescript-eslint/no-unnecessary-template-expression": "error",
            "@typescript-eslint/no-empty-object-type": ["warn", { allowWithName: "Props$", allowObjectTypes: "never" }],
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                {
                    fixStyle: "separate-type-imports"
                }
            ],
            "@typescript-eslint/consistent-type-definitions": ["warn", "type"]
        }
    },
    eslintConfigPrettier
];
