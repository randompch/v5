module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // Typescript
    '@typescript-eslint/array-type': ['error', {
      array: true,
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'enum',
      format: ['PascalCase'],
      custom: {
        regex: '^E[A-Z]',
        match: true,
      },
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    }],
    '@typescript-eslint/no-empty-interface': ['error', {
      allowSingleExtends: true,
    }],
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreProperties: true,
      ignoreParameters: true,
    }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/typedef': ['error', {
      arrowParameter: false,
    }],
    '@typescript-eslint/member-delimiter-style': 'error',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'import/no-unresolved': ['error', {
      ignore: ['.svg'],
    }],
    'keyword-spacing': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'operator-linebreak': ['error', 'before'],
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }],
    'quote-props': ['error', 'as-needed'],
    semi: [2, 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    // Vue rules
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/attributes-order': ['error', {
      order: [
        'SLOT',
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: true,
    }],
    'vue/block-tag-newline': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/eqeqeq': 'error',
    'vue/html-button-has-type': 'error',
    'vue/max-len': ['error', {
      code: 150,
      template: 200,
      comments: 120,
      ignoreComments: true,
      ignoreHTMLAttributeValues: true,
    }],
    'vue/multi-word-component-names': 'off',
    'vue/no-empty-component-block': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-useless-concat': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-v-html': 'off',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/script-indent': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-function-call': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
        }],
      },
    },
  ],
};
