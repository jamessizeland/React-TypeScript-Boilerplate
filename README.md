# React TypeScript Boilerplate with Chakra-ui

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

[Available Scripts](./documentation/scripts.md)

## Project Structure

```project
└── src
    ├── assets
    ├── components
    │   ├── Elements
    │   │   └── index.ts
    │   ├── Layout
    │   │   └── index.ts
    │   └── index.ts
    ├── hooks
    │   └── index.ts
    ├── pages
    │   └── HomePage
    │       ├── components
    │       │   └── HomePageComponent.tsx
    │       └── HomePageContainer.ts
    ├── routes
    │   └── index.ts
    ├── services
    │   └── notifications.ts
    ├── store
    │   ├── reducers
    │   │   ├── userReducer.tsx
    │   │   └── errorReducer.tsx
    │   ├── hooks.ts
    │   └── store.ts
    ├── style
    │   └── global.scss
    ├── test
    │   └── index.ts
    ├── types
    │   └── index.ts
    └── utils
        └── index.ts
```

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Features
__EditorConfig__: This helps your editor produce code that looks like your style guide as you go. While this isn't strictly necessary in order to achieve your goals, it's nice if you're always looking at code that follows the same coding styles. Otherwise if you don't have EditorConfig, as you're typing your editor will auto-format differently to the rest of the code base, which is confusing. Of course if you've set up prettier it'll fix it before it goes into your code base, but still, why would you want to look at it in one format while you're writing it and then have it switch when you go to commit? Might as well be consistent.

__Prettier__: Automatically formats your code. I like to set it up to do this when I stage my files for a commit, so that it's physically impossible for me to commit code that doesn't match my style guide.

__ESLint__: So why would you want a linter too? Because ESLint does more than just style. It picks up when you declare variables you don't use, or reference things that aren't defined, amongst a few other niceties. So while its role diminishes somewhat compared to the days before prettier, it's still useful to have in a project to catch the other errors.
