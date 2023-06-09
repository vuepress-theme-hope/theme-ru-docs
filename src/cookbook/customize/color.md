---
title: Кастомизация цветов
icon: palette
category:
  - Учебник с примерами
  - Кастомизация
tag:
  - Кастомизация
---

На этой странице вы узнаете, как настроить цвета темы.

<!-- more -->

## Изменить встроенный цвет

Тема управляет цветом через палитру, вам может понадобиться установить свой цвет в двух случаях:

1. Этот цвет остается одинаковым в дневном и ночном режимах, как и цвет темы.
2. Этот цвет отличается в дневном и ночном режимах, например, цвет фона, шрифт, цвет границы и т. д.

Файл палитры — это файл `.vuepress/styles/palette.scss` в папке проекта VuePress.

Для первого вам нужно записать значения переменных в `palette.scss`, например:

```scss
// .vuepress/styles/palette.scss
$theme-color: #3eaf7c;
```

Для последнего вам необходимо настроить карту с ключевыми именами `light` и `dark`, и значениями в качестве значений цвета, например:

```scss
// .vuepress/styles/palette.scss
$bg-color: (
  light: #fff,
  dark: #000,
);
```

Смотрите [Конфигурация темы → Настройки цвета](../../config/style.md#color-config) для всех доступных цветовых переменных.

## Изменить другие цвета

Иногда вам может понадобиться изменить некоторые цвета, которых нет в `palette.scss`, например цвет фона блока кода. В настоящее время вы можете проверить, является ли соответствующее значение атрибута цвета переменной CSS с помощью devTools. Если это так, вы можете перейти к `index.scss`, чтобы вручную переопределить это значение переменной:

```scss
// .vuepress/styles/index.scss

// override code block background color
#app {
  --code-bg-color: #000;

  html[data-theme="dark"] & {
    --code-bg-color: #222;
  }
}
```

Если нет, напишите свои собственные селекторы, чтобы переопределить их:

```scss
// .vuepress/styles/index.scss

// override code block language font color
pre[class*="language-"]::before {
  color: #fff !important;

  html[data-theme="dark"] & {
    background-color: #222 !important;
  }
}
```
