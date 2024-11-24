The error you're encountering, `"Data path "" must have required property 'browser'"`, suggests that the `"browser"` property is incorrectly specified in your `angular.json`. This error is typically caused by an incorrect configuration structure or missing/incorrect properties for the build options.

### Review of the `angular.json` Configuration

In Angular 12 and later, there was a change to the configuration structure. The correct key for the `main.ts` entry file is `"main"` rather than `"browser"`. Here's how to resolve the issue:

### Corrected `angular.json`

Ensure that the `angular.json` is structured correctly:

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "Front-end-web": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/front-end-web",
            "index": "src/index.html",
            "main": "src/main.ts",  // This should be 'main' instead of 'browser'
            "polyfills": [
              "zone.js"
            ],
            "baseHref": "/",
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              {
                "glob": "**/*",
                "input": "src/assets"
              }
            ],
            "styles": [
              "@angular/material/prebuilt-themes/purple-green.css",
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "3MB",
                  "maximumError": "4MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "8kB",
                  "maximumError": "10kB"
                }
              ],
              "outputPath": "dist/front-end-web",
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "Front-end-web:build:production"
            },
            "development": {
              "buildTarget": "Front-end-web:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              {
                "glob": "**/*",
                "input": "src/assets"
              }
            ],
            "styles": [
              "@angular/material/prebuilt-themes/purple-green.css",
              "src/styles.scss"
            ],
            "scripts": []
          }
        }
      }
    }
  },
  "cli": {
    "analytics": "3aea8182-ccb7-4493-be2c-d398247d21f7"
  }
}
```

### Key Changes:

1. **Replace `"browser": "src/main.ts"` with `"main": "src/main.ts"`:**
   - The `"main"` entry is the correct property for specifying the main TypeScript file (`main.ts`) in Angular. The error you encountered was due to the incorrect `"browser"` key being used, which is not required anymore.

2. **Assets Path Update:**
   - Ensure the assets path (`"input": "src/assets"`) is correctly pointing to your assets folder, and that you have the proper assets in `src/assets`.

### Next Steps:

1. After updating the `angular.json` configuration, run the build command again:
   ```bash
   ng build --configuration production
   ```

2. If there are no further issues, deploy the content from the `dist/front-end-web` folder to your server, or serve it locally using:
   ```bash
   cd dist/front-end-web
   http-server -p 8080 --index index.html
   ```

This should resolve the `"browser"` property error and allow you to build the Angular app successfully. Let me know if you face any more issues!