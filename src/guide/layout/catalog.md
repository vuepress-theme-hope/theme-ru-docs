---
title: Страница каталога
icon: network-wired
order: 6
category:
  - Макет
tag:
  - Каталог
  - Макет
---

VuePress Theme Hope автоматически создает `README.md` с каталогом для каждой папки по умолчанию, используя <ProjectLink name="auto-catalog">`vuepress-plugin-catalog`</ProjectLink>.

<!-- more -->

## Введение

Вы можете использовать `plugin.autoCatalog` в настройках темы для управления этой функцией. Если вы хотите отключить его, установите для `plugin.autoCatalog` значение `false`.

Вы можете использовать `plugin.autoCatalog.exclude`, чтобы исключить некоторые папки из генерации каталога, и вы можете использовать `plugin.autoCatalog.frontmatter`, чтобы контролировать генерацию главной страницы

Дополнительные сведения смотрите в <ProjectLink name="auto-catalog">Документации по плагину автоматического каталога</ProjectLink>.

## Демо

Каталог главной страницы:

<!-- markdownlint-disable MD033 -->

<div class="catalog-display-container">
  <AutoCatalog base='/' />
</div>

<!-- markdownlint-enable MD033 -->

```md
<AutoCatalog base='/' />
```
