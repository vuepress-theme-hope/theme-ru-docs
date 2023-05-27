---
title: Команды проекта
icon: flag
order: 3
category:
  - Учебник с примерами
  - Руководство
  - Начало работы
tag:
  - Команды проекта
---

В этом руководстве представлены команды проекта VuePress.

<!-- more -->

## Общие команды

- `vuepress dev [dir]` запустит сервер разработки, чтобы вы могли локально разрабатывать свой сайт VuePress.
- `vuepress build [dir]` соберет ваш сайт VuePress в статические файлы для последующего развертывания.

::: info Использование шаблона

Если вы используете шаблон VuePress Theme Hope, вы можете найти следующие три команды в `package.json`:

```json
{
  "scripts": {
    "docs:build": "vuepress build docs",
    "docs:clean-dev": "vuepress dev docs --clean-cache",
    "docs:dev": "vuepress dev docs"
  }
}
```

Это означает, что вы можете использовать:

- `pnpm docs:dev` запускает сервер разработки
- `pnpm docs:build` собирает проект и выводит
- `pnpm docs:clean-dev` для очистки кеша и запуска сервера разработки

:::

::: info Завершить DevServer

Чтобы завершить работу сервера разработки, нажмите в терминале дважды `Ctrl + C`.

:::

## Обновить версию

Если вам нужно обновить тему и версию VuePress, выполните следующую команду:

::: code-tabs#shell

@tab pnpm

```bash
pnpm dlx vp-update
```

@tab yarn

```bash
yarn dlx vp-update
```

@tab npm

```bash
npx vp-update
```

:::

::: warning

Все официальные плагины, начинающиеся с `@vuepress/plugin-`, должны быть той же версии, что и VuePress.

То есть: если вы используете `@vuepress/plugin-search` и `@vuepress/utils`, вы должны убедиться, что они имеют тот же номер версии, что и `vuepress`.

Кроме того, если вы используете другой сторонний плагин, убедитесь, что он совместим с версией VuePress, до которой вы переходите.

:::
