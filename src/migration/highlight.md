---
title: Основные моменты версии 2
icon: fire
---

Мы настоятельно рекомендуем вам перейти на версию V2, так как версия V2 содержит следующие улучшения.

<!-- more -->

## Обзор

V2 is coming come together with [_VuePress2_](https://v2.vuepress.vuejs.org), with the power of [_Vite4_](https://vitejs.dev) / [_Webpack5_](https://webpack.js.org) and [_Vue3_](https://vuejs.org).

V2 полностью переписан, включая:

- Все компоненты переписаны с помощью _Composition API в Vue3_
- Все стили перенесены в _Sass_

Также V2 имеет лучшую производительность:🚀

- Время холодного запуска DevServer уменьшено на **50%**
- Использование памяти сборки уменьшено на **65%**
- Время сборки уменьшено на **30%**
- Размер вывода уменьшен на **35%**
- Производительность веб-страницы до **70%**

## Изменения Vue3

Vue 3 использует прокси для обеспечения реактивности и поддержки совершенно нового composition api. Реактивность на основе прокси намного быстрее, чем реактивность в старом стиле, основанная на setter/getter.

Additionally, the Composition API is tree-shaking friendly, meaning features that are not enabled can be removed during the build process.

## Изменения VuePress2

VuePress v2 разработан с использованием TypeScript, поэтому теперь он обеспечивает лучшую поддержку TS.

VuePress@v2 также отделяет упаковщик от ядра. Добавление VuePress v2 поддерживает как Webpack, так и Vite в качестве сборщика. Теперь Vite является упаковщиком по умолчанию, хотя вы все еще можете использовать Webpack. Вы даже можете использовать Vite в режиме разработки, чтобы получить лучший опыт разработки, и использовать Webpack в режиме сборки, чтобы улучшить совместимость браузера.

VuePress@v2 намного более гибкий, чем VuePress@v1, он удаляет siteData и siteData.pages, что значительно увеличивает масштабируемость (особенно на больших сайтах с большим количеством страниц). Он имеет более высокий балл на маяке по сравнению с V1 с меньшим временем загрузки и более высокой производительностью.

## Изменения VuePress Theme Hope

VuePressThemeHope@v2 переписан с composition API, а его система стилей перенесена со стилуса на sass.

Переписав тему и плагины с composition API, почти отключенная функция может быть удалена с помощью tree-shaking при связывании, чтобы вы могли легко получить меньший размер.

Кроме того, мы добавляем новые функции в VuePressThemeHope@v2.

### Функции

#### Блог

- Теперь вся функция блога является древовидной и отключена по умолчанию.

  Чтобы включить его, вам нужно установить для `plugins.blog` значение `true`.

- Иконки социальных сетей теперь можно изменять в дереве, и [иконки можно настраивать](../guide/blog/blogger.md)

- Поддержка [отключение раздела Hero или фонового изображения главной страницы блога](../guide/blog/home.md)

- Поддержка [настройки иконок для проектов](../guide/blog/home.md)

- Support [customizing blog page path](../guide/blog/path.md) now

- Support [customizing blog post type](../guide/blog/article.md#other-types-of-articles)

- Support [automatic abstract generation](../guide/blog/article.md#automatically-generate-excerpt)

#### Комментарий

Valine и Vssue больше не поддерживаются.

Вместо этого мы добавляем поддержку Artalk, Giscus и Twikoo помимо Waline.

#### Шифрование

- Теперь функция шифрования удобна для встряхивания дерева, а проверка шифрования выполняется только при необходимости.
- Пароль во frontmatter удален.

#### Поток

- Поток больше не генерируется по умолчанию
- Поддержка опции `getter`, чтобы вы могли полностью настроить генерацию потоков.

#### PhotoSwipe

Теперь мы используем PhotoSwipe@v5, который меньше по размеру.

#### PWA

- Поддержка контроля обновлений
- Поддержка добавления базы для манифеста

#### SEO

- Добавлена поддержка каноничных ссылок
- Добавлена поддержка JSON-LD
- Теперь поддерживается внедрение любых тегов заголовка в версии 2.

#### Auto-generating Catalog Page

- The new `auto-catalog` plugin can automatically generate catalog pages for you

#### Others

- pure mode

  The theme now supports [pure mode](../guide/interface/pure.md) with less fancy styles and animations.

- RTL layout

  Themes now fully support RTL layouts

- printing support

  You can now print theme pages using the print button

### Layout

#### Home

- New homepage style
- Added multi-feature support
- Feature added icon support

#### Страница

- Обновление внешнего вида
- Перестроено оглавление, теперь оглавление а
- Support for [more Markdown components](../guide/markdown/components.md)

#### Панель навигации и боковая панель

- Перспектива обновлена

- Теперь они имеют одинаковые параметры конфигурации

- Новая опция `activeMatch`, определяющая, должен ли элемент быть активным.

- Поддержка нового ключевого слова `"structure"` для [создания боковой панели из файловой структуры](../guide/layout/sidebar.md#автоматическая-боковая-панель)

- Боковая панель теперь автоматически открывается и прокручивается до активированного элемента.

#### Print

Now you can print website pages.

#### Code Block Theme

You can now [set different themes](../guide/interface/code-theme.md) for code blocks in dark mode and light mode.

### Markdown

Добавлены следующие новые функции:

- [Метка изображения](../guide/markdown/image.md#маркировка-изображения)

- [GFM](../guide/markdown/others.md#gfm)

- [Chart.js](../guide/markdown/chart.md)

- [ECharts](../guide/markdown/echarts.md)

- [Включение файла](../guide/markdown/include.md)

- [Вкладки кода](../guide/markdown/code-tabs.md)

- [Вкладки](../guide/markdown/tabs.md)
