import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as p,f as l,b as n,e as s,a as i,w as r,i as a}from"./app-d6a6dcfa.js";const d={},u=n("p",null,"На этой странице вы узнаете, как настроить цвета темы.",-1),m=a(`<h2 id="изменить-встроенныи-цвет" tabindex="-1"><a class="header-anchor" href="#изменить-встроенныи-цвет" aria-hidden="true">#</a> Изменить встроенный цвет</h2><p>Тема управляет цветом через палитру, вам может понадобиться установить свой цвет в двух случаях:</p><ol><li>Этот цвет остается одинаковым в дневном и ночном режимах, как и цвет темы.</li><li>Этот цвет отличается в дневном и ночном режимах, например, цвет фона, шрифт, цвет границы и т. д.</li></ol><p>Файл палитры — это файл <code>.vuepress/styles/palette.scss</code> в папке проекта VuePress.</p><p>Для первого вам нужно записать значения переменных в <code>palette.scss</code>, например:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
</code></pre></div><p>Для последнего вам необходимо настроить карту с ключевыми именами <code>light</code> и <code>dark</code>, и значениями в качестве значений цвета, например:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>
<span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #000<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,8),v=a(`<h2 id="изменить-другие-цвета" tabindex="-1"><a class="header-anchor" href="#изменить-другие-цвета" aria-hidden="true">#</a> Изменить другие цвета</h2><p>Иногда вам может понадобиться изменить некоторые цвета, которых нет в <code>palette.scss</code>, например цвет фона блока кода. В настоящее время вы можете проверить, является ли соответствующее значение атрибута цвета переменной CSS с помощью devTools. Если это так, вы можете перейти к <code>index.scss</code>, чтобы вручную переопределить это значение переменной:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/index.scss</span>

<span class="token comment">// override code block background color</span>
<span class="token selector">#app </span><span class="token punctuation">{</span>
  <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>

  <span class="token selector">html[data-theme=&quot;dark&quot;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если нет, напишите свои собственные селекторы, чтобы переопределить их:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/index.scss</span>

<span class="token comment">// override code block language font color</span>
<span class="token selector">pre[class*=&quot;language-&quot;]::before </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff <span class="token important">!important</span><span class="token punctuation">;</span>

  <span class="token selector">html[data-theme=&quot;dark&quot;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #222 <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(b,g){const e=c("RouterLink");return o(),p("div",null,[u,l(" more "),m,n("p",null,[s("Смотрите "),i(e,{to:"/config/style.html#color-config"},{default:r(()=>[s("Конфигурация темы → Настройки цвета")]),_:1}),s(" для всех доступных цветовых переменных.")]),v])}const _=t(d,[["render",k],["__file","color.html.vue"]]);export{_ as default};
