---
title: Компоненты
icon: puzzle-piece
category:
  - Markdown
tag:
  - Компоненты
  - Markdown
---

Используя `vuepress-plugin-components`, вы можете импортировать и использовать некоторые компоненты в ваших файлах Markdown.

Доступные компоненты:

- ArtPlayer
- Badge
- BiliBili
- CodePen
- FontIcon
- PDF
- SiteInfo
- StackBlitz

По умолчанию `<Badge />` и `<FontIcon />` включены.

Чтобы включить компоненты, вы должны установить `plugin.components.components` с массивом имен компонентов.

<!-- more -->

::: code-tabs#language

@tab TS

```ts {8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      components: {
        // components you want
        components: ["Badge", "BiliBili", "CodePen", "PDF", "StackBlitz"],
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
      components: {
        // components you want
        components: ["Badge", "BiliBili", "CodePen", "PDF", "StackBlitz"],
      },
    },
  }),
};
```

:::

## ArtPlayer

Видеоплеер:

<ArtPlayer src="https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4" />

```md
<ArtPlayer src="https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4" />
```

Видеоплеер с постером:

<ArtPlayer
  src="https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4"
  poster="/poster.svg"
/>

```md
<ArtPlayer
  src="https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4"
  poster="/poster.svg"
/>
```

Видеоплеер с пользовательскими настройками:

<ArtPlayer
  src="https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4"
  airplay
  aspect-ratio
  auto-size
  auto-orientation
  auto-playback
  fast-forward
  flip
  fullscreen-web
  lock
  loop
  is-live
  muted
  mini-progress-bar
  pip
  screenshot
  subtitle-offset
/>

```md
<ArtPlayer
  src="https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4"
  airplay
  aspect-ratio
  auto-size
  auto-orientation
  auto-playback
  fast-forward
  flip
  fullscreen-web
  lock
  loop
  is-live
  muted
  mini-progress-bar
  pip
  screenshot
  subtitle-offset
/>
```

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/artplayer.html">ArtPlayer</ProjectLink>.

## Значок

Компонент значка.

- <Badge text="tip" type="tip" vertical="middle" />
- <Badge text="warning" type="warning" vertical="middle" />
- <Badge text="danger" type="danger" vertical="middle" />
- <Badge text="info" type="info" vertical="middle" />
- <Badge text="note" type="note" vertical="middle" />

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/badge.html">Значок</ProjectLink>.

## BiliBili

Встраивайте видео BiliBili в файлы Markdown.

Видео bilibili:

<BiliBili bvid="BV1kt411o7C3" />

```md
<BiliBili bvid="BV1kt411o7C3" />
```

Видео bilibili со временем начала и страницей:

<BiliBili bvid="BV1kt411o7C3" ratio="16:9" time="60" page="2" />

```md
<BiliBili bvid="BV1kt411o7C3" ratio="16:9" time="60" page="2" />
```

Смотрите страницу <ProjectLink name="components" path="/guide/bilibili.html">BiliBili</ProjectLink> для доступных свойств.

## CodePen

Компонент, который позволяет встраивать демо-версию CodePen.

Демонстрация с пользователем и слаг-хешем:

<CodePen user="kowlor" slug-hash="ZYYQoy" title="Solar System animation - Pure CSS" :default-tab="['css','result']" :theme="$isDarkmode? 'dark': 'light'" />

```md
<CodePen
  user="kowlor"
  slug-hash="ZYYQoy"
  title="Solar System animation - Pure CSS"
  :default-tab="['css','result']"
  :theme="$isDarkmode? 'dark': 'light'"
/>
```

Демо со ссылкой:

<CodePen link="https://codepen.io/kowlor/pen/ZYYQoy" title="Solar System animation - Pure CSS" :default-tab="['css','result']" :theme="$isDarkmode? 'dark': 'light'" />

```md
<CodePen
  link="https://codepen.io/kowlor/pen/ZYYQoy"
  title="Solar System animation - Pure CSS"
  :default-tab="['css','result']"
  :theme="$isDarkmode? 'dark': 'light'"
/>
```

Нажмите, чтобы запустить демонстрацию:

<CodePen link="https://codepen.io/keginaring/pen/XWZazwW" title="Solar System animation - Pure CSS" status="clicktorun" :theme="$isDarkmode? 'dark': 'light'" />

```md
<CodePen
  link="https://codepen.io/kowlor/pen/ZYYQoy"
  title="Envelope w/ Hearts"
  status="clicktorun"
  :default-tab="['css','result']"
  :theme="$isDarkmode? 'dark': 'light'"
/>
```

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/codepen.html">CodePen</ProjectLink>.

## FontIcon

Компонент, который позволяет отображать иконки шрифтов.

- Иконка «Главная»: <FontIcon icon="home" />
- Большая зеленая иконка «Поделиться»: <FontIcon icon="share" color="#3eaf7c" size="32" />

```md
- Иконка «Главная»: <FontIcon icon="home" />
- Большая зеленая иконка «Поделиться»: <FontIcon icon="share" color="#3eaf7c" size="32" />
```

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/fonticon.html">FontIcon</ProjectLink>.

## PDF

Компонент просмотра PDF.

Средство просмотра PDF по умолчанию:

<PDF url="/assets/sample.pdf" />

```md
<PDF url="/assets/sample.pdf" />
```

Просмотрщик PDF без панели инструментов, Просмотрщик PDF с начальной страницей 2:

<PDF url="/assets/sample.pdf" page="2" no-toolbar />

```md
<PDF url="/assets/sample.pdf" page="2" no-toolbar />
```

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/pdf.html">PDF</ProjectLink>.

## SiteInfo

Основная информация о сайте:

<SiteInfo name="Mr.Hope’s Blog" url="https://mister-hope.com" preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg" />

```md
<SiteInfo name="Mr.Hope’s Blog" url="https://mister-hope.com" preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg" />
```

Информация о сайте с дополнительными свойствами:

<SiteInfo
  name="Mr.Hope’s Blog"
  desc="Where there is light, there is hope"
  url="https://mister-hope.com"
  logo="https://mister-hope.com/logo.svg"
  repo="https://github.com/Mister-Hope/Mister-Hope.github.io"
  preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg"
/>

```md
<SiteInfo
  name="Mr.Hope’s Blog"
  desc="Where there is light, there is hope"
  url="https://mister-hope.com"
  logo="https://mister-hope.com/logo.svg"
  repo="https://github.com/Mister-Hope/Mister-Hope.github.io"
  preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg"
/>
```

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/siteinfo.html">SiteInfo</ProjectLink>.

## StackBlitz

Встраивайте демонстрацию StackBlitz в файлы разметки.

Проект StackBlitz:

<StackBlitz id="vuepress-theme-hope" />

```md
<StackBlitz id="vuepress-theme-hope" />
```

Проект StackBlitz с пользовательскими настройками:

<StackBlitz id="vuepress-theme-hope" hideExplorer hideNavigation hideDevtools />

```md
<StackBlitz id="vuepress-theme-hope" hideExplorer hideNavigation hideDevtools />
```

Доступные свойства смотрите на странице <ProjectLink name="components" path="/guide/stackblitz.html">StackBlitz</ProjectLink>.
