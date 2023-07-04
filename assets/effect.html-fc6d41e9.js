import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,f as u,b as s,e as n,a as e,w as p,i as a}from"./app-d6a6dcfa.js";const r={},d=s("p",null,"В этом руководстве вы узнаете, как настроить эффекты темы.",-1),k=a(`<h2 id="очистка-эффектов" tabindex="-1"><a class="header-anchor" href="#очистка-эффектов" aria-hidden="true">#</a> Очистка эффектов</h2><p>По умолчанию тема будет:</p><ul><li>Использовать список цветов для украшения категорий и тегов</li><li>Добавлять анимацию при переключении страниц и элементов</li><li>Добавлять анимацию к элементам домашней страницы и добавлять эффекты наведения к функциям</li><li>Использовать более причудливую кнопку копирования кода</li><li>Использовать причудливые всплывающие подсказки</li><li>Добавлять затухание при переключении между дневным и ночным режимами</li></ul><p>Если вам нужно удалить эти причудливые стили, установите <code>pure: true</code> в параметрах темы, чтобы включить чистый режим.</p><p>Между тем, вы можете контролировать продолжительность анимации, управляя <code>$color-transition</code> и <code>transform-transition</code> в файле палитры:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token property"><span class="token variable">$color-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$transform-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
</code></pre></div><h2 id="добавление-эффектов" tabindex="-1"><a class="header-anchor" href="#добавление-эффектов" aria-hidden="true">#</a> Добавление эффектов</h2><p>Вы можете добавлять дополнительные эффекты на свой сайт с помощью параметров файла конфигурации и клиентских файлов, предоставляемых VuePress.</p>`,8),m=s("code",null,"head",-1),v=a(`<div class="hint-container tip"><p class="hint-container-title">Пример</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//...</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>

    <span class="token comment">// import an external script</span>
    <span class="token punctuation">[</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">&quot;YOUR_SCRIPT_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add a script</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        // your script here
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add an external CSS</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&quot;stylesheet&quot;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&quot;YOUR_STYLE_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add a style</span>
    <span class="token comment">// We don&#39;t recommend this, you should prefer to use .vuepress/style/index.scss</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        /* your style here */
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),b=s("code",null,"head",-1),g=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span> YOUR_SCRIPT_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> module
      <span class="token key atrule">src</span><span class="token punctuation">:</span> YOUR_SCRIPT_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">style</span><span class="token punctuation">:</span> YOUR_STYLE_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">style</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> text/css
      <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        /* your style here */</span></span>
<span class="token punctuation">---</span></span>

Содержание страницы

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleGlobalComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleGlobalComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleRootComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleRootComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupExampleCompositionAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./composables/exampleCompositionAPI&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Client enhancements</span>
  <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// register global component</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ExampleGlobalComponent&quot;</span><span class="token punctuation">,</span> ExampleGlobalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// global registration</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Register the global Composition API</span>
    <span class="token function">setupExampleCompositionAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// global component</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ExampleRootComponent&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(h,_){const t=i("RouterLink");return l(),c("div",null,[d,u(" more "),k,s("ul",null,[s("li",null,[s("p",null,[n("Если вам нужно добавить глобальные CSS и JS, установите параметр VuePress "),m,n(" в "),e(t,{to:"/cookbook/vuepress/config.html"},{default:p(()=>[n("файле конфигурации")]),_:1}),n(".")]),v]),s("li",null,[s("p",null,[n("Если вам нужно добавить CSS и JS на уровне страницы, установите параметр "),b,n(" в "),e(t,{to:"/cookbook/vuepress/page.html#frontmatter"},{default:p(()=>[n("Front Matter")]),_:1}),n(".")]),g]),s("li",null,[s("p",null,[n("Более глобальные расширенные операции можно выполнять через "),e(t,{to:"/cookbook/vuepress/config.html#client-config"},{default:p(()=>[n("файл конфигурации клиента")]),_:1}),n(".")]),f])])])}const x=o(r,[["render",y],["__file","effect.html.vue"]]);export{x as default};
