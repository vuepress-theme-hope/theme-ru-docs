import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as u,b as e,d as o,a as t,w as l,e as n}from"./app-DkYyH7Yy.js";const p={},g=e("p",null,"Следующие параметры управляют функциями, предоставляемыми темой.",-1),h=e("h2",{id:"параметры-блога",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#параметры-блога"},[e("span",null,"Параметры блога")])],-1),q=e("code",null,"vuepress-plugin-blog2",-1),b=e("strong",null,"отключена",-1),m=e("p",null,[o("Чтобы включить плагин блога и использовать параметры по умолчанию, вы можете установить для "),e("code",null,"plugins.blog"),o(" значение "),e("code",null,"true"),o(" в параметрах темы.")],-1),f={class:"hint-container warning"},y=e("p",{class:"hint-container-title"},"Примечание",-1),v=e("p",null,"Следующие параметры не будут иметь никакого эффекта, если вы не включите плагин блога.",-1),_=n('<h3 id="blog-name" tabindex="-1"><a class="header-anchor" href="#blog-name"><span>blog.name</span></a></h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>author</code></li></ul><p>Имя блогера.</p><h3 id="blog-avatar" tabindex="-1"><a class="header-anchor" href="#blog-avatar"><span>blog.avatar</span></a></h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>logo</code></li></ul><p>Аватар блогера.</p><h3 id="blog-description" tabindex="-1"><a class="header-anchor" href="#blog-description"><span>blog.description</span></a></h3><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Девиз, слоган или краткое описание.</p><h3 id="blog-intro" tabindex="-1"><a class="header-anchor" href="#blog-intro"><span>blog.intro</span></a></h3><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Личный адрес блогера.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Посетители могут щелкнуть аватар или имя в разделе «Информация о блогере», чтобы перейти на страницу личного знакомства.</p></div><h3 id="blog-medias" tabindex="-1"><a class="header-anchor" href="#blog-medias"><span>blog.medias</span></a></h3><ul><li>Тип: <code>Record&lt;string, string | [string, string]&gt;</code></li><li>Обязательный: Нет</li></ul><p>Установите социальные ссылки.</p><ul><li><p>Если значок социальной сети доступен ниже, вы можете напрямую установить <code>MediaName: MediaLink</code>.</p></li><li><p>В противном случае вы должны передать кортеж <code>MediaName: [MediaLink , MediaSvgIconString or MediaSvgIconPath]</code>,</p><p>Второй элемент кортежа должен быть допустимой строкой SVG или полным путем к существующему файлу SVG.</p></li></ul><div class="hint-container info"><p class="hint-container-title">Доступные социальные сети</p><p>Следующие социальные сети имеют встроенные иконки:</p><ul><li><code>&quot;Baidu&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;Bitbucket&quot;</code></li><li><code>&quot;Dingding&quot;</code></li><li><code>&quot;Discord&quot;</code></li><li><code>&quot;Douban&quot;</code></li><li><code>&quot;Dribbble&quot;</code></li><li><code>&quot;Email&quot;</code></li><li><code>&quot;Evernote&quot;</code></li><li><code>&quot;Facebook&quot;</code></li><li><code>&quot;Flipboard&quot;</code></li><li><code>&quot;Gitee&quot;</code></li><li><code>&quot;GitHub&quot;</code></li><li><code>&quot;Gitlab&quot;</code></li><li><code>&quot;Gmail&quot;</code></li><li><code>&quot;Instagram&quot;</code></li><li><code>&quot;Lark&quot;</code></li><li><code>&quot;Line&quot;</code></li><li><code>&quot;Linkedin&quot;</code></li><li><code>&quot;Pinterest&quot;</code></li><li><code>&quot;Pocket&quot;</code></li><li><code>&quot;QQ&quot;</code></li><li><code>&quot;Qzone&quot;</code></li><li><code>&quot;Reddit&quot;</code></li><li><code>&quot;Rss&quot;</code></li><li><code>&quot;Steam&quot;</code></li><li><code>&quot;Skype&quot;</code></li><li><code>&quot;Telegram&quot;</code></li><li><code>&quot;Twitter&quot;</code></li><li><code>&quot;Wechat&quot;</code></li><li><code>&quot;Weibo&quot;</code></li><li><code>&quot;Whatsapp&quot;</code></li><li><code>&quot;Youtube&quot;</code></li><li><code>&quot;Zhihu&quot;</code></li></ul></div><h3 id="blog-roundavatar" tabindex="-1"><a class="header-anchor" href="#blog-roundavatar"><span>blog.roundAvatar</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Обрезка аватара круглой формы</p><h3 id="blog-sidebardisplay" tabindex="-1"><a class="header-anchor" href="#blog-sidebardisplay"><span>blog.sidebarDisplay</span></a></h3><ul><li>Тип: <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code></li><li>По умолчанию: <code>&quot;mobile&quot;</code></li></ul><p>Показывать ли информацию о блоггерах на боковой панели</p><ul><li><code>&quot;mobile&quot;</code>: Показывать на боковой панели в мобильной версии</li><li><code>&quot;always&quot;</code>: Всегда показывать на боковой панели</li><li><code>&quot;none&quot;</code>: Никогда не показывать на боковой панели</li></ul><h3 id="blog-timeline" tabindex="-1"><a class="header-anchor" href="#blog-timeline"><span>blog.timeline</span></a></h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>&quot;Yesterday once more&quot;</code></li></ul><p>Текст в верхней части страницы временной шкалы.</p><h3 id="blog-articleperpage" tabindex="-1"><a class="header-anchor" href="#blog-articleperpage"><span>blog.articlePerPage</span></a></h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>10</code></li></ul><p>Номер статьи на странице</p><h3 id="blog-articleinfo" tabindex="-1"><a class="header-anchor" href="#blog-articleinfo"><span>blog.articleInfo</span></a></h3><ul><li>Тип: <code>ArticleInfo[]</code></li><li>По умолчанию: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;PageView&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>Информация о статье отображается в списке статей</p><p>Доступные значения для <code>ArticleInfo</code>:</p><ul><li><code>&quot;Author&quot;</code></li><li><code>&quot;Category&quot;</code></li><li><code>&quot;Date&quot;</code></li><li><code>&quot;Original&quot;</code></li><li><code>&quot;Tag&quot;</code></li><li><code>&quot;ReadingTime&quot;</code></li><li><code>&quot;Word&quot;</code></li></ul>',36),k={class:"hint-container warning"},x=e("p",{class:"hint-container-title"},"Ограничение",-1),T={id:"зашифровать-конфигурацию",tabindex:"-1"},w={class:"header-anchor",href:"#зашифровать-конфигурацию"},P=n(`<div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Вы можете установить этот параметр только непосредственно в параметрах темы, его установка в каждой локали <strong>НИКАК не влияет</strong>.</p></div><h3 id="encrypt-global" tabindex="-1"><a class="header-anchor" href="#encrypt-global"><span>encrypt.global</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Шифровать ли глобально.</p><h3 id="encrypt-admin" tabindex="-1"><a class="header-anchor" href="#encrypt-admin"><span>encrypt.admin</span></a></h3><ul><li>Тип: <code>string | string []</code></li><li>Обязательный: Нет</li></ul><p>Пароль администратора с наивысшими полномочиями, вы можете установить несколько с помощью массива.</p><h3 id="encrypt-config" tabindex="-1"><a class="header-anchor" href="#encrypt-config"><span>encrypt.config</span></a></h3><ul><li>Тип: <code>Record &lt;string, string | string []&gt;</code></li><li>Обязательный: Нет</li></ul><p>Конфигурация шифрования — это объект с именем ключа, соответствующим пути, и значением ключа, соответствующим паролю, который принимает строку или массив строк.</p><details class="hint-container details"><summary>Пример</summary><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// This will encrypt the entire guide directory and both passwords will be available</span>
  <span class="token string-property property">&quot;/guide/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5678&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// this will only encrypt config/page.html</span>
  <span class="token string-property property">&quot;/config/page.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,11);function R(D,M){const c=a("ProjectLink"),i=a("RouteLink"),d=a("Badge");return s(),u("div",null,[g,h,e("p",null,[o("Тема добавляет функцию блога с помощью "),t(c,{name:"blog2"},{default:l(()=>[q]),_:1}),o(", и по умолчанию эта функция "),b,o(".")]),m,e("div",f,[y,v,e("p",null,[o("Подробнее смотрите "),t(i,{to:"/guide/blog/intro.html"},{default:l(()=>[o("Введение в функцию блога")]),_:1}),o(".")])]),_,e("div",k,[x,e("p",null,[o("ReadingTime и Word недоступны в devServer по умолчанию, "),t(i,{to:"/config/theme/basic.html#hotreload"},{default:l(()=>[o("смотрите причины и как их включить")]),_:1}),o(".")])]),e("h2",T,[e("a",w,[e("span",null,[o("Зашифровать конфигурацию "),t(d,{text:"Только root",type:"warning"})])])]),e("p",null,[o("Для получения дополнительной информации смотрите "),t(i,{to:"/guide/feature/encrypt.html"},{default:l(()=>[o("Введение в шифрование")]),_:1}),o(".")]),P])}const L=r(p,[["render",R],["__file","feature.html.vue"]]),j=JSON.parse('{"path":"/config/theme/feature.html","title":"Опции функции темы","lang":"ru-RU","frontmatter":{"title":"Опции функции темы","icon":"splotch","order":3,"category":["Конфиг"],"tag":["Функция","Конфиг темы"],"description":"Следующие параметры управляют функциями, предоставляемыми темой.","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/config/theme/feature.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Опции функции темы"}],["meta",{"property":"og:description","content":"Следующие параметры управляют функциями, предоставляемыми темой."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-05-27T16:52:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Функция"}],["meta",{"property":"article:tag","content":"Конфиг темы"}],["meta",{"property":"article:modified_time","content":"2023-05-27T16:52:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Опции функции темы\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-27T16:52:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Параметры блога","slug":"параметры-блога","link":"#параметры-блога","children":[{"level":3,"title":"blog.name","slug":"blog-name","link":"#blog-name","children":[]},{"level":3,"title":"blog.avatar","slug":"blog-avatar","link":"#blog-avatar","children":[]},{"level":3,"title":"blog.description","slug":"blog-description","link":"#blog-description","children":[]},{"level":3,"title":"blog.intro","slug":"blog-intro","link":"#blog-intro","children":[]},{"level":3,"title":"blog.medias","slug":"blog-medias","link":"#blog-medias","children":[]},{"level":3,"title":"blog.roundAvatar","slug":"blog-roundavatar","link":"#blog-roundavatar","children":[]},{"level":3,"title":"blog.sidebarDisplay","slug":"blog-sidebardisplay","link":"#blog-sidebardisplay","children":[]},{"level":3,"title":"blog.timeline","slug":"blog-timeline","link":"#blog-timeline","children":[]},{"level":3,"title":"blog.articlePerPage","slug":"blog-articleperpage","link":"#blog-articleperpage","children":[]},{"level":3,"title":"blog.articleInfo","slug":"blog-articleinfo","link":"#blog-articleinfo","children":[]}]},{"level":2,"title":"Зашифровать конфигурацию","slug":"зашифровать-конфигурацию","link":"#зашифровать-конфигурацию","children":[{"level":3,"title":"encrypt.global","slug":"encrypt-global","link":"#encrypt-global","children":[]},{"level":3,"title":"encrypt.admin","slug":"encrypt-admin","link":"#encrypt-admin","children":[]},{"level":3,"title":"encrypt.config","slug":"encrypt-config","link":"#encrypt-config","children":[]}]}],"git":{"createdTime":1679316302000,"updatedTime":1685206333000,"contributors":[{"name":"Aleksandr Gorbatov","email":"hkrtrk@yandex.ru","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"config/theme/feature.md","localizedDate":"20 марта 2023 г.","excerpt":"<p>Следующие параметры управляют функциями, предоставляемыми темой.</p>\\n","autoDesc":true}');export{L as comp,j as data};
