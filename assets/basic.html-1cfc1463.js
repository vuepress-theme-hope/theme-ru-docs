import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as r,f as d,b as n,e as s,a,w as t,i as e}from"./app-d6a6dcfa.js";const u={},v=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"Предупреждение"),n("p",null,"Эти параметры важны и требуют правильной настройки.")],-1),m={id:"hostname",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#hostname","aria-hidden":"true"},"#",-1),b=e(`<ul><li>Тип: <code>string</code></li><li>Обязательный: Да</li></ul><p>Домен, на который будет развернут сайт.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Он должен содержать полный протокол (например: <code>https://example.com</code>).</p></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>Тип: <code>Author</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author website
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Глобальный автор по умолчанию.</p><h2 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Site favicon.</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2>`,10),h=e(`<li><p>Тип: <code>NavbarConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Text of item
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Icon of item
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Aria label of item
   */</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * link of item
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Rel of \`&lt;a&gt;\` tag
   */</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Target of \`&lt;a&gt;\` tag
   */</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Regexp mode to be active
   */</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NavGroup<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Link prefix of current group
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link of current group
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Children of current group
   */</span>
  children<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">NavbarItem</span> <span class="token operator">=</span> AutoLinkOptions<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarGroup</span> <span class="token operator">=</span> NavGroup<span class="token operator">&lt;</span>NavbarGroup <span class="token operator">|</span> NavbarItem <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span>NavbarItem <span class="token operator">|</span> NavbarGroup <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g=n("p",null,"Конфигурация панели навигации",-1),f=n("h2",{id:"sidebar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),s(" sidebar")],-1),y=e(`<li><p>Тип: <code>SidebarConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Text of item
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Icon of item
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Aria label of item
   */</span>
  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * link of item
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Rel of \`&lt;a&gt;\` tag
   */</span>
  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Target of \`&lt;a&gt;\` tag
   */</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Regexp mode to be active
   */</span>
  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarPageItem</span> <span class="token operator">=</span> AutoLinkOptions<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarGroupItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Link prefix of current group
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link of current group
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether current group is collapsible
   *
   * <span class="token keyword">@default</span> false
   */</span>
  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Children of current group
   */</span>
  children<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token operator">|</span> SidebarPageItem
    <span class="token operator">|</span> SidebarGroupItem
    <span class="token operator">|</span> SidebarStructureItem
    <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarStructureItem</span> <span class="token keyword">extends</span> <span class="token class-name">TextItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Link prefix of current group
   */</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Link of current group
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether current group is collapsible
   *
   * <span class="token keyword">@default</span> false
   */</span>
  collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarItem</span> <span class="token operator">=</span>
  <span class="token operator">|</span> SidebarPageItem
  <span class="token operator">|</span> SidebarGroupItem
  <span class="token operator">|</span> SidebarStructureItem
  <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarArrayConfig</span> <span class="token operator">=</span> SidebarItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarObjectConfig</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
  <span class="token builtin">string</span><span class="token punctuation">,</span>
  SidebarArrayConfig <span class="token operator">|</span> <span class="token string">&quot;structure&quot;</span> <span class="token operator">|</span> <span class="token boolean">false</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarConfig</span> <span class="token operator">=</span> SidebarArrayConfig <span class="token operator">|</span> SidebarObjectConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),_=n("p",null,"Конфигурация боковой панели",-1),x=n("h2",{id:"locales",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),s(" locales")],-1),w=n("li",null,[s("Тип: "),n("code",null,"Record<string, ThemeLocaleOptions>")],-1),S=e('<p>I18n конфиг темы, где можно задать параметры для каждого языка отдельно.</p><h2 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h2><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: Используется ли флаг <code>--debug</code></li></ul><p>Включить ли горячую перезагрузку на сервере разработки.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Как правило, вы ожидаете:</p><ul><li>devServer может быть запущен как можно скорее</li><li>изменения в уценке могут быстро вступить в силу на devServer и избежать перезапуска всего приложения VuePress.</li></ul><p>Чтобы реализовать это ожидание, теме необходимо пропустить некоторые трудоемкие операции на devServer, а также отключить некоторые трудоемкие функции, которые запускаются модификациями страниц на devServer, чтобы повысить скорость запуска проекта и горячего обновления. В то же время, поскольку некоторые модификации изменят базовые необработанные данные VuePress, эти модификации приведут к обновлению веб-страницы и перезагрузке всего приложения VuePress. Чтобы избежать частых перезагрузок страниц (т. е. обновление страницы запускается, и вы получаете пустой экран в течение нескольких секунд) при изменении Markdown тема отключает некоторые функции на devServer.</p><p>По умолчанию devServer имеет следующие ограничения:</p><ul><li>Функции на основе Git не будут включены, включая участников, дату автоматического создания и время последнего обновления (вызов двоичного кода Git и создание файлового ввода-вывода вызывают большие затраты времени)</li><li>Структурированная боковая панель будет создаваться только при запуске приложения и не будет обновляться впоследствии (сортировка и индексация боковой панели зависят от внешнего вида каждой страницы, любое изменение содержимого Markdown вызовет пересчет, поэтому большое количество страниц приведет к большим затратам времени)</li><li>Статьи блога, теги, категории и списки статей в каждой категории не будут обновляться с помощью devServer (любое изменение содержимого Markdown вызовет пересчет, поэтому большое количество страниц приведет к большим затратам времени)</li><li>ReadingTime и Word Info в информацию статьи блога не вводятся (любое изменение содержимого Markdown изменит информацию о количестве слов на странице, поэтому базовые необработанные данные VuePress обновляются, вызывая обновление страницы)</li></ul><p>Включение этого означает, что вы соглашаетесь с тем, что каждое изменение вызовет некоторые дорогостоящие пересчеты, и все приложение будет перезапущено, что обычно приводит к обновлению страницы и нескольким секундам пустого экрана в средах с низкой производительностью.</p></div>',5);function I(A,N){const o=l("Badge"),i=l("RouterLink");return c(),r("div",null,[v,d(" more "),n("h2",m,[k,s(" hostname "),a(o,{text:"Только root",type:"warning"})]),b,n("ul",null,[h,n("li",null,[n("p",null,[s("Детали: "),a(i,{to:"/guide/layout/navbar.html"},{default:t(()=>[s("Макет → Панель навигации")]),_:1})])])]),g,f,n("ul",null,[y,n("li",null,[n("p",null,[s("Детали: "),a(i,{to:"/guide/layout/sidebar.html"},{default:t(()=>[s("Макет → Боковая панель")]),_:1})])])]),_,x,n("ul",null,[w,n("li",null,[s("Детали: "),n("ul",null,[n("li",null,[a(i,{to:"/config/theme/i18n.html"},{default:t(()=>[s("Конфигурация мультиязыка темы")]),_:1})])])])]),S])}const C=p(u,[["render",I],["__file","basic.html.vue"]]);export{C as default};
