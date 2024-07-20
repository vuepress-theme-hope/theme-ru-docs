import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as p,b as n,d as s,a as e,w as d,e as l}from"./app-DkYyH7Yy.js";const r={},u=l('<h2 id="введение" tabindex="-1"><a class="header-anchor" href="#введение"><span>Введение</span></a></h2><p>Плагин <code>vuepress-plugin-md-enhance</code> включен по умолчанию и предоставляет улучшения Markdown.</p><p><code>vuepress-theme-hope</code> передает <code>plugins.mdEnhance</code> в параметрах темы в качестве параметров плагина для плагина <code>vuepress-plugin-md-enhance</code>.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Если вам не нужна эта функция, установите значение <code>false</code>.</p></div>',4),m={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"Инфо",-1),k=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" установит для параметра "),n("code",null,"container"),s(" значение "),n("code",null,"true"),s(" по умолчанию.")],-1),b=n("h2",{id:"опции-плагина",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#опции-плагина"},[n("span",null,"Опции плагина")])],-1),h=n("h3",{id:"gfm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gfm"},[n("span",null,"gfm")])],-1),g=n("ul",null,[n("li",null,[s("Тип: "),n("code",null,"boolean")]),n("li",null,[s("По умолчанию: "),n("code",null,"false")])],-1),f=n("p",null,"Поддерживать ли полный синтаксис GFM.",-1),y={class:"hint-container note"},x=n("p",{class:"hint-container-title"},"Заметка",-1),w={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"Честно говоря, мы не поддерживаем его на 100%, мы предоставляем только его синтаксис, включая списки задач, сноски и так далее.",-1),q=n("p",null,[s("Некоторое поведение может отличаться, например, чтобы разрешить синтаксис Vue, мы не запрещаем теги "),n("code",null,"<script>"),s(". Но в большинстве ситуаций поведение должно быть таким же.")],-1),P=l(`<h3 id="container" tabindex="-1"><a class="header-anchor" href="#container"><span>container</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>true</code></li></ul><p>Включить ли пользовательский контейнер, включая:</p><ul><li>info</li><li>note</li><li>tip</li><li>warning</li><li>danger</li><li>details</li></ul><h3 id="linkcheck" tabindex="-1"><a class="header-anchor" href="#linkcheck"><span>linkCheck</span></a></h3><ul><li>Тип: <code>&quot;always&quot; | &quot;dev&quot; | &quot;build&quot; | &quot;never&quot; | boolean</code></li><li>По умолчанию: <code>&quot;dev&quot;</code></li></ul><p>Включить ли проверку ссылок.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><ul><li><code>true</code> эквивалентно <code>&#39;always&#39;</code></li><li><code>false</code> эквивалентно <code>&#39;never&#39;</code></li></ul></div><h3 id="vpre" tabindex="-1"><a class="header-anchor" href="#vpre"><span>vPre</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли обертку v-pre.</p><h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>tabs</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли вкладки.</p><h3 id="codetabs" tabindex="-1"><a class="header-anchor" href="#codetabs"><span>codetabs</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли кодовые таблицы.</p><h3 id="align" tabindex="-1"><a class="header-anchor" href="#align"><span>align</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли пользовательское выравнивание.</p><h3 id="sup" tabindex="-1"><a class="header-anchor" href="#sup"><span>sup</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку формата верхнего индекса.</p><h3 id="sub" tabindex="-1"><a class="header-anchor" href="#sub"><span>sub</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку формата нижнего индекса.</p><h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>footnote</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку формата сносок.</p><h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>mark</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку выделения.</p><h3 id="imglazyload" tabindex="-1"><a class="header-anchor" href="#imglazyload"><span>imgLazyload</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Следует ли лениво загружать все изображения на странице собственным способом.</p><h3 id="figure" tabindex="-1"><a class="header-anchor" href="#figure"><span>figure</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку названия изображения.</p><h3 id="imgmark" tabindex="-1"><a class="header-anchor" href="#imgmark"><span>imgMark</span></a></h3><ul><li>Тип: <code>ImageMarkOptions | boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку метки изображения.</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** lightmode only IDs */</span>
  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** darkmode only IDs */</span>
  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="imgsize" tabindex="-1"><a class="header-anchor" href="#imgsize"><span>imgSize</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку размера изображения.</p><h3 id="obsidianimgsize" tabindex="-1"><a class="header-anchor" href="#obsidianimgsize"><span>obsidianImgSize</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли obsidian поддержку размера изображения.</p><h3 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist"><span>tasklist</span></a></h3><ul><li>Тип: <code>TaskListOptions | boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку формата списка задач. Вы можете передать объект в список задач конфигурации.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether disable checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;label&gt;\` to wrap text
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="katex" tabindex="-1"><a class="header-anchor" href="#katex"><span>katex</span></a></h3><ul><li>Тип: <code>KatexOptions &amp; { mhchem?: boolean } | boolean</code></li><li>По умолчанию: <code>false</code></li></ul>`,54),M=n("p",null,[s("Включить ли поддержку синтаксиса "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"TeX")]),n("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])]),s(" через KaTeX. Вы можете передать объект в конфигурацию KaTeX.")],-1),z=n("p",null,[s("В частности, вы можете включить расширение mhchem с помощью "),n("code",null,"katex.mhchem: true"),s(".")],-1),C={href:"https://katex.org/docs/options.html",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"mathjax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mathjax"},[n("span",null,"mathjax")])],-1),j=n("ul",null,[n("li",null,[s("Тип: "),n("code",null,"MathJaxOptions | boolean")]),n("li",null,[s("По умолчанию: "),n("code",null,"false")])],-1),O=n("p",null,[s("Включить ли поддержку синтаксиса "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"TeX")]),n("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),n("span",{class:"mord text"},[n("span",{class:"mord textrm"},"T"),n("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4678em"}},[n("span",{style:{top:"-2.7845em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord textrm"},"E")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2155em"}},[n("span")])])]),n("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),n("span",{class:"mord textrm"},"X")])])])]),s(" через Math Jax. Вы можете передать объект в конфигурацию Math Jax.")],-1),T={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance/src/shared/mathjax.ts",target:"_blank",rel:"noopener noreferrer"},R=l('<h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>flowchart</span></a></h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку блок-схем.</p><h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>mermaid</span></a></h3><ul><li>Тип: <code>MermaidConfig | boolean</code></li><li>По умолчанию: <code>false</code></li></ul>',5),L={href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"},E=l(`<h3 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize"><span>stylize</span></a></h3><ul><li><p>Тип: <code>StylizeOptions | false</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StylizeResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tag name
   */</span>
  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Attributes settings
   */</span>
  attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tag content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StylizeItem</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Inline token matcher
   */</span>
  matcher<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Content Replacer
   */</span>
  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    attrs<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    env<span class="token operator">?</span><span class="token operator">:</span> MarkdownEnv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> StylizeResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">StylizeOptions</span> <span class="token operator">=</span> StylizeItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>По умолчанию: <code>false</code></p></li></ul><p>Стилизуйте встроенные токены, чтобы создать нужный фрагмент.</p><h3 id="playground" tabindex="-1"><a class="header-anchor" href="#playground"><span>playground</span></a></h3><ul><li><p>Тип: <code>PlaygroundGlobalOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CompilerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Code block extension
   *
   * <span class="token keyword">@description</span> It&#39;s based on filename, not code fence language
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Code block content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Title of Playground
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map file name
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground files info
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/** File name */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** File detail */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground settings
   *
   * <span class="token keyword">@description</span> It&#39;s parsed result of json content after setting directive
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * hash key based on playground content
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Playground container name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground component name
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Props getter
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TSPresetPlaygroundOptions</span> <span class="token keyword">extends</span> <span class="token class-name">CompilerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://www.typescriptlang.org/play&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">VuePresetPlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * external playground service url
   *
   * <span class="token keyword">@default</span> &quot;https://sfc.vuejs.org/&quot;
   */</span>
  service<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to use dev version
   *
   * <span class="token keyword">@default</span> false
   */</span>
  dev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundGlobalOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Playground presets */</span>
  presets<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;ts&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vue&quot;</span> <span class="token operator">|</span> PlaygroundOptions<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Playground config */</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ts<span class="token operator">?</span><span class="token operator">:</span> TSPresetPlaygroundOptions<span class="token punctuation">;</span>
    vue<span class="token operator">?</span><span class="token operator">:</span> VuePresetPlaygroundOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Варианты плейграунда.</p><h3 id="vueplayground" tabindex="-1"><a class="header-anchor" href="#vueplayground"><span>vuePlayground</span></a></h3><ul><li><p>Тип: <code>VuePlaygroundOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VuePlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * specify the version of vue
   */</span>
  vueVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * specify default URL to import Vue runtime from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/runtime-dom@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/runtime-dom.esm-browser.js&quot;
   */</span>
  defaultVueRuntimeURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Specify default URL to import Vue Server Renderer from in the sandbox
   *
   * <span class="token keyword">@default</span> &quot;https://unpkg.com/@vue/server-renderer@$<span class="token punctuation">{</span>version<span class="token punctuation">}</span>/dist/server-renderer.esm-browser.js&quot;
   */</span>
  defaultVueServerRendererURL<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable repl&#39;s editor resizable
   *
   * <span class="token keyword">@default</span> true
   */</span>
  autoResize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show JS, CSS, SSR panel
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showCompileOutput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to show import map
   *
   * <span class="token keyword">@default</span> true
   */</span>
  showImportMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to clear console
   *
   * <span class="token keyword">@default</span> false
   */</span>
  clearConsole<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Layout
   *
   * <span class="token keyword">@default</span> &#39;horizontal&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span> <span class="token operator">|</span>layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;horizontal&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Options to configure the \`vue/compiler-sfc\`
   */</span>
  sfcOptions<span class="token operator">?</span><span class="token operator">:</span> SFCOptions<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether to enable SSR
   *
   * <span class="token keyword">@default</span> true
   */</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>По умолчанию: <code>false</code></p></li></ul><p>Включить ли поддержку Vue Playground.</p><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>demo</span></a></h3><ul><li>Тип: <code>CodeDemoGlobalOptions | boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку демонстрации кода.</p><h4 id="demo-jslib" tabindex="-1"><a class="header-anchor" href="#demo-jslib"><span>demo.jsLib</span></a></h4><ul><li>Тип: <code>string[]</code></li><li>Обязательный: Нет</li></ul><p>CodePen, JsFiddle требует внешней библиотеки JS для знакомств.</p><h4 id="demo-csslib" tabindex="-1"><a class="header-anchor" href="#demo-csslib"><span>demo.cssLib</span></a></h4><ul><li>Тип: <code>string[]</code></li><li>Обязательный: Нет</li></ul><p>CodePen, JsFiddle нужна внешняя библиотека CSS для знакомств.</p><div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Вышеупомянутые две опции используются только сторонним демонстрационным сервисом кода, вам необходимо импортировать эти библиотеки в <code>head</code>.</p></div><h4 id="demo-jsfiddle" tabindex="-1"><a class="header-anchor" href="#demo-jsfiddle"><span>demo.jsfiddle</span></a></h4><ul><li>Тип: <code>boolean</code></li><li>Значение по умолчанию: <code>true</code></li></ul><p>Отображать ли кнопку JSFiddle.</p><h4 id="demo-codepen" tabindex="-1"><a class="header-anchor" href="#demo-codepen"><span>demo.codepen</span></a></h4><ul><li>Тип: <code>boolean</code></li><li>Значение по умолчанию: <code>true</code></li></ul><p>Отображать ли кнопку CodePen.</p><h4 id="demo-codepenlayout" tabindex="-1"><a class="header-anchor" href="#demo-codepenlayout"><span>demo.codepenLayout</span></a></h4><ul><li>Тип: <code>&quot;top&quot; | &quot;left&quot; | &quot;correct&quot;</code></li><li>Значение по умолчанию: <code>&quot;left&quot;</code></li></ul><p>Макет редактора CodePen.</p><h4 id="demo-codepeneditors" tabindex="-1"><a class="header-anchor" href="#demo-codepeneditors"><span>demo.codepenEditors</span></a></h4><ul><li>Тип: <code>string</code></li><li>Значение по умолчанию: <code>&quot;101&quot;</code></li></ul><p>Статус редактора CodePen.</p><h4 id="другие" tabindex="-1"><a class="header-anchor" href="#другие"><span>Другие</span></a></h4><p>Ниже приведены ссылки на библиотеки, используемые сторонней демонстрационной службой кода. Если ваша среда не может посетить unpkg или скорость низкая, вам, вероятно, не нужно переопределять значения по умолчанию.</p><h5 id="demo-babel" tabindex="-1"><a class="header-anchor" href="#demo-babel"><span>demo.babel</span></a></h5><p>Значение по умолчанию: <code>&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;</code></p><h5 id="demo-vue" tabindex="-1"><a class="header-anchor" href="#demo-vue"><span>demo.vue</span></a></h5><p>Значение по умолчанию: <code>&quot;https://unpkg.com/vue/dist/vue.global.prod.js&quot;</code></p><h5 id="demo-react" tabindex="-1"><a class="header-anchor" href="#demo-react"><span>demo.react</span></a></h5><p>Значение по умолчанию: <code>&quot;https://unpkg.com/react/umd/react.production.min.js&quot;</code></p><h5 id="demo-reactdom" tabindex="-1"><a class="header-anchor" href="#demo-reactdom"><span>demo.reactDOM</span></a></h5><p>Значение по умолчанию: <code>&quot;https://unpkg.com/react-dom/umd/react-dom.production.min.js&quot;</code></p><h3 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation"><span>presentation</span></a></h3><ul><li>Тип: <code>PresentationOptions | boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Включить ли поддержку синтаксиса представления.</p><p>Вы можете установить его с помощью объекта, объект будет использоваться для настройки reveal.js.</p><h4 id="presentation-plugins" tabindex="-1"><a class="header-anchor" href="#presentation-plugins"><span>presentation.plugins</span></a></h4><ul><li><p>Тип: <code>RevealPlugin[]</code></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RevealPlugin</span> <span class="token operator">=</span> <span class="token string">&quot;highlight&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;math&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;search&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;notes&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>Обязательный: Нет</p></li></ul><p>Плагины, которые вы хотите использовать в reveal.js.</p><p>Допустимые значения:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><h4 id="presentation-revealconfig" tabindex="-1"><a class="header-anchor" href="#presentation-revealconfig"><span>presentation.revealConfig</span></a></h4><ul><li>Тип: <code>Partial&lt;RevealOptions&gt;</code></li><li>Обязательный: Нет</li></ul><p>Конфиг, который вы хотите передать в reveal.js.</p><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>800</code></li></ul><p>Задержка срабатывания, в мс.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Если используемая вами тема имеет анимацию переключения, рекомендуется настроить этот параметр на <code>Switch animation duration + 200</code>.</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>Тип: <code>MarkdownEnhanceLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Default Title text for info block
   */</span>
  info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for note block
   */</span>
  note<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for tip block
   */</span>
  tip<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for warning block
   */</span>
  warning<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for danger block
   */</span>
  danger<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default Title text for details block
   */</span>
  details<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownEnhanceLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> MarkdownEnhanceLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Конфигурация локалей для плагина Расширения Markdown.</p>`,60);function D(I,V){const t=i("ProjectLink"),a=i("ExternalLinkIcon");return c(),p("div",null,[u,n("div",m,[v,k,n("p",null,[s("Подробнее смотрите в "),e(t,{name:"md-enhance",path:"/config.html"},{default:d(()=>[s("документации по md-enhance")]),_:1}),s(".")])]),b,h,g,f,n("div",y,[x,n("p",null,[s("Полный синтаксис GFM смотрите в "),n("a",w,[s("GFM"),e(a)]),s(".")]),_,q]),P,M,z,n("p",null,[s("Доступные варианты смотрите в "),n("a",C,[s("Документации Katex"),e(a)]),s(".")]),S,j,O,n("p",null,[s("Доступные варианты смотрите в "),n("a",T,[s("исходном коде"),e(a)]),s(".")]),R,n("p",null,[s("Включить ли поддержку "),n("a",L,[s("Mermaid"),e(a)]),s(".")]),E])}const W=o(r,[["render",D],["__file","md-enhance.html.vue"]]),G=JSON.parse('{"path":"/config/plugins/md-enhance.html","title":"MdEnhance Plugin Config","lang":"ru-RU","frontmatter":{"title":"MdEnhance Plugin Config","icon":"fab fa-markdown","order":6,"category":["Конфиг"],"tag":["Markdown","Разметка","Конфигурация плагина","Конфиг темы"],"description":"Введение Плагин vuepress-plugin-md-enhance включен по умолчанию и предоставляет улучшения Markdown. vuepress-theme-hope передает plugins.mdEnhance в параметрах темы в качестве п...","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/config/plugins/md-enhance.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"MdEnhance Plugin Config"}],["meta",{"property":"og:description","content":"Введение Плагин vuepress-plugin-md-enhance включен по умолчанию и предоставляет улучшения Markdown. vuepress-theme-hope передает plugins.mdEnhance в параметрах темы в качестве п..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-05-27T16:52:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"Разметка"}],["meta",{"property":"article:tag","content":"Конфигурация плагина"}],["meta",{"property":"article:tag","content":"Конфиг темы"}],["meta",{"property":"article:modified_time","content":"2023-05-27T16:52:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MdEnhance Plugin Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-27T16:52:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Введение","slug":"введение","link":"#введение","children":[]},{"level":2,"title":"Опции плагина","slug":"опции-плагина","link":"#опции-плагина","children":[{"level":3,"title":"gfm","slug":"gfm","link":"#gfm","children":[]},{"level":3,"title":"container","slug":"container","link":"#container","children":[]},{"level":3,"title":"linkCheck","slug":"linkcheck","link":"#linkcheck","children":[]},{"level":3,"title":"vPre","slug":"vpre","link":"#vpre","children":[]},{"level":3,"title":"tabs","slug":"tabs","link":"#tabs","children":[]},{"level":3,"title":"codetabs","slug":"codetabs","link":"#codetabs","children":[]},{"level":3,"title":"align","slug":"align","link":"#align","children":[]},{"level":3,"title":"sup","slug":"sup","link":"#sup","children":[]},{"level":3,"title":"sub","slug":"sub","link":"#sub","children":[]},{"level":3,"title":"footnote","slug":"footnote","link":"#footnote","children":[]},{"level":3,"title":"mark","slug":"mark","link":"#mark","children":[]},{"level":3,"title":"imgLazyload","slug":"imglazyload","link":"#imglazyload","children":[]},{"level":3,"title":"figure","slug":"figure","link":"#figure","children":[]},{"level":3,"title":"imgMark","slug":"imgmark","link":"#imgmark","children":[]},{"level":3,"title":"imgSize","slug":"imgsize","link":"#imgsize","children":[]},{"level":3,"title":"obsidianImgSize","slug":"obsidianimgsize","link":"#obsidianimgsize","children":[]},{"level":3,"title":"tasklist","slug":"tasklist","link":"#tasklist","children":[]},{"level":3,"title":"katex","slug":"katex","link":"#katex","children":[]},{"level":3,"title":"mathjax","slug":"mathjax","link":"#mathjax","children":[]},{"level":3,"title":"flowchart","slug":"flowchart","link":"#flowchart","children":[]},{"level":3,"title":"mermaid","slug":"mermaid","link":"#mermaid","children":[]},{"level":3,"title":"stylize","slug":"stylize","link":"#stylize","children":[]},{"level":3,"title":"playground","slug":"playground","link":"#playground","children":[]},{"level":3,"title":"vuePlayground","slug":"vueplayground","link":"#vueplayground","children":[]},{"level":3,"title":"demo","slug":"demo","link":"#demo","children":[]},{"level":3,"title":"presentation","slug":"presentation","link":"#presentation","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]}],"git":{"createdTime":1679316302000,"updatedTime":1685206333000,"contributors":[{"name":"Aleksandr Gorbatov","email":"hkrtrk@yandex.ru","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.19,"words":1257},"filePathRelative":"config/plugins/md-enhance.md","localizedDate":"20 марта 2023 г.","excerpt":"","autoDesc":true}');export{W as comp,G as data};
