---
title: Кастомизация эффектов
icon: wand-magic-sparkles
category:
  - Учебник с примерами
  - Кастомизация
tag:
  - Кастомизация
---

В этом руководстве вы узнаете, как настроить эффекты темы.

<!-- more -->

## Очистка эффектов

По умолчанию тема будет:

- Использовать список цветов для украшения категорий и тегов
- Добавлять анимацию при переключении страниц и элементов
- Добавлять анимацию к элементам домашней страницы и добавлять эффекты наведения к функциям
- Использовать более причудливую кнопку копирования кода
- Использовать причудливые всплывающие подсказки
- Добавлять затухание при переключении между дневным и ночным режимами

Если вам нужно удалить эти причудливые стили, установите `pure: true` в параметрах темы, чтобы включить чистый режим.

Между тем, вы можете контролировать продолжительность анимации, управляя `$color-transition` и `transform-transition` в файле палитры:

```scss
// .vuepress/styles/palette.scss

$color-transition: 0s;
$transform-transition: 0s;
```

## Добавление эффектов

Вы можете добавлять дополнительные эффекты на свой сайт с помощью параметров файла конфигурации и клиентских файлов, предоставляемых VuePress.

- Если вам нужно добавить глобальные CSS и JS, установите параметр VuePress `head` в [файле конфигурации](../vuepress/config.md).

  ::: tip Пример

  ```ts
  // .vuepress/config.ts
  import { defineUserConfig } from "vuepress";

  export default defineUserConfig({
    //...

    head: [
      //...

      // import an external script
      ["script", { src: "YOUR_SCRIPT_LINK" }],
      // add a script
      [
        "script",
        {},
        `\
          // your script here
        `,
      ],
      // add an external CSS
      ["link", { rel: "stylesheet", href: "YOUR_STYLE_LINK" }],
      // add a style
      // We don't recommend this, you should prefer to use .vuepress/style/index.scss
      [
        "style",
        {},
        `\
          /* your style here */
        `,
      ],
    ],

    //...
  });
  ```

  :::

- Если вам нужно добавить CSS и JS на уровне страницы, установите параметр `head` в [Front Matter](../vuepress/page.md#frontmatter).

  ```md
  ---
  head:
    - script: YOUR_SCRIPT_LINK
    - script:
        type: module
        src: YOUR_SCRIPT_LINK
    - style: YOUR_STYLE_LINK
    - style:
        type: text/css
        content: |
          /* your style here */
  ---

  Содержание страницы

  ...
  ```

- Более глобальные расширенные операции можно выполнять через [файл конфигурации клиента](../vuepress/config.md#client-config).

  ```ts
  // .vuepress/client.ts
  import { defineClientConfig } from "vuepress/client";
  import ExampleGlobalComponent from "./components/ExampleGlobalComponent.vue";
  import ExampleRootComponent from "./components/ExampleRootComponent.vue";
  import { setupExampleCompositionAPI } from "./composables/exampleCompositionAPI";

  export default defineClientConfig({
    // Client enhancements
    enhance: ({ app }) => {
      // register global component
      app.component("ExampleGlobalComponent", ExampleGlobalComponent);
    },

    // global registration
    setup() {
      // Register the global Composition API
      setupExampleCompositionAPI();
    },

    // global component
    rootComponents: [
      "ExampleRootComponent",
      //...
    ],
  });
  ```
