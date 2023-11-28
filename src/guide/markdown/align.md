---
title: Пользовательское выравнивание
icon: align-center
category:
  - Markdown
tag:
  - Выравнивание
  - Markdown
---

Внедрив конфигурацию в vuepress-plugin-container, вы можете использовать

```md
::: center
Абзац в центре
:::

::: right
Абзац справа
:::
```

Чтобы настроить выравнивание абзаца.

<!-- more -->

## Конфиг

::: code-tabs#language

@tab TS

```ts {8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        align: true,
      },
    },
  }),
});
```

@tab JS

```js {7-9}
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        align: true,
      },
    },
  }),
};
```

:::

## Демо

:::: caution
vuepress-theme-hope v2 все еще находится в стадии разработки, возможно, API

::: center
Значительные изменения.
:::

Если вы обнаружите ошибку во время использования, вы можете

::: right
[открыть issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues).
:::
::::

```md
:::: caution
vuepress-theme-hope v2 все еще находится в стадии разработки, возможно, API

::: center
Значительные изменения.
:::

Если вы обнаружите ошибку во время использования, вы можете

::: right
[открыть issue](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues).
:::
::::
```
