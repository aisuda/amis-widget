/**
 * https://www.npmjs.com/package/@commitlint/config-conventional\
 *
 * Git提交规范-配置文件
 * Commit message 由Header、Body 和 Footer三个部分组成，其格式如下：
 *  <type>(<scope>): <subject>
 *  <BLANK LINE>
 *   <body>
 *  <BLANK LINE>
 *  <footer>
 *
 *【备注】
 * type 用于说明 commit 的类别，常用下面 7 个标识：
 * scope 用于说明当前功能点作用于哪个页面或者哪个功能模块；
 * subject 用于简短的描述当前commit，不超过50个字符；
 * body 用于填写对本次 commit 的详细描述，可以分成多行；
 * footer 不兼容变动声明，或者关闭 Issue。
 *
 * 【type类型取值类型】
 * feat：新功能（feature）
 * fix：功能优化
 * bug：修补bug
 * docs：文档（documentation）
 * style：格式（不影响代码运行的变动）
 * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
 * test：增加测试
 * chore：构建过程或辅助工具的变动
 * build：影响构建系统或外部依赖项的更改（示例范围：gulp，broccoli，npm）
 * ci：对 CI 配置文件和脚本的更改（示例范围：Travis，Circle，BrowserStack，SauceLabs）
 * perf：改进性能的代码更改
 *
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'bug',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'build',
        'ci',
      ],
    ],
    'type-empty': [2, 'never'],
    'scope-empty': [1, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
