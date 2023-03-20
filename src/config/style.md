---
title: Конфиг стиля
icon: wand-magic-sparkles
order: 6
category:
  - Конфиг
tag:
  - Конфиг темы
  - Стиль
---

Вы можете изменить стили темы в `.vuepress/styles`, установив значения переменных в файлах `config.scss` и `palette.scss`.

Также вы можете добавить свои собственные стили в `.vuepress/styles/index.scss`.

<!-- more -->

## config.scss

`config.scss` используется для чистой конфигурации переменных, ниже перечислены поддерживаемые переменные и значения по умолчанию.

Отзывчивые контрольные точки:

- `$pc`
- `$laptop`
- `$pad`
- `$tablet`
- `$mobile`

Блок кода (shiki only):

- `$code-bg-color`: background color for code blocks
- `$code-color`: font color for code blocks

Список цветов: `$colors`

::: details Демо

```scss
// update pc breakpoint
$pc: 1920px;
```

:::

::: details Значение по умолчанию

```scss
/* responsive breakpoints */

// wide screen
$pc: 1440px !default;

// desktop
$laptop: 1280px !default;

// narrow desktop / iPad
$pad: 959px !default;

// wide mobile
$tablet: 719px !default;

// narrow mobile
$mobile: 419px !default;

/* Color list */
$colors: #cf1322, #fa541c, #f39c12, #2ecc71, #25a55b, #10a5a5, #096dd9, #aa6fe9,
  #eb2f96 !default;

/* Code Block */
// only available with shiki highlighter
$code-color: (
  light: #383a42,
  dark: #abb2bf,
) !default;
$code-bg-color: (
  light: #ecf4fa,
  dark: #282c34,
) !default;
```

:::

## palette.scss

`palette.scss` используется для вставки переменных CSS, ниже приведены поддерживаемые конфигурации и значения по умолчанию.

::: info

Все переменные здесь (включая недавно добавленные переменные) будут преобразованы в формат kebab-case и введены как переменные CSS.

Например, `$theme-color` будет введено как `--theme-color`, а `$backgroundColor` будет введено как `--$background-color`.

:::

### Конфигурация цвета

Для всех цветов, если они одинаковы в светлом и темном режимах, вы можете установить их напрямую; в противном случае установите переменную Sass типа Map, чтобы задать значения цвета в светлом и темном режимах соответственно.

Доступные цветовые переменные:

- `$theme-color`: цвет темы
- `$text-color`: цвет текста
- `$bg-color`: цвет фона
- `$bg-color-secondary`: более светлый цвет фона
- `$bg-color-tertiary`: более светлый цвет фона
- `$border-color`: цвет границы
- `$box-shadow`: использование цвета тени для элементов
- `$card-shadow`: использование цвета тени на картах

::: details Демо

```scss
// set theme color to red
$theme-color: red;

// setting border color with a darker value
$border-color: (
  light: #ddd,
  dark: #444,
);
```

:::

::: details Значение по умолчанию

```scss
$theme-color: #3eaf7c !default;
$text-color: (
  light: #2c3e50,
  dark: #9e9e9e,
) !default;
$bg-color: (
  light: #fff,
  dark: #0d1117,
) !default;
$bg-color-secondary: (
  light: #f8f8f8,
  dark: #161b22,
) !default;
$bg-color-tertiary: (
  light: #efeef4,
  dark: #21262c,
) !default;
$border-color: (
  light: #eaecef,
  dark: #30363d,
) !default;

// shadow
$box-shadow: (
  light: #f0f1f2,
  dark: #282a32,
) !default;
$card-shadow: (
  light: rgb(0 0 0 / 15%),
  dark: rgb(0 0 0 / 30%),
) !default;

// constants
$black: (
  light: #000,
  dark: #fff,
);
$dark-grey: (
  light: #666,
  dark: #999,
);
$light-grey: (
  light: #999,
  dark: #666,
);
$white: (
  light: #fff,
  dark: #000,
);
$grey3: (
  light: #333,
  dark: #bbb,
);
$grey12: (
  light: #bbb,
  dark: #333,
);
$grey14: (
  light: #eee,
  dark: #111,
);
```

:::

### Конфигурация макета

Доступные переменные макета:

Панель навигации:

- `$navbar-height`: высота панели навигации
- `$navbar-horizontal-padding`: горизонтальное заполнение навигационной панели
- `$navbar-vertical-padding`: вертикальное заполнение навигационной панели
- `$navbar-mobile-height`: высота панели навигации на мобильных устройствах
- `$navbar-mobile-horizontal-padding`: горизонтальное заполнение панели навигации на мобильных устройствах
- `$navbar-mobile-vertical-padding`: вертикальное заполнение панели навигации на мобильных устройствах

Боковая панель:

- `$sidebar-width`: ширина боковой панели
- `$sidebar-mobile-width`: ширина боковой панели на мобильных устройствах

Содержание:

- `$content-width`: ширина основного содержимого
- `$home-page-width`: ширина содержимого главной страницы

Шрифты:

- `$font-family`: семейство шрифтов, используемое для обычного текста
- `$font-family-heading:` семейство шрифтов, используемое в причудливых элементах

Код:

- `$font-family-mono`: семейство шрифтов, используемое в коде
- `$line-numbers-width`: ширина номера строки в кодовых блоках

Переход:

- `$color-transition`: переход, используемый для цветов
- `$transform-transition`: переход, используемый при анимации преобразования

::: details Демо

```scss
// update navbar height on mobile
$navbar-mobile-height: 3.5rem;

// Override default font
$font-family: 'Georgia, -apple-system, "Nimbus Roman No9 L", "PingFang SC", "Hiragino Sans GB", sans-serif';
```

:::

::: details Значение по умолчанию

```scss
/* layout */
// navbar
$navbar-height: 3.75rem !default;
$navbar-horizontal-padding: 1.5rem !default;
$navbar-vertical-padding: 0.7rem !default;
$navbar-mobile-height: 3.25rem !default;
$navbar-mobile-horizontal-padding: 1rem !default;
$navbar-mobile-vertical-padding: 0.5rem !default;

// sidebar
$sidebar-width: 18rem !default;
$sidebar-mobile-width: 16rem !default;

// content
$content-width: 780px !default;
$home-page-width: 1160px !default;

// font
$font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", STHeiti, "Microsoft YaHei", SimSun, sans-serif' !default;
$font-family-heading: 'Georgia Pro, Crimson, Georgia, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", STHeiti, "Microsoft YaHei", SimSun, sans-serif' !default;

// code
$font-family-mono: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace' !default;
$line-numbers-width: 2.5rem !default;

// transition
$color-transition: "0.3s ease" !default;
$transform-transition: "0.3s ease" !default;
```

:::

## index.scss

Все, что заполняет это, будет проанализировано до стандартного CSS, а затем вставлено после стилей темы и плагинов.

Таким образом, вы можете добавить новые стили или переопределить стили здесь:

::: details Демо

```scss
// make site name in navbar italic
.site-name {
  font-style: italic;
}
```

:::
