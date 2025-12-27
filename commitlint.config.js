module.exports = {
  extends: ['@commitlint/cli', '@commitlint/config-conventional'],
  rules: {
    // Type rules
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],

    // Scope rules
    'scope-empty': [2, 'always'], // require scope (e.g. feat(auth): ...)
    'scope-case': [2, 'always', 'lower-case'],

    // Subject rules
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never'], // allow any case
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 5],
    'subject-max-length': [2, 'always', 72],

    // Header rules
    'header-max-length': [2, 'always', 100],

    // Body rules
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [1, 'always', 100],

    // Footer rules
    'footer-leading-blank': [1, 'always'],
  },
};
