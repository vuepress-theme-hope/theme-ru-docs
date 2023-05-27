---
title: Основные опции темы
icon: circle-info
order: 2
category:
  - Конфиг
tag:
  - Основы
  - ThemeConfig
---

::: danger

Эти параметры важны и требуют правильной настройки.

:::

<!-- more -->

## hostname <Badge text="Только root" type="warning" />

- Тип: `string`
- Обязательный: Да

Домен, на который будет развернут сайт.

::: tip

Он должен содержать полный протокол (например: `https://example.com`).

:::

## author

- Тип: `Author`

  ```ts
  type AuthorName = string;

  interface AuthorInfo {
    /**
     * Author name
     */
    name: string;

    /**
     * Author website
     */
    url?: string;

    /**
     * Author email
     */
    email?: string;
  }

  type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[];
  ```

- Обязательный: Нет

Глобальный автор по умолчанию.

## favicon

- Type: `string`
- Required: No

Site favicon.

## navbar

- Тип: `NavbarConfig`

  ```ts
  interface TextItemOptions {
    /**
     * Text of item
     */
    text: string;

    /**
     * Icon of item
     */
    icon?: string;

    /**
     * Aria label of item
     */
    ariaLabel?: string;
  }

  interface AutoLinkOptions extends TextItemOptions {
    /**
     * link of item
     */
    link: string;

    /**
     * Rel of `<a>` tag
     */
    rel?: string;

    /**
     * Target of `<a>` tag
     */
    target?: string;

    /**
     * Regexp mode to be active
     */
    activeMatch?: string;
  }

  interface NavGroup<T> extends TextItemOptions {
    /**
     * Link prefix of current group
     */
    prefix?: string;

    /**
     * Link of current group
     */
    link?: string;

    /**
     * Children of current group
     */
    children: T[];
  }

  type NavbarItem = AutoLinkOptions;
  type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
  type NavbarConfig = (NavbarItem | NavbarGroup | string)[];
  ```

- Детали: [Макет → Панель навигации](../../guide/layout/navbar.md)

Конфигурация панели навигации

## sidebar

- Тип: `SidebarConfig`

  ```ts
  interface TextItemOptions {
    /**
     * Text of item
     */
    text: string;

    /**
     * Icon of item
     */
    icon?: string;

    /**
     * Aria label of item
     */
    ariaLabel?: string;
  }

  interface AutoLinkOptions extends TextItemOptions {
    /**
     * link of item
     */
    link: string;

    /**
     * Rel of `<a>` tag
     */
    rel?: string;

    /**
     * Target of `<a>` tag
     */
    target?: string;

    /**
     * Regexp mode to be active
     */
    activeMatch?: string;
  }

  type SidebarPageItem = AutoLinkOptions;

  interface SidebarGroupItem extends TextItemOptions {
    /**
     * Link prefix of current group
     */
    prefix?: string;

    /**
     * Link of current group
     */
    link?: string;

    /**
     * Whether current group is collapsible
     *
     * @default false
     */
    collapsible?: boolean;

    /**
     * Children of current group
     */
    children: (
      | SidebarPageItem
      | SidebarGroupItem
      | SidebarStructureItem
      | string
    )[];
  }

  interface SidebarStructureItem extends TextItemOptions {
    /**
     * Link prefix of current group
     */
    prefix?: string;

    /**
     * Link of current group
     */
    link?: string;

    /**
     * Whether current group is collapsible
     *
     * @default false
     */
    collapsible?: boolean;

    children: "structure";
  }

  type SidebarItem =
    | SidebarPageItem
    | SidebarGroupItem
    | SidebarStructureItem
    | string;

  type SidebarArrayConfig = SidebarItem[];

  type SidebarObjectConfig = Record<
    string,
    SidebarArrayConfig | "structure" | false
  >;

  type SidebarConfig = SidebarArrayConfig | SidebarObjectConfig;
  ```

- Детали: [Макет → Боковая панель](../../guide/layout/sidebar.md)

Конфигурация боковой панели

## locales

- Тип: `Record<string, ThemeLocaleOptions>`
- Детали:
  - [Конфигурация мультиязыка темы](./i18n.md)

I18n конфиг темы, где можно задать параметры для каждого языка отдельно.

## hotReload

- Тип: `boolean`
- По умолчанию: Используется ли флаг `--debug`

Включить ли горячую перезагрузку на сервере разработки.

::: tip

Как правило, вы ожидаете:

- devServer может быть запущен как можно скорее
- изменения в уценке могут быстро вступить в силу на devServer и избежать перезапуска всего приложения VuePress.

Чтобы реализовать это ожидание, теме необходимо пропустить некоторые трудоемкие операции на devServer, а также отключить некоторые трудоемкие функции, которые запускаются модификациями страниц на devServer, чтобы повысить скорость запуска проекта и горячего обновления. В то же время, поскольку некоторые модификации изменят базовые необработанные данные VuePress, эти модификации приведут к обновлению веб-страницы и перезагрузке всего приложения VuePress. Чтобы избежать частых перезагрузок страниц (т. е. обновление страницы запускается, и вы получаете пустой экран в течение нескольких секунд) при изменении Markdown тема отключает некоторые функции на devServer.

По умолчанию devServer имеет следующие ограничения:

- Функции на основе Git не будут включены, включая участников, дату автоматического создания и время последнего обновления (вызов двоичного кода Git и создание файлового ввода-вывода вызывают большие затраты времени)
- Структурированная боковая панель будет создаваться только при запуске приложения и не будет обновляться впоследствии (сортировка и индексация боковой панели зависят от внешнего вида каждой страницы, любое изменение содержимого Markdown вызовет пересчет, поэтому большое количество страниц приведет к большим затратам времени)
- Статьи блога, теги, категории и списки статей в каждой категории не будут обновляться с помощью devServer (любое изменение содержимого Markdown вызовет пересчет, поэтому большое количество страниц приведет к большим затратам времени)
- ReadingTime и Word Info в информацию статьи блога не вводятся (любое изменение содержимого Markdown изменит информацию о количестве слов на странице, поэтому базовые необработанные данные VuePress обновляются, вызывая обновление страницы)

Включение этого означает, что вы соглашаетесь с тем, что каждое изменение вызовет некоторые дорогостоящие пересчеты, и все приложение будет перезапущено, что обычно приводит к обновлению страницы и нескольким секундам пустого экрана в средах с низкой производительностью.

:::
