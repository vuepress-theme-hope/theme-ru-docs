---
title: Конфиг плагина блога
icon: blog
order: 2
category:
  - Конфиг
tag:
  - Блог
  - Конфигурация плагина
  - Конфиг темы
---

## Введение

Тема предоставляет функцию блога, и она **не** включена по умолчанию.

Вы можете включить функцию блога, установив для `plugins.blog` значение `true` в настройках темы.

Инструкции смотрите в [Введение в блог](../../guide/blog/intro.md).

## Опции

### excerpt

- Тип: `boolean`
- По умолчанию: `true`

Генерировать ли выдержку для страницы.

### excerptSeparator

- Тип: `string`
- По умолчанию: `<!-- more -->`

Разделитель, используемый для отделения отрывка от содержимого страницы.

### excerptLength

- Тип: `number`
- По умолчанию: `300`

Длина выдержки при автогенерации.

### filter

- Тип: `(page: Page) => boolean`
- По умолчанию: `(page) => Boolean(page.filePathRelative) && !page.frontmatter.home`

Фильтр страниц, определяющий, следует ли включать страницу.

По умолчанию все страницы, созданные из файлов Markdown, но не домашняя страница, будут включены в качестве статей.

### excerptFilter

- Тип: `(page: Page) => boolean`
- По умолчанию: `filter` option

Фильтр страницы, определите, должен ли плагин генерировать для нее выдержку.

### type

- Тип: `BlogTypeOptions[]`

  ```ts
  interface BlogTypeOptions {
    /**
     * Unique type name
     */
    key: string;

    /**
     * A filter function to determine whether a page should be the type
     */
    filter: (page: Page) => boolean;

    /**
     * A custom function to sort the pages
     */
    sorter?: (pageA: Page, pageB: Page) => number;

    /**
     * Page path to be registered
     *
     * @default '/:key/'
     */
    path?: string;

    /**
     * Frontmatter
     */
    frontmatter?: (localePath: string) => Record<string, string>;

    /**
     * Layout name
     *
     * @default 'BlogType'
     */
    layout?: string;
  }
  ```

- По умолчанию: `[]`
- Детали:
  - [Руководство → Список статей](../../guide/blog/article.md#other-types-of-articles)

Дополнительный тип статьи.

### article

- Тип: `string`
- По умолчанию: `/article/`

Путь маршрута списка статей.

### category

- Тип: `string`
- По умолчанию: `/category/`

Путь маршрута карты категории.

### categoryItem

- Тип: `string`
- По умолчанию: `/category/:name/`

Путь маршрута списка категорий. `:name` будет заменено именем категории.

### tag

- Тип: `string`
- По умолчанию: `/tag/`

Отметьте путь маршрута карты.

### tagItem

- Тип: `string`
- По умолчанию: `/tag/:name/`

Путь маршрута списка тегов. `:name` будет заменено именем тега.

### star

- Тип: `string`
- По умолчанию: `/star/`

Путь маршрута к списку звездных статей.

### timeline

- Тип: `string`
- По умолчанию: `/timeline/`

Путь маршрута списка временной шкалы.

### hotReload

- Тип: `boolean`
- По умолчанию: Whether using `--debug` flag

Включить ли горячую перезагрузку на сервере разработки.
