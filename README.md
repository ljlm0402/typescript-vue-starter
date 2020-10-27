<img src='https://github.com/ljlm0402/typescript-vue-starter/raw/images/logo.jpg' border='0' alt='logo' />

[Vue.js](https://vuejs.org/) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-vue-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-vue-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/github/v/release/ljlm0402/typescript-vue-starter" alt="Release Version" /></a>
<a href="https://www.npmjs.com/package/typescript-vue-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-vue-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🧐 What is Vue?

Vue is a progressive framework for building user interfaces. 

Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. 

The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

## 🤔 Why typescript-vue-starter?

currently vue3 has greatly enhanced TypeScript support.

However, the @vue/cli module has limitations due to various design patterns and template structures, 

so it was created by combining modules that are useful in practice.

## 🚀 Quick Start

### Install with the npm global package

```sh
$ npm install -g typescript-vue-starter
```

### Run npx to install the package

npx is a tool in the JavaScript package management module, npm.

This is a tool that allows you to run the npm package on a single run without installing the package.

If you don't specify a project name, the default _typescript-vue-starter_ will be used instead.

```bash
$ npx typescript-vue-starter "project name"
```

Choose the template you want. We will create more templates later.

### Select a templates

<img src='https://github.com/ljlm0402/typescript-vue-starter/raw/images/cli.gif' border='0' alt='cli' />

Start your typescript-vue-starter app in development mode at `http://localhost:8080/`

```bash
$ cd "project name" && npm run serve
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
│   │   ├── common.ts
│   │   ├── error.ts
│   │   ├── http.ts
│   │   ├── i18n.ts
│   │   └── vueCommon.ts
│   │
│   ├── /views
│   │   ├── About.vue
│   │   └── Home.vue
│   │
│   ├── App.vue
│   ├── main.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   └── types.d.ts
│
├── .browserslistrc
├── .dockerignore
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── docker-compose.yml
├── Dockerfile
├── Makefile
├── nginx.conf
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

## 🤝 Contributors

* freevue [https://github.com/freevuehub](https://github.com/freevuehub)
