import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as p,b as e,d as t,a as r,w as s,e as d}from"./app-DkYyH7Yy.js";const n={},l=e("code",null,"vuepress-theme-hope",-1),m=e("code",null,"vuepress-plugin-sitemap2",-1),u=d('<p>Плагин автоматически сгенерирует время последнего обновления страницы на основе временной метки Git страницы, а также объявит ссылку на альтернативную версию страницы на других языках в соответствии с конфигурацией локалей.</p><p>Если вам не нужен этот плагин, установите для <code>plugins.sitemap</code> значение <code>false</code> в настройках темы.</p><div class="hint-container info"><p class="hint-container-title">Инфо</p><p><code>vuepress-theme-hope</code> передает <code>plugins.sitemap</code> в параметрах темы в качестве параметров плагина для <code>vuepress-plugin-sitemap2</code>.</p></div><h2 id="управление-ссылкои-на-карту-саита" tabindex="-1"><a class="header-anchor" href="#управление-ссылкои-на-карту-саита"><span>Управление ссылкой на карту сайта</span></a></h2><p>По умолчанию все ссылки на сайты, кроме страницы 404, будут добавлены в файл Sitemap.</p><p>Чтобы добавить другие страницы в файл Sitemap за пределами страницы проекта VuePress, превратите их в массив и передайте в <code>extraUrls</code>.</p><p>Если вы не хотите, чтобы определенные страницы отображались в карте сайта, вы можете преобразовать их в массив и передать в <code>excludeUrls</code>, или вы можете передать функцию фильтра через параметры <code>filter</code>. Вы также можете установить для <code>sitemap.exclude</code> значение <code>true</code> во frontmatter.</p><p>Вы также можете управлять выходной ссылкой через <code>sitemapFilename</code>. Выходной каталог по умолчанию — <code>sitemap.xml</code>.</p><h2 id="изменить-частоту" tabindex="-1"><a class="header-anchor" href="#изменить-частоту"><span>Изменить частоту</span></a></h2><p>Цикл обновления страницы по умолчанию — <code>daily</code> (каждый день). Чтобы изменить весь цикл страницы, установите <code>changefreq</code>. Вы также можете установить <code>sitemap.changefreq</code> в frontmatter страницы. Обратите внимание, что страница имеет более высокий приоритет.</p><p>Допустимые частоты:</p><ul><li><code>&quot;always&quot;</code></li><li><code>&quot;hourly&quot;</code></li><li><code>&quot;daily&quot;</code></li><li><code>&quot;weekly&quot;</code></li><li><code>&quot;monthly&quot;</code></li><li><code>&quot;yearly&quot;</code></li><li><code>&quot;never&quot;</code></li></ul><div class="hint-container info"><p class="hint-container-title">Введение в карту сайта</p><p>Файлы Sitemap могут быть адресованы пользователям или программному обеспечению. Многие сайты имеют карты сайта, видимые пользователям, которые представляют собой систематизированное, обычно иерархическое представление сайта. Они предназначены для того, чтобы помочь посетителям найти определенные страницы, а также могут использоваться поисковыми роботами. Карты сайтов, организованные в алфавитном порядке, иногда называемые индексами сайтов, представляют собой другой подход.</p><p>Для использования поисковыми системами и другими поисковыми роботами существует структурированный формат XML Sitemap, в котором перечислены страницы сайта, их относительная важность и частота их обновления. Это указывается в файле robots.txt и обычно называется sitemap.xml .</p><p>Google представил протокол Sitemaps, чтобы веб-разработчики могли публиковать списки ссылок со своих сайтов.</p></div>',13);function h(g,y){const o=c("ProjectLink");return i(),p("div",null,[e("p",null,[l,t(" обеспечивает создание карты сайта, включая "),r(o,{name:"sitemap2"},{default:s(()=>[m]),_:1}),t(".")]),u])}const v=a(n,[["render",h],["__file","sitemap.html.vue"]]),q=JSON.parse('{"path":"/guide/advanced/sitemap.html","title":"Карта сайта","lang":"ru-RU","frontmatter":{"title":"Карта сайта","icon":"sitemap","category":["Продвинутые"],"tag":["Продвинутые","Карта сайта"],"description":"vuepress-theme-hope обеспечивает создание карты сайта, включая . Плагин автоматически сгенерирует время последнего обновления страницы на основе временной метки Git страницы, а ...","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/guide/advanced/sitemap.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Карта сайта"}],["meta",{"property":"og:description","content":"vuepress-theme-hope обеспечивает создание карты сайта, включая . Плагин автоматически сгенерирует время последнего обновления страницы на основе временной метки Git страницы, а ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-03-20T12:45:02.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Продвинутые"}],["meta",{"property":"article:tag","content":"Карта сайта"}],["meta",{"property":"article:modified_time","content":"2023-03-20T12:45:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Карта сайта\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T12:45:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Управление ссылкой на карту сайта","slug":"управление-ссылкои-на-карту-саита","link":"#управление-ссылкои-на-карту-саита","children":[]},{"level":2,"title":"Изменить частоту","slug":"изменить-частоту","link":"#изменить-частоту","children":[]}],"git":{"createdTime":1679316302000,"updatedTime":1679316302000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.12,"words":336},"filePathRelative":"guide/advanced/sitemap.md","localizedDate":"20 марта 2023 г.","excerpt":"","autoDesc":true}');export{v as comp,q as data};
