---
title: Темы кода
icon: wand-magic-sparkles
order: 4
category:
  - Интерфейс
tag:
  - Интерфейс
  - Темы кода
---

## С подсветкой Prism.js

`vuepress-theme-hope` объединяет `@vuepress/plugin-prismjs` для поддержки подсветки кода по умолчанию, и мы позволяем вам глобально устанавливать темы блоков кода для светлого и темного режима.

По умолчанию мы используем `one-light` и `one-dark` для светлого и темного режимов соответственно, и вы можете изменить их, установив `light` и `dark` в `plugin.prismjs`.

::: tip

Из-за соображений размера вывода мы не будем импортировать все стили глобально, чтобы поддерживать настройку темы кода для каждого блока кода.

:::

### Доступные темы

::: info Светлые темы

- ateliersulphurpool-light
- coldark-cold
- coy
- duotone-light
- ghcolors
- gruvbox-light
- material-light
- one-light
- vs

:::

::: info Темный темы

- atom-dark
- cb
- coldark-dark
- dark
- dracula
- duotone-dark
- duotone-earth
- duotone-forest
- duotone-sea
- duotone-space
- gruvbox-dark
- holi
- hopscotch
- lucario
- material-dark
- material-oceanic
- night-owl
- nord
- one-dark
- pojoaque
- shades-of-purple
- solarized-dark-atom
- tomorrow
- vsc-dark-plus
- xonokai
- z-touch

:::

## С подсветкой Shiki

Prism.js быстрый и легкий, но он не может правильно выделить весь синтаксис. Если вам нужен более точный результат подсветки, вы можете использовать `@vuepress/plugin-shiki`.

1. Отключите плагин `@vuepress/plugin-prismjs` установив `plugins.prismjs: false` в опциях темы.

1. Установить плагин:

   ::: code-tabs#shell

   @tab pnpm

   ```bash
   pnpm add -D @vuepress/plugin-shiki@next
   ```

   @tab yarn

   ```bash
   yarn add -D @vuepress/plugin-shiki@next
   ```

   @tab npm

   ```bash
   npm i -D @vuepress/plugin-shiki@next
   ```

   :::

1. Импортируйте плагин shiki и используйте его:

   ::: code-tabs#language

   @tab TS

   ```ts
   // .vuepress/config.ts
   import { shikiPlugin } from "@vuepress/plugin-shiki";
   import { defineUserConfig } from "vuepress";

   export default defineUserConfig({
     plugins: [
       shikiPlugin({
         // your options
         theme: "one-dark-pro",
       }),
     ],
   });
   ```

   @tab JS

   ```js
   // .vuepress/config.js
   import { shikiPlugin } from "@vuepress/plugin-shiki";

   export default {
     plugins: [
       shikiPlugin({
         // your options
         theme: "one-dark-pro",
       }),
     ],
   };
   ```

   :::

1. Установите цвет фона и цвет шрифта для блоков кода в соответствии с темой, которую вы хотите использовать, добавив эти переменные в `.vuepress/styles/config.scss`:.

   - `$code-bg-color`: цвет фона для блоков кода
   - `$code-color`: цвет шрифта для блоков кода
