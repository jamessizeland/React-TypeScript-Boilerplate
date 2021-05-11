# TypeScript React Project Template

This project uses [React](https://facebook.github.io/react/), [React Router](https://github.com/reactjs/react-router), [Webpack](https://webpack.js.org/) and [React Fast Refresh](https://www.npmjs.com/package/react-refresh).

It comes with a style guide based on the eslint recommendations and the [airbnb style guide](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

Use the [TypeScript Language Docs](https://www.typescriptlang.org/docs/) and the [TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react#hooks) as well as [this article](https://www.sitepoint.com/react-with-typescript-best-practices/)

## Getting Started

First, clone the repo via git and install dependencies by running:

```bash
yarn
```

### Starting Development

Start the app in the `dev` environment:

```bash
yarn start
```

### Packaging for Production

To package apps for deployment use:

```bash
yarn build
```

## Features

**EditorConfig**: This helps your editor produce code that looks like your style guide as you go. While this isn't strictly necessary in order to achieve your goals, it's nice if you're always looking at code that follows the same coding styles. Otherwise if you don't have EditorConfig, as you're typing your editor will auto-format differently to the rest of the code base, which is confusing. Of course if you've set up prettier it'll fix it before it goes into your code base, but still, why would you want to look at it in one format while you're writing it and then have it switch when you go to commit? Might as well be consistent.

**Prettier**: Automatically formats your code. I like to set it up to do this when I stage my files for a commit, so that it's physically impossible for me to commit code that doesn't match my style guide.

**ESLint**: So why would you want a linter too? Because ESLint does more than just style. It picks up when you declare variables you don't use, or reference things that aren't defined, amongst a few other niceties. So while its role diminishes somewhat compared to the days before prettier, it's still useful to have in a project to catch the other errors.

## License

MIT ©

Generated from:

- [this article](https://betterprogramming.pub/complete-guideline-to-creating-a-modern-react-app-with-typescript-from-scratch-cebbb5817d8)
- [Electron React Boilerplate](https://electron-react-boilerplate.js.org/)
- [Airbnb styleguide setup](https://www.youtube.com/watch?v=SydnKbGc7W8&t=992s)
