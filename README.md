<img src='https://github.com/ljlm0402/typescript-vue-starter/raw/images/logo.jpg' border='0' alt='logo' />

[Vue.js](https://vuejs.org/) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-vue-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-vue-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/github/v/release/ljlm0402/typescript-vue-starter" alt="Release Version" /></a>
<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-vue-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🧐 What is it?

Creates a new typescript vue application.
application is configured to use TypeScript instead of plain JavaScript. 

## 🤔 Why typescript-vue-starter?

Node Js is great for the rapid development of web-projects, but is often neglected because of the lack of
type safety. TypeScript solves this issue and (along with its linter file) can even make your code
more robust than some other static languages like Java.

## ⚙️ Installation

```sh
$ npm install -g typescript-vue-starter
```

## 🚀 Quick Start

The quickest way to get started is use npx and pass in the name of the project you want to create.
If you don't specify a project name, the default _typescript-vue-starter_ will be used instead.

### 1. Create the app

```bash
$ npx typescript-vue-starter "project name"
```

Choose the template you want. We will create more templates later.

Start your typescript-vue-starter app in development mode at `http://localhost:8080/`

```bash
$ cd "project name" && npm run start
```

## 🎠 Available commands for the server.

- Run the Server : `npm run serve`.
- Build Static File: `npm run build`.
- Check for linting errors: `npm run lint`.

## 🗂 Code Structure (default)

```bash
│
├── /public
│   ├── favicon.ico
│   └── index.html
│
├── /src
│   ├── /assets
│   │   └── logo.png
│   │
│   ├── /components
│   │   └── HelloWorld.vue
│   │
│   ├── /locales
│   │   ├── ENG.json
│   │   └── KOR.json
│   │
│   ├── /router
│   │   └── index.ts
│   │
│   ├── /store
│   │   ├── /users
│   │   │   └── index.ts
│   │   │
│   │   ├── actions.ts
│   │   ├── getters.ts
│   │   ├── index.ts
│   │   ├── interface.ts
│   │   ├── mutations-types.ts
│   │   ├── mutations.ts
│   │   └── states.ts
│   │
│   ├── /utils
│   │   ├── auth.route.ts
│   │   ├── index.route.ts
│   │   └── users.route.ts
│   │
│   ├── /views
│   │   ├── auth.service.ts
│   │   └── users.service.ts
│   │
│   ├── App.vue
│   ├── main.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   └── types.d.ts
│
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 📬 Recommended Commit Message

|  When |  Commit Message  |
|:--------|:-----------|
| Add function | feat: ⚡️ Add function |
| Fix bug | fix: 🐞 Fix bug |
| Refactoring | refactor: 🛠 Refactoring |
| Add package | package: 📦 Add package |
| Fix readme | docs: 📚 Fix readme |
| Improvements style | style: 👁 Improvements style |
| New Releases | releases: 🎉 Releases |

## 💳 License

[MIT](LICENSE)
