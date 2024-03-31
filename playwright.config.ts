import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
require("dotenv").config();

dotenv.config({
  path: `./env/.env.${process.env.ENV}`,
});

export default defineConfig({
  testMatch: [
    "tests/001register.test.ts",
    "tests/002login.test.ts",
    "003editAccountInfo.test.ts",
  ],
  reporter: "html",
  use: {
    viewport: null,
    headless: false,
    baseURL: process.env.BaseURL,
    launchOptions: { args: ["--start-maximized"] },
    timezoneId: "Asia/Jakarta",
  },
  timeout: 120000,
});
