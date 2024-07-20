import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as o,b as s,a as e,w as i,d as n,e as p}from"./app-DkYyH7Yy.js";const d={},r=p(`<p>Вы можете добавить следующие параметры к <code>locales[localePath]</code> в параметрах темы, чтобы настроить многоязычные параметры темы.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Current lang code
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  outlookLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Theme Color
     *
     * 主题色
     */</span>
    themeColor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Theme mode
     *
     * 夜间模式
     */</span>
    darkmode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Fullscreen text
     *
     * 全屏文字
     */</span>
    fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 文章文字 */</span>
    article<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 文章列表文字 */</span>
    articleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 分类文字 */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 标签文字 */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴文字 */</span>
    timeline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 时间轴标题文字 */</span>
    timelineTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 全部文字 */</span>
    all<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 个人介绍 */</span>
    intro<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 搜藏文字 */</span>
    star<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 幻灯片 */</span>
    slides<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 加密 */</span>
    encrypt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  paginationLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Previous page button label text
     *
     * 上一页文字
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Next page button label text
     *
     * 下一页文字
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation hint label text
     *
     * 跳转提示文字
     */</span>
    navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navigation button label text
     *
     * 跳转按钮文字
     */</span>
    action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Error text when invalid page number, \`$page\` will be replaced by total page number automatically
     *
     * 页码错误文字，其中 \`$page\` 会自动替换为当前的总页数
     */</span>
    errorText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Encrypt
   */</span>
  encryptLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Encrypt title
     */</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    remember<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Password error hint
     */</span>
    errorHint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  navbarLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Navbar language selection config
     *
     * Text of the language selection dropdown
     */</span>
    selectLangText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navbar language selection config
     *
     * Aria label of of the language selection dropdown
     */</span>
    selectLangAriaLabel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Navbar language selection config
     *
     * Language name of current locale
     *
     * Displayed inside the language selection dropdown
     */</span>
    langName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page locate config
   */</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Author label text
     *
     * 作者文字
     */</span>
    author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Writing date label text
     *
     * 写作日期文字
     */</span>
    date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Label text marked as original
     *
     * 标记原创的文字
     */</span>
    origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page views label text
     *
     * 访问量文字
     */</span>
    views<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Tag label text
     *
     * 标签文字
     */</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Category label text
     *
     * 分类文字
     */</span>
    category<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Expect reading time label text
     *
     * 期望阅读时间文字
     */</span>
    readingTime<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Words label Text
     *
     * 文章字数
     */</span>
    words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Table of contents
     *
     * 此页内容
     */</span>
    toc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page nav - previous link
     */</span>
    prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page nav - next link
     */</span>
    next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page meta - last updated config
     *
     * The text to replace the default &quot;Last Updated&quot;
     */</span>
    lastUpdated<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page meta - contributors config
     *
     * The text to replace the default &quot;Contributors&quot;
     */</span>
    contributors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Page meta - contributors config
     *
     * The text to replace the default &quot;Edit this page&quot;
     */</span>
    editLink<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  routeLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Skip to main content
     */</span>
    skipToContent<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 404 page title
     */</span>
    notFoundTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 404 page msgs
     */</span>
    notFoundMsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to homepage
     */</span>
    home<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Back to last page
     */</span>
    back<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * sr-only message in \`&lt;ExternalLinkIcon&gt;\`
     */</span>
    openInNewWindow<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Между тем, некоторые параметры i18n контролируются плагинами, в том числе:</p>`,3);function m(v,u){const a=t("ProjectLink");return c(),o("div",null,[r,s("ul",null,[s("li",null,[e(a,{name:"comment2",path:"/config/waline.html#locales"},{default:i(()=>[n("plugins.comment.locales")]),_:1}),n(": Служба комментариев Waline")]),s("li",null,[e(a,{name:"components",path:"/config.html#locales-backtotop"},{default:i(()=>[n("plugins.components.locales")]),_:1}),n(": Языки компонентов")]),s("li",null,[e(a,{name:"copy-code2",path:"/config.html#locales"},{default:i(()=>[n("plugins.copyCode.locales")]),_:1}),n(": Кнопка копирования блока кода")]),s("li",null,[e(a,{name:"copyright2",path:"/config.html#locales"},{default:i(()=>[n("plugins.copyright.locales")]),_:1}),n(": Информация об авторских правах")]),s("li",null,[e(a,{name:"md-enhance",path:"/config.html#locales"},{default:i(()=>[n("plugins.mdEnhance.locales")]),_:1}),n(": Улучшение Markdown")]),s("li",null,[e(a,{name:"photo-swipe",path:"/config.html#locales"},{default:i(()=>[n("plugins.photoSwipe.locales")]),_:1}),n(": Предварительный просмотр фотографий")]),s("li",null,[e(a,{name:"pwa2",path:"/config.html#locales"},{default:i(()=>[n("plugins.pwa.locales")]),_:1}),n(": PWA")])])])}const g=l(d,[["render",m],["__file","i18n.html.vue"]]),h=JSON.parse('{"path":"/config/theme/i18n.html","title":"Опции мультиязычности темы","lang":"ru-RU","frontmatter":{"title":"Опции мультиязычности темы","icon":"language","order":6,"category":["Конфиг"],"tag":["I18n","Мультиязычность","Конфиг темы"],"description":"Вы можете добавить следующие параметры к locales[localePath] в параметрах темы, чтобы настроить многоязычные параметры темы. Между тем, некоторые параметры i18n контролируются п...","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/config/theme/i18n.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Опции мультиязычности темы"}],["meta",{"property":"og:description","content":"Вы можете добавить следующие параметры к locales[localePath] в параметрах темы, чтобы настроить многоязычные параметры темы. Между тем, некоторые параметры i18n контролируются п..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-05-27T16:52:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"I18n"}],["meta",{"property":"article:tag","content":"Мультиязычность"}],["meta",{"property":"article:tag","content":"Конфиг темы"}],["meta",{"property":"article:modified_time","content":"2023-05-27T16:52:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Опции мультиязычности темы\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-27T16:52:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1679316302000,"updatedTime":1685206333000,"contributors":[{"name":"Aleksandr Gorbatov","email":"hkrtrk@yandex.ru","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.18,"words":653},"filePathRelative":"config/theme/i18n.md","localizedDate":"20 марта 2023 г.","excerpt":"","autoDesc":true}');export{g as comp,h as data};
