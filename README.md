# vite-plugin-sleep

> vite is too fast, we need to rest. a vite-plugin you never need.

<p align="center">
  <a href="https://github.com/IndexXuan/vite-plugin-sleep/actions/workflows/npm-publish.yml">
   <img alt="NPM Publish" src="https://github.com/IndexXuan/vite-plugin-sleep/actions/workflows/npm-publish.yml/badge.svg" style="max-width:100%;">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-sleep" rel="nofollow">
    <img alt="npm version" src="https://img.shields.io/npm/v/vite-plugin-sleep.svg" style="max-width:100%;">
  </a>
  <a href="https://github.com/IndexXuan/vite-plugin-sleep/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" style="max-width:100%;">
  </a>
</p>

## Motivation

- In the old days with webpack, we had many times when we could compile with pay, and with vite it was so fast that we couldn't rest.
- Time to take a nap in the vite.

## Usage

```sh
yarn add vite-plugin-sleep
```

```ts
// vite.config.ts
import sleep from 'vite-plugin-sleep'

/** @see {@link https://vitejs.dev/config/} */
export default defineConfig({
  plugins: [
    // ...other plugins
    sleep(/* options */),
  ],
})
```

## Options

```ts
{
  /**
   * DevServer start delay(ms)
   * @default 20000
   */
  devServerStartDelay: number
  /**
   * HMR delay(ms)
   * @default 3000
   */
  hmrDelay: number
}
