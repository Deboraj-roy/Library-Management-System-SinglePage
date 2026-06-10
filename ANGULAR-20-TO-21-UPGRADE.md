# Angular 20 to 21 Upgrade

This project uses the Angular app in `src/Front-end-web`.

## Prerequisites

- Use Node `24.16.0` with `nvm`
- Run the commands from `src/Front-end-web`
- Keep local changes committed or stashed before updating

## Upgrade Commands

```bash
cd src/Front-end-web
nvm use 24.16.0
npx @angular/cli@21 update @angular/core@^21 @angular/cli@^21 @angular/material@^21 --allow-dirty
npm install
```

## Verify

```bash
npm run build
npm test
```

## Notes

- Angular upgrades should be done one major version at a time.
- This upgrade updates `package.json`, `package-lock.json`, and several Angular templates automatically.
- If `npm install` fails because of a stale `node_modules` tree, remove `node_modules` and reinstall from the app folder.
- Review any generated template diffs before committing.
