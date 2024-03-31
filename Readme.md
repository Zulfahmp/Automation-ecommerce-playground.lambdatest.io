Ini adalah automation project pada web https://ecommerce-playground.lambdatest.io/ menggunakan ![Playwright](https://img.shields.io/badge/playwright-%23323330.svg?style=for-the-badge&logo=playwright) dan bahasa pemrograman ![Typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript)

# Setup

- Install nodejs
- Install extenstions playwright pada vscode

# First Step

- Setting configuration project pada playwright.config.ts
- Setting .env menggunakan library tambahan yaitu dotenv

# Setup .env

- Install library dotenv "npm install dotenv --save"
- Buat file .env
- Setup config dotenv pada playwright.config.js
- Dan setup detail env, contoh untuk staging URL ataupun production "$env:ENV="local""

# Run Playwright

- npx playwright test --workers 1
