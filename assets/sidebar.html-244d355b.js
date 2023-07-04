import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as k,c as m,f as v,a as o,w as a,b as n,e as s,i as l}from"./app-d6a6dcfa.js";const b={},h=n("p",null,"Боковая панель может содержать список связанных документов, заголовков документов и информацию о блоггерах в режиме блога.",-1),g=n("h2",{id:"ссылки-на-боковои-панели",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ссылки-на-боковои-панели","aria-hidden":"true"},"#"),s(" Ссылки на боковой панели")],-1),f=n("p",null,[s("Вы должны использовать "),n("code",null,"sidebar"),s(" в настройках темы для управления боковой панелью.")],-1),y=n("h3",{id:"строковыи-формат",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#строковыи-формат","aria-hidden":"true"},"#"),s(" Строковый формат")],-1),w=n("p",null,"Как и в случае с навигационной панелью, вы можете заполнить массив из нескольких ссылок на файлы в качестве базовой конфигурации боковой панели:",-1),_=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),x=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"guide/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"config/README.md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),D=l('<p>Каждый элемент массива будет отображаться как элемент боковой панели.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Вы можете опустить расширение <code>.md</code>, а пути, оканчивающиеся на <code>/</code>, подразумеваются как <code>/README.md</code>.</p></div><h3 id="формат-объекта" tabindex="-1"><a class="header-anchor" href="#формат-объекта" aria-hidden="true">#</a> Формат объекта</h3><p>Как и в случае с навигационной панелью, если вас не устраивает значок страницы или вы считаете, что заголовок страницы слишком длинный, вы можете вместо этого настроить объект. Доступные элементы конфигурации:</p><ul><li><code>text:</code>: элемент теста</li><li><code>link</code>: элемент ссылка</li><li><code>icon</code>: элемент иконка (опционально)</li><li><code>activeMatch</code>: элемент активного совпадения(опционально), поддержка строк регулярных выражений</li></ul>',5),A=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Guide"'),n("span",{class:"token punctuation"},","),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/guide/README.md"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"lightbulb"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// only active in `/guide/`"),s(`
        activeMatch`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/guide/$"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Config"'),n("span",{class:"token punctuation"},","),s(" link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/config/README.md"'),n("span",{class:"token punctuation"},","),s(" icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FAQ"'),n("span",{class:"token punctuation"},","),s(`
        link`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/faq.md"'),n("span",{class:"token punctuation"},","),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"circle-question"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// active in path starting with `/faq`"),s(`
        `),n("span",{class:"token comment"},"// so it will active in path like `/faq/xxx.html`"),s(`
        activeMatch`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Guide"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/guide/README.md"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"lightbulb"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// only active in `/guide/`"),s(`
        `),n("span",{class:"token literal-property property"},"activeMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/guide/$"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Config"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/config/README.md"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"config"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"FAQ"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/faq.md"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"circle-question"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// active in path starting with `/faq`"),s(`
        `),n("span",{class:"token comment"},"// so it will active in path like `/faq/xxx.html`"),s(`
        `),n("span",{class:"token literal-property property"},"activeMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^/zh/faq/"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=l('<div class="hint-container tip"><p class="hint-container-title">Расширенное использование activeMatch</p><p><code>activeMatch</code> дает вам возможность контролировать, активен ли путь, например, у вас может быть следующее раскрывающееся меню:</p><ul><li><code>/path/</code></li><li><code>/path/a/</code></li><li><code>/path/b/</code></li></ul><p>Но у вас может быть несколько папок с файлами в папке <code>/path/</code>. Чтобы избежать активации нескольких выпадающих элементов в маршруте, начинающемся с <code>/path/a/</code> или <code>/path/b/</code>, вы можете установить опцию <code>activeMatch</code> для первого элемента с <code>^/path/(?:(?!a/|b/).*)?$</code>.</p></div><h3 id="группировка-и-вложение" tabindex="-1"><a class="header-anchor" href="#группировка-и-вложение" aria-hidden="true">#</a> Группировка и вложение</h3><p>Если вам нужна боковая панель, отображающая вложенную структуру, вы можете сгруппировать похожие ссылки.</p><p>Вы должны использовать <a href="#%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0">формат объекта</a> и предоставить дополнительную опцию <code>children</code> для установки списка ссылок. Как и в навигационной панели, вы можете использовать <code>prefix</code> на боковой панели, чтобы добавить префикс пути по умолчанию к каждой ссылке в группе, а боковая панель дополнительно поддерживает установку <code>collapsible: true</code>, чтобы сделать группу меню сворачиваемой.</p>',4),S=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// required, title of group"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, icon of group"),s(`
        icon`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tip"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, link of group title"),s(`
        path`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, will be appended to each item link"),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, defaults to false"),s(`
        collapsible`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// required, items of group"),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"README.md"'),s(),n("span",{class:"token comment"},"/* /foo/index.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"geo.md"'),s(),n("span",{class:"token comment"},"/* /foo/geo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 2"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"bar.md"'),s(),n("span",{class:"token comment"},"/* /ray/bar.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /ray/baz.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// required, title of group"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, icon of group"),s(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tip"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, link of group title"),s(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, will be appended to each item link"),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// optional, defaults to false"),s(`
        `),n("span",{class:"token literal-property property"},"collapsible"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// required, items of group"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"README.md"'),s(),n("span",{class:"token comment"},"/* /foo/index.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"geo.md"'),s(),n("span",{class:"token comment"},"/* /foo/geo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group 2"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* ... */"),s(`
          `),n("span",{class:"token string"},'"bar.md"'),s(),n("span",{class:"token comment"},"/* /ray/bar.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"baz.md"'),s(),n("span",{class:"token comment"},"/* /ray/baz.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("p",null,"Вы также можете вложить группировку боковой панели:",-1),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"baz"'),s(),n("span",{class:"token comment"},"/* /baz.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 1"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"quz"'),s(),n("span",{class:"token comment"},"/* /quz.html */"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"xyzzy"'),s(),n("span",{class:"token comment"},"/* /xyzzy.html */"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 2"'),n("span",{class:"token punctuation"},","),s(`
            prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"corge/"'),n("span",{class:"token punctuation"},","),s(`
            children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token string"},'"fred"'),s(),n("span",{class:"token comment"},"/* /corge/fred.html */"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token string"},'"grault"'),s(),n("span",{class:"token comment"},"/* /corge/grault.html */"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"foo"'),s(),n("span",{class:"token comment"},"/* /foo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Group"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"baz"'),s(),n("span",{class:"token comment"},"/* /baz.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 1"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"quz"'),s(),n("span",{class:"token comment"},"/* /quz.html */"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"xyzzy"'),s(),n("span",{class:"token comment"},"/* /xyzzy.html */"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Sub Group 2"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"corge/"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token string"},'"fred"'),s(),n("span",{class:"token comment"},"/* /corge/fred.html */"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token string"},'"grault"'),s(),n("span",{class:"token comment"},"/* /corge/grault.html */"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"foo"'),s(),n("span",{class:"token comment"},"/* /foo.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=l(`<p>Вы можете использовать его с <code>prefix</code>, чтобы легко восстановить структуру документа.</p><p>Например, предположим, что у вас есть следующая структура каталогов:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Затем вы можете использовать следующую конфигурацию:</p>`,4),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Foo"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Bar"'),n("span",{class:"token punctuation"},","),s(`
        prefix`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/bar/"'),n("span",{class:"token punctuation"},","),s(`
        children`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Foo"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/foo/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Bar"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"prefix"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/bar/"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"/about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=l(`<h3 id="несколько-боковых-панелеи" tabindex="-1"><a class="header-anchor" href="#несколько-боковых-панелеи" aria-hidden="true">#</a> Несколько боковых панелей</h3><p>Чтобы отображать разные боковые панели для разных групп страниц, установите объект для боковой панели в формате <code>path: config</code>.</p><p>Например, если у вас есть следующая структура:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вы можете определить свою боковую панель для каждого раздела, используя следующую конфигурацию:</p>`,5),U=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /foo/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"one"'),s(),n("span",{class:"token comment"},"/* /foo/one.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"two"'),s(),n("span",{class:"token comment"},"/* /foo/two.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* /bar/ */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"three"'),s(),n("span",{class:"token comment"},"/* /bar/three.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"four"'),s(),n("span",{class:"token comment"},"/* /bar/four.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=l(`<div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Особое внимание следует уделить порядку объявления ключа объекта. Вообще говоря, вы должны сначала указать более точный путь, потому что VuePress будет проходить ключевые имена конфигурации боковой панели, чтобы найти подходящую конфигурацию. После успешного сопоставления имени ключа с текущим путем будет отображаться соответствующая конфигурация боковой панели.</p><p>В этом случае резервная боковая панель должна быть определена последней по этой причине.</p></div><h2 id="автоматическая-боковая-панель" tabindex="-1"><a class="header-anchor" href="#автоматическая-боковая-панель" aria-hidden="true">#</a> Автоматическая боковая панель</h2><h3 id="генерировать-из-заголовков" tabindex="-1"><a class="header-anchor" href="#генерировать-из-заголовков" aria-hidden="true">#</a> Генерировать из заголовков</h3><p>Чтобы автоматически сгенерировать боковую панель, содержащую только ссылки заголовка для текущей страницы, вы можете использовать передний план на этой странице:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> heading</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>Вы также можете включить его на всех страницах с помощью конфигурации:</p>`,6),L=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"heading"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),I=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"heading"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),N={id:"создать-из-фаиловои-структуры",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#создать-из-фаиловои-структуры","aria-hidden":"true"},"#",-1),H=l(`<p>Вы можете заменить исходный &quot;sidebarConfig array&quot; ключевым словом <code>&quot;structure&quot;</code> в любой из приведенных выше конфигураций боковой панели. Это позволит теме автоматически читать локальные файлы, а затем создавать для вас боковую панель из файловой структуры, чтобы уменьшить нагрузку на конфигурацию.</p><p>Например, для следующего примера, упомянутого ранее в <a href="#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D1%85-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B5%D0%B9">мульти сайдбары</a>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вы можете изменить исходную конфигурацию на:</p>`,4),Y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/foo/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token string-property property"},'"/bar/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"structure"'),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// fallback"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'""'),s(),n("span",{class:"token comment"},"/* / */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"contact"'),s(),n("span",{class:"token comment"},"/* /contact.html */"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'"about"'),s(),n("span",{class:"token comment"},"/* /about.html */"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("p",null,[s("В приведенной выше модификации, поскольку исходный массив боковой панели состоит из всех файлов по соответствующему пути, вы можете легко заменить его ключевым словом "),n("code",null,'"structure"'),s(".")],-1),Q=n("p",null,[s("Если вы используете структуру для создания папки с другими папками, вложенными в нее, соответствующая папка будет отображаться как группа. Таким образом, вы можете быть даже более агрессивным, например, установив "),n("code",null,'sidebar: "structure"'),s(", чтобы все ваши боковые панели автоматически генерировались из файловой структуры.")],-1),O={class:"hint-container warning"},P=n("p",{class:"hint-container-title"},"Ограничения",-1),Z=n("p",null,[s("Поскольку боковая панель структуры зависит от структуры файла и основного содержания уценки, любые изменения в уценке могут обновить боковую панель структуры. (Например: установка "),n("code",null,"index: false"),s(" во frontmatter, как описано ниже)")],-1),K=n("code",null,"hotReload",-1),X=l(`<h4 id="расширенныи-контроль" tabindex="-1"><a class="header-anchor" href="#расширенныи-контроль" aria-hidden="true">#</a> Расширенный контроль</h4><p>Во время автоматического создания из структуры вы можете контролировать, включаются ли файлы в одной и той же папке с помощью параметра <code>index</code> на странице Frontmatter, а также управлять их сортировкой с помощью <code>order</code>.</p><p>Если вы не хотите, чтобы страница отображалась на боковой панели, вам нужно установить <code>index: false</code> во Frontmatter.</p><p>По умолчанию боковая панель будет отсортирована в соответствии с текущим языком в соответствии с текстом заголовка имени файла. Вы можете контролировать, как они сортируются по <code>order</code>. Когда вы устанавливаете положительное число, они появляются впереди группы, чем меньше, тем дальше вперед, когда вы устанавливаете отрицательное число, они появляются позади группы, и чем больше, тем дальше:</p><ul><li>page -&gt; order: 1</li><li>page -&gt; order: 2</li><li>page -&gt; order: 3</li><li>...</li><li>pages with positive <code>order</code> will be sorted by <code>order</code> here</li><li>...</li><li>page without <code>order</code> option -&gt; title: Axxx</li><li>...</li><li>pages without <code>order</code> option will be sorted by title here</li><li>...</li><li>page without <code>order</code> option -&gt; title: Zxxx</li><li>...</li><li>pages with negative <code>order</code> will be sorted by <code>order</code> here</li><li>...</li><li>page -&gt; order: -3</li><li>page -&gt; order: -2</li><li>page -&gt; order: -1</li></ul><div class="hint-container tip"><p class="hint-container-title">Совет</p><p><code>README.md</code> является исключением, если вы не отключите его с боковой панели с помощью <code>index: false</code> или не сделаете его групповой ссылкой, он всегда будет первым элементом после сортировки.</p></div><p>Для вложенных папок информация о группировке контролируется файлом <code>README.md</code> в этой папке. Вы можете контролировать поведение группировки папок с помощью параметра <code>dir</code> в Frontmatter. Соответствующие необязательные элементы следующие:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SidebarDirInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Directory title
   *
   * <span class="token keyword">@default</span> README.md title
   */</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Directory icon
   *
   * <span class="token keyword">@default</span> README.md icon
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the directory is collapsible
   *
   * <span class="token keyword">@default</span> true
   */</span>

  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the directory is clickable
   *
   * <span class="token keyword">@description</span> will set the link of the directory grouping to the link corresponding to README.md
   *
   * <span class="token keyword">@default</span> false
   */</span>

  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Whether index current dir
   *
   * <span class="token keyword">@default</span> true
   */</span>
  index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Dir order in sidebar
   *
   * <span class="token keyword">@default</span> 0
   */</span>
  order<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),nn={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},sn=l(`<h4 id="кастомизация-сортировщика" tabindex="-1"><a class="header-anchor" href="#кастомизация-сортировщика" aria-hidden="true">#</a> Кастомизация сортировщика</h4><p>В дополнение к приведенной выше реализации мы также добавили более мощную опцию <code>sidebarSorter</code> в параметры темы. Вы можете передать одно или несколько имен встроенных сортировщиков или передать функцию сортировщика, необходимую для сортировки элементов боковой панели на одном уровне.</p><p>Доступные ключевые слова:</p><ul><li><code>readme</code>: сначала <code>README.md</code> или <code>readme.md</code></li><li><code>order</code>: положительный порядок сначала с его значением по возрастанию, отрицательный порядок последним с его значением по убыванию</li><li><code>date</code>: сортировать по дате по возрастанию</li><li><code>date-desc</code>: сортировать по дате по убыванию</li><li><code>title</code>: в алфавитном порядке по названию</li><li><code>filename</code>: сортировка в алфавитном порядке по имени файла</li></ul><p>В соответствии с приведенным выше расширенным элементом управления, его значение по умолчанию равно <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p><h3 id="отключение-боковои-панели" tabindex="-1"><a class="header-anchor" href="#отключение-боковои-панели" aria-hidden="true">#</a> Отключение боковой панели</h3><p>Вы можете отключить боковую панель на определенной странице с помощью <code>YAML front matter</code>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Боковая панель по умолчанию отключена на главной странице.</p></div><h2 id="глубина-ссылок-заголовков" tabindex="-1"><a class="header-anchor" href="#глубина-ссылок-заголовков" aria-hidden="true">#</a> Глубина ссылок заголовков</h2><p>Боковая панель автоматически отображает ссылки на заголовки на текущей активной странице, вложенные под ссылку на саму страницу. Вы можете настроить это поведение, используя <code>headerDepth</code> в настройках темы. Глубина по умолчанию (максимальное значение) равна <code>2</code>, при этом извлекаются заголовки <code>h2</code> и <code>h3</code>. Установка его на <code>0</code> отключает ссылки заголовков.</p><p>Страница также может переопределить это значение через frontmatter:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">headerDepth</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div>`,13),an={class:"hint-container note"},en=n("p",{class:"hint-container-title"},"Заметка",-1),tn={href:"https://v2.vuepress.vuejs.org/reference/config.html#markdown-headers",target:"_blank",rel:"noopener noreferrer"},on={href:"https://v2.vuepress.vuejs.org/reference/config.html#markdown-headers",target:"_blank",rel:"noopener noreferrer"},cn=n("code",null,"[2, 3]",-1),ln=n("code",null,"headerDepth",-1),pn=n("code",null,"2",-1),rn=n("h3",{id:"активные-ссылки-в-заголовке",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#активные-ссылки-в-заголовке","aria-hidden":"true"},"#"),s(" Активные ссылки в заголовке")],-1),un=n("p",null,"По умолчанию вложенные ссылки заголовков и хэш в URL-адресе обновляются по мере того, как пользователь прокручивает страницу для просмотра различных разделов. Это поведение можно отключить с помощью следующей конфигурации темы:",-1),dn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Default: true"),s(`
      activeHeaderLinks`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// Default: true"),s(`
      `),n("span",{class:"token literal-property property"},"activeHeaderLinks"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("h2",{id:"поддержка-иконок",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#поддержка-иконок","aria-hidden":"true"},"#"),s(" Поддержка иконок")],-1),vn=n("p",null,[s("Поддержка иконок включена на боковой панели по умолчанию, и иконка страницы будет отображаться перед ссылкой на боковой панели (при чтении поля "),n("code",null,"icon"),s(" во вступительной части). Его можно отключить, установив для "),n("code",null,"sidebarIcon"),s(" значение "),n("code",null,"false"),s(" в настройках темы.")],-1),bn=n("h2",{id:"поддержка-i18n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#поддержка-i18n","aria-hidden":"true"},"#"),s(" Поддержка I18n")],-1),hn={href:"https://v2.vuepress.vuejs.org/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},gn=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* English config under root */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        sidebar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* Chinese config under zh folder */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"locales"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* English config under root */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-property property"},'"/zh/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"sidebar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"/* Chinese config under zh folder */"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=l('<h2 id="типы-и-помощники" tabindex="-1"><a class="header-anchor" href="#типы-и-помощники" aria-hidden="true">#</a> Типы и Помощники</h2><p><code>vuepress-theme-hope</code> экспортирует тип боковой панели как <code>SideConfig</code> и предоставляет вспомогательную функцию <code>sidebar</code>. Они могут обеспечить проверку и автозаполнение конфигурации боковой панели в TS и JS.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Чтобы справиться с ситуацией, когда вы разделяете <a href="#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D1%85-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B5%D0%B9">конфигурацию с несколькими боковыми панелями</a> на несколько частей, мы также предоставляем тип <code>SidebarArrayConfig</code> и <code>SidebarObjectConfig</code> и вспомогательную функцию <code>arraySidebar</code> и <code>objectSidebar</code>.</p></div>',3),wn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* Your sidebar configuration */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br")])],-1),_n=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/navbar.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" SidebarConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" sidebarConfig"),n("span",{class:"token operator"},":"),s(" SidebarConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"/* Your sidebar configuration */"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" sidebarConfig"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")])],-1),xn=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/sidebar.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"sidebar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* Your sidebar configuration */"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),Dn=n("h2",{id:"демо",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#демо","aria-hidden":"true"},"#"),s(" Демо")],-1),An={class:"hint-container details"},En=n("summary",null,"Конфигурация этой документации",-1),Tn=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"include")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"."),s("vuepress"),n("span",{class:"token operator"},"/"),s("sidebar"),n("span",{class:"token punctuation"},"."),s("ts"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"3"),n("span",{class:"token operator"},"-"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),Sn=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" sidebar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

@`),n("span",{class:"token function"},"include"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"."),s("vuepress"),n("span",{class:"token operator"},"/"),s("sidebar"),n("span",{class:"token punctuation"},"."),s("ts"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"3"),n("span",{class:"token operator"},"-"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1);function Bn(jn,Cn){const c=p("CodeTabs"),r=p("Badge"),u=p("RouterLink"),i=p("ExternalLinkIcon");return k(),m("div",null,[h,v(" more "),g,f,y,w,o(c,{id:"16",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[_]),tab1:a(({value:e,isActive:t})=>[x]),_:1}),D,o(c,{id:"60",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[A]),tab1:a(({value:e,isActive:t})=>[E]),_:1}),T,o(c,{id:"102",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[S]),tab1:a(({value:e,isActive:t})=>[B]),_:1}),j,o(c,{id:"113",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[M]),_:1}),R,o(c,{id:"131",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[q]),tab1:a(({value:e,isActive:t})=>[z]),_:1}),J,o(c,{id:"152",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[U]),tab1:a(({value:e,isActive:t})=>[G]),_:1}),F,o(c,{id:"181",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[L]),tab1:a(({value:e,isActive:t})=>[I]),_:1}),n("h3",N,[V,s(" Создать из файловой структуры "),o(r,{text:"New",type:"tip"})]),H,o(c,{id:"202",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[Y]),tab1:a(({value:e,isActive:t})=>[W]),_:1}),$,Q,n("div",O,[P,Z,n("p",null,[s("Однако пересчет боковой панели может быть дорогостоящим для больших сайтов, поэтому тема будет пересчитываться только с включенной функцией "),o(u,{to:"/config/theme/basic.html#hotreload"},{default:a(()=>[K]),_:1}),s(".")])]),X,n("p",null,[s("Если для соответствующей папки не существует файла "),n("a",nn,[s("README.md"),o(i)]),s(", из имени папки будет создан только заголовок группы.")]),sn,n("div",an,[en,n("p",null,[s("Допустимое максимальное значение зависит от того, какие уровни заголовков вы извлекли с помощью "),n("a",tn,[s("markdown.headers.level"),o(i)]),s(".")]),n("p",null,[s("Поскольку значение по умолчанию "),n("a",on,[s("markdown.headers.level"),o(i)]),s(" равно "),cn,s(", поэтому максимальное значение по умолчанию для "),ln,s(" равно "),pn,s(".")])]),rn,un,o(c,{id:"415",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[dn]),tab1:a(({value:e,isActive:t})=>[kn]),_:1}),mn,vn,bn,n("p",null,[s("Навигационная панель темы поддерживает "),n("a",hn,[s("I18n"),o(i)]),s(", поэтому вы можете настроить боковую панель отдельно для каждого языка:")]),o(c,{id:"435",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[gn]),tab1:a(({value:e,isActive:t})=>[fn]),_:1}),yn,o(c,{id:"454",data:[{id:"TS Helper"},{id:"TS Types"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS Helper")]),title1:a(({value:e,isActive:t})=>[s("TS Types")]),title2:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[wn]),tab1:a(({value:e,isActive:t})=>[_n]),tab2:a(({value:e,isActive:t})=>[xn]),_:1}),Dn,n("details",An,[En,o(c,{id:"469",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[Tn]),tab1:a(({value:e,isActive:t})=>[Sn]),_:1})])])}const qn=d(b,[["render",Bn],["__file","sidebar.html.vue"]]);export{qn as default};
