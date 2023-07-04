import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as i,f as c,b as n,e as s,a as o,w as u,i as a}from"./app-d6a6dcfa.js";const k="/assets/home-light-b511a795.jpg",d="/assets/home-dark-4b9180d3.jpg",r={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" улучшает домашнюю страницу по умолчанию.")],-1),m=n("p",null,[s("Чтобы использовать его, установите "),n("code",null,"home: true"),s(" в frontmatter страницы. Любой дополнительный контент после "),n("code",null,"YAML front matter"),s(" будет проанализирован как обычный Markdown и отображен после раздела функций.")],-1),b=n("p",null,[n("img",{src:k,alt:"Скриншот","data-mode":"lightmode-only",loading:"lazy"}),n("br"),n("img",{src:d,alt:"Скриншот","data-mode":"darkmode-only",loading:"lazy"})],-1),y=a('<h2 id="информация-о-саите" tabindex="-1"><a class="header-anchor" href="#информация-о-саите" aria-hidden="true">#</a> Информация о сайте</h2><p>Вы можете использовать <code>heroText</code>, чтобы установить основной заголовок, и <code>tagline</code>, чтобы установить подзаголовок.</p><p>Если у вас есть логотип, вы можете поместить его в <code>public</code> папку и установить через <code>heroImage</code>, если вы хотите отображать другой логотип в ночном режиме, вы можете использовать <code>heroImageDark</code>. Для лучшего A11y мы рекомендуем вам установить описание логотипа на <code>heroAlt</code>.</p><h2 id="кнопка-домашняя-страница" tabindex="-1"><a class="header-anchor" href="#кнопка-домашняя-страница" aria-hidden="true">#</a> Кнопка Домашняя страница</h2><p>Вы можете отобразить некоторые важные ссылки в виде кнопок на главной странице.</p><p>Вы можете установить их через <code>actions</code>, которые представляют собой массив, где каждый элемент является объектом со следующими ключами:</p><ul><li><code>text</code>: текст кнопки</li><li><code>link</code>: ссылка кнопки</li><li><code>type</code>: тип кнопки (поддерживаются только <code>&quot;primary&quot;</code> и <code>&quot;default&quot;</code> (по умолчанию))</li></ul><h2 id="особенности-проекта" tabindex="-1"><a class="header-anchor" href="#особенности-проекта" aria-hidden="true">#</a> Особенности проекта</h2><p>Вы можете установить и отобразить характеристики элемента через <code>features</code>, которые представляют собой массив, каждый элемент которого представляет собой объект, содержащий следующие ключи:</p><ul><li><code>title</code>: название</li><li><code>details</code>: детали</li><li><code>icon</code> (опционально): может быть заполнен полным или абсолютным путем ссылки на изображение или FontClass</li><li><code>link</code> (опционально): адрес ссылки</li></ul>',10),h={class:"hint-container info"},g=n("p",{class:"hint-container-title"},"Инфо",-1),f=a(`<h2 id="демо" tabindex="-1"><a class="header-anchor" href="#демо" aria-hidden="true">#</a> Демо</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">title</span><span class="token punctuation">:</span> Главная
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> Тема vuepress с множеством функций✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Руководство 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Вступление 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Конфиг 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Демо 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Улучшение разметки
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> fab fa<span class="token punctuation">-</span>markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Добавление выравнивания<span class="token punctuation">,</span> надстрочного/подстрочного скрипта<span class="token punctuation">,</span> сноски<span class="token punctuation">,</span> списка задач<span class="token punctuation">,</span> текста<span class="token punctuation">,</span> блок<span class="token punctuation">-</span>схемы<span class="token punctuation">,</span> диаграммы<span class="token punctuation">,</span> выделения и поддержка презентации в Markdown
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Слайд<span class="token punctuation">-</span>страница
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Добавление страниц слайдов для отображения того<span class="token punctuation">,</span> что вам нравится
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/layout/slides

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Улучшение макета
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> object<span class="token punctuation">-</span>group
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Добавление хлебных крошек<span class="token punctuation">,</span> нижнего колонтитула<span class="token punctuation">,</span> улучшенной панели навигации<span class="token punctuation">,</span> улучшенной навигации по страницам и т. д.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/layout/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Просмотры страниц и комментарии
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment<span class="token punctuation">-</span>dots
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Запустите статистику просмотров страниц и поддержку комментариев с помощью Waline
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/comment.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Информация о статье
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Добавление автора<span class="token punctuation">,</span> даты написания<span class="token punctuation">,</span> время чтения<span class="token punctuation">,</span> количество слов и другой информации в свою статью
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/page<span class="token punctuation">-</span>info.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Поддержка блога
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Список ваших статей с их датами<span class="token punctuation">,</span> тегами и категориями с некоторыми потрясающими макетами
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/blog/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Пользовательский цвет темы
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Поддержка пользовательских цветов темы и позволяет пользователям переключаться между предустановленными цветами темы
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/theme<span class="token punctuation">-</span>color.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Темный режим
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>half<span class="token punctuation">-</span>stroke
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Свободно переключайтесь между светлым и темным режимами
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/darkmode.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Полная поддержка A11y
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> universal<span class="token punctuation">-</span>access
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Полная поддержка специальных возможностей на вашем сайте
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/accessibility.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Шифрование статьи
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Шифруйте свои статьи на основе ссылок на страницы<span class="token punctuation">,</span> чтобы их мог видеть только тот<span class="token punctuation">,</span> кому вы хотите
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/encrypt.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Поиск
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Поддержка docsearch и клиентского поиска
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/search.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Кнопка копирования
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Копируйте коды одним кликом в блоках кодов
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/copy<span class="token punctuation">-</span>code.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Предпросмотр изображения
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Поддержка просмотра<span class="token punctuation">,</span> масштабирования<span class="token punctuation">,</span> обмена изображениями на странице<span class="token punctuation">,</span> например<span class="token punctuation">,</span> в галерее
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> СЕО<span class="token punctuation">-</span>улучшения
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> dumbbell
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Оптимизация страниц для поисковых систем
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/seo.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Карта сайта
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Создание карты сайта для своего сайта
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/sitemap.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Поддержка каналов
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Создание потока<span class="token punctuation">,</span> чтобы пользователи могли подписаться на него
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/feed.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Поддержка PWA
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile<span class="token punctuation">-</span>screen
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Сделайте свой сайт больше похожим на APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/advanced/pwa.html

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Больше новых функций
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> ellipsis
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Включая поддержку иконок<span class="token punctuation">,</span> полноэкранную кнопку и т. д.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(x,w){const e=l("RouterLink");return p(),i("div",null,[v,m,b,c(" more "),y,n("div",h,[g,n("p",null,[s("Полные элементы конфигурации смотрите в разделе "),o(e,{to:"/config/frontmatter/home.html"},{default:u(()=>[s("Конфигурация Frontmatter домашней страницы")]),_:1}),s(".")])]),f])}const C=t(r,[["render",_],["__file","home.html.vue"]]);export{C as default};
