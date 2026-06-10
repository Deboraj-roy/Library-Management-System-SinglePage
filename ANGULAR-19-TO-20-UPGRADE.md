# Angular 19 to 20 Upgrade

This project uses the Angular app in `src/Front-end-web`.

## Prerequisites

- Use Node `24.16.0` with `nvm`
- Run all commands from `src/Front-end-web`
- Commit or stash any local changes before upgrading

## Upgrade Commands

```bash
cd src/Front-end-web
nvm use 24.16.0
npx @angular/cli@20 update @angular/core@20 @angular/cli@20
npx @angular/cli@20 update @angular/material@20
npm install
```

## Verify

```bash
npm run build
npm test
```

## Notes

- Upgrade Angular one major version at a time.
- If `ng update` adds an unexpected package, review `package.json` before keeping it.
- If the build fails after the update, fix the reported code or configuration issues, then rerun `npm run build`.
