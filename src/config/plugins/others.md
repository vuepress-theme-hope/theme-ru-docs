---
title: Конфиг других плагинов
icon: ellipsis
order: 8
category:
  - Конфиг
tag:
  - Конфигурация плагина
  - Конфиг темы
---

## components

Управляет `vuepress-plugin-components`, предоставляя набор компонентов для Markdown.

Доступные компоненты, которые можно использовать в файлах уценки:

- `"Badge"`
- `"BiliBili"`
- `"CodePen"`
- `"PDF"`
- `"StackBlitz"`

Вы можете установить `plugin.components.components` с массивом компонентов, которые вы хотите, по умолчанию это будет `["Badge"]`.

Кроме того, вы можете установить `plugin.components.rootComponents`, чтобы включить некоторые корневые компоненты, такие как addThis и уведомление.

::: info

Параметры подключаемого модуля смотрите в разделе <ProjectLink name="components" path="/config.html">параметры подключаемого модуля компонентов</ProjectLink>.

:::

## copyCode <Badge text="включено по умолчанию" />

Управляет `vuepress-plugin-copy-code2`, предоставляя кнопку копирования кода.

По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение `false`.

::: info

Параметры плагина см. в разделе <ProjectLink name="copy-code2" path="/config.html">параметры плагина copy-code2</ProjectLink>.

:::

## git <Badge text="enabled in production" />

Управляет `@vuepress/plugin-git` для предоставления информации о файле через историю коммитов Git.

По умолчанию он включен только в режиме сборки для повышения производительности сервера разработки. Вы можете вручную установить логическое значение для управления состоянием плагина или указать параметры плагина.

::: info

Смотрите [Параметры плагина git][git-config] для опций плагина.

:::

## nprogress <Badge text="включено по умолчанию" />

Управляет `@vuepress/plugin-nprogress` и предоставляет индикатор выполнения при переключении страниц через nprogress.

По умолчанию тема включает этот плагин, вы можете установить `false`, чтобы отключить его.

## prismjs <Badge text="включено по умолчанию" />

Управляет `@vuepress/plugin-prismjs`, чтобы обеспечить подсветку блока кода через PrismJS.

По умолчанию тема включает этот плагин, вы можете установить `false`, чтобы отключить его и самостоятельно выделять блоки кода.

### prismjs.light

- Тип: `PrismjsTheme`
- По умолчанию: `"one-light"`
- Детали: [Интерфейс → Темы кода](../../guide/interface/code-theme.md)

Тема Prism.js используется в светлом режиме.

### prismjs.dark

- Тип: `PrismjsTheme`
- По умолчанию: `"one-dark"`
- Детали: [Интерфейс → Темы кода](../../guide/interface/code-theme.md)

Тема Prism.js используется в темном режиме.

## photoSwipe <Badge text="включено по умолчанию" />

Управляет `vuepress-plugin-photo-swipe`, обеспечивая функцию просмотра изображений.

По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение `false`.

::: info

Параметры плагина смотрите в разделе <ProjectLink name="photo-swipe" path="/config.html">параметры плагина photo-swipe</ProjectLink>.

:::

## readingTime <Badge text="включено по умолчанию" />

Управляет `vuepress-plugin-reading-time2`, подсчитывая количество слов на странице и генерируя расчетное время чтения.

### readingTime.wordPerMinute

- Тип: `number`
- По умолчанию: `300`

Слов, прочитанных за минуту.

::: info

Дополнительные параметры плагина смотрите в <ProjectLink name="reading-time2" path="/config.html">документации плагина reading-time2</ProjectLink>.

:::

## seo <Badge text="включено по умолчанию" />

Управляет `vuepress-plugin-seo2`, обеспечивая улучшения поисковой системы.

По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение `false`.

::: info

Конфигурацию плагина см. в разделе <ProjectLink name="seo2" path="/config.html">параметры плагина seo2</ProjectLink>.

:::

## sitemap <Badge text="включено по умолчанию" />

Управляет `vuepress-plugin-seo2`, обеспечивая автоматическое создание карты сайта.

По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение `false`.

::: info

Конфигурацию плагина смотрите в разделе <ProjectLink name="sitemap2" path="/config.html">параметры плагина sitemap2</ProjectLink>.

:::

[git-config]: https://v2.vuepress.vuejs.org/reference/plugin/git.html
