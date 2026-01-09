import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  { ignores: ["dist/", "android/"] },
  { files: ["**/*.{js,jsx,mjs,cjs}"] },
  pluginJs.configs.recommended,
  {
    plugins: {
      react: pluginReact
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs["jsx-runtime"].rules,
    },
    settings: {
        react: {
            version: "detect"
        }
    }
  }
];
