# Description

> **The project requires Node.js version >= 24**. You can verify this in `package.json` under the `engines` section.

This is a template for starting new projects with **React** and **TypeScript**. It uses [Vite](https://vite.dev/guide/) as the build tool. To extend its capabilities, you can add plugins from [Rolldown](https://rolldown.rs/guide/getting-started):

- [Vite | Plugin API](https://vite.dev/guide/api-plugin)
- [Rolldown | Plugin API](https://rolldown.rs/apis/plugin-api)

# Code Quality and GitHub Workflows

The project includes automatic execution of **ESLint**, **Stylelint**, and **Prettier** on _commit_ (only on changed files), as well as type checking on _push_ (entire project), using **git hooks** (`.husky/pre-commit` and `.husky/pre-push`). This is also configured in GitHub Actions (`.github/workflows/.github-lint.yml`), which can be enabled in the repository settings for the desired branches.

# Environment Variables and Configuration

## Environment Variables and Modes

**Vite** has built-in `env` constants, for example to determine the operating mode (`dev` or `production`). You can learn more about them [here](https://vite.dev/guide/env-and-mode#built-in-constants).

### Variables

Variables can be defined with or without the `VITE_` prefix. The difference is **critical**. Detailed description can be found [here](https://vite.dev/guide/env-and-mode#env-variables).

### Files `.env`

**Vite** uses **dotenv** to load additional environment variables from the following files located in the environment directory (the root folder by default):

```
.env                # loaded in all cases
.env.local          # loaded in all cases
.env.[mode]         # loaded only in the specified mode
.env.[mode].local   # loaded only in the specified mode
```

[Documentation](https://vite.dev/guide/env-and-mode#env-files)

# Other Details

## Aliases Within the Project

For importing local files, components, etc. within the project, an alias `@/` is configured. For example, you can import component like ths: `@/component_folder/component_file`. So you don't have to specify long relative paths. It is configured in `tsconfig.app.json` section `paths`. Also, in `vite.config.ts` in `resolve.alias`.

## `public` Folder

The contents of the `public` folder are copied into the project build by default.

## `useAsync`

For more convenient handling of asynchronous requests, a custom `useAsync` hook has been added in `src/hooks`.

## Library `normalize.css`

The build includes the `normalize.css` library to unify styles across different browsers. If this build is used for an application that will run inside another one as a widget, the library should be removed:

- Remove `import 'normalize.css'` from the `main.tsx` file
- Remove the library from the project with `npm uninstall -S normalize.css`
