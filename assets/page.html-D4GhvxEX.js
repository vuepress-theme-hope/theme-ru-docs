import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as p,b as e,d as t,a as o,w as s,e as c}from"./app-DkYyH7Yy.js";const i={},u=e("p",null,"VuePress ориентирован на уценку. Каждый файл Markdown внутри вашего проекта представляет собой отдельную страницу.",-1),m=e("h2",{id:"роутинг",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#роутинг"},[e("span",null,"Роутинг")])],-1),h=e("p",null,"По умолчанию путь маршрута страницы определяется относительным путем вашего файла Markdown.",-1),_=e("p",null,"Предполагая, что это структура каталогов ваших файлов Markdown:",-1),g=e("div",{class:"language-text","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
`)])],-1),k=e("code",null,"docs",-1),f={href:"https://v2.vuepress.vuejs.org/reference/cli.html",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"vuepress dev docs",-1),y=c('<table><thead><tr><th>Относительный путь</th><th>Путь маршрута</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>',2),M={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page
<span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>Вы, должно быть, заметили, что эти поля аналогичны параметрам конфигурации сайта в файле конфигурации. Вы можете переопределить <code>lang</code>, <code>title</code>, <code>description</code>, и т. д. текущей страницы через frontmatter. Таким образом, вы можете использовать frontmatter в качестве конфигурации области страницы.</p><p>Кроме того, VuePress имеет встроенную поддержку некоторых полей frontmatter, и у вашей темы тоже может быть своя особая frontmatter.</p>`,3),w={class:"hint-container tip"},V=e("p",{class:"hint-container-title"},"Совет",-1),x={href:"https://v2.vuepress.vuejs.org/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"vuepress-theme-hope",-1),E=e("h2",{id:"контент",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#контент"},[e("span",null,"Контент")])],-1),T=e("p",null,[t("Основной контент вашей страницы написан в Markdown. VuePress сначала преобразует ваш Markdown в HTML-код, а затем обрабатывает HTML-код как "),e("code",null,"<template>"),t(" Vue SFC.")],-1),R={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function D(L,A){const n=a("ExternalLinkIcon"),r=a("RouteLink");return l(),p("div",null,[u,m,h,_,g,e("p",null,[t("Возьмите каталог "),k,t(" в качестве "),e("a",f,[t("исходного каталога"),o(n)]),t(", например вы используете команду "),v,t(". Тогда пути маршрута ваших файлов Markdown будут такими:")]),y,e("p",null,[t("Файл Markdown может содержать frontmatter "),e("a",M,[t("YAML"),o(n)]),t(". Вступительная часть должна быть в верхней части файла Markdown и должна быть заключена в пару строк с тройным пунктиром. Вот простой пример:")]),b,e("div",w,[V,e("p",null,[t("Ознакомьтесь со "),e("a",x,[t("Справочником Frontmatter"),o(n)]),t(" для получения полного списка встроенных интерфейсов VuePress.")]),e("p",null,[t("Ознакомьтесь с "),o(r,{to:"/config/frontmatter/"},{default:s(()=>[t("Конфиг > Frontmatter")]),_:1}),t(", чтобы узнать о теме по "),P,t(".")])]),E,T,e("p",null,[t("Благодаря возможностям "),e("a",R,[t("markdown-it"),o(n)]),t(" и синтаксису шаблонов Vue базовый Markdown можно значительно расширить. Затем ознакомьтесь с руководством "),o(r,{to:"/cookbook/vuepress/markdown.html"},{default:s(()=>[t("Markdown")]),_:1}),t(" для всех расширений Markdown в VuePress.")])])}const N=d(i,[["render",D],["__file","page.html.vue"]]),j=JSON.parse('{"path":"/cookbook/vuepress/page.html","title":"Страница VuePress","lang":"ru-RU","frontmatter":{"title":"Страница VuePress","icon":"file","category":["Учебник с примерами","VuePress"],"tag":["Страница","VuePress"],"description":"VuePress ориентирован на уценку. Каждый файл Markdown внутри вашего проекта представляет собой отдельную страницу. Роутинг По умолчанию путь маршрута страницы определяется относ...","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/cookbook/vuepress/page.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Страница VuePress"}],["meta",{"property":"og:description","content":"VuePress ориентирован на уценку. Каждый файл Markdown внутри вашего проекта представляет собой отдельную страницу. Роутинг По умолчанию путь маршрута страницы определяется относ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-03-20T12:45:02.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Страница"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:modified_time","content":"2023-03-20T12:45:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Страница VuePress\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T12:45:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Роутинг","slug":"роутинг","link":"#роутинг","children":[]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[]},{"level":2,"title":"Контент","slug":"контент","link":"#контент","children":[]}],"git":{"createdTime":1679316302000,"updatedTime":1679316302000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.92,"words":276},"filePathRelative":"cookbook/vuepress/page.md","localizedDate":"20 марта 2023 г.","excerpt":"","autoDesc":true}');export{N as comp,j as data};
