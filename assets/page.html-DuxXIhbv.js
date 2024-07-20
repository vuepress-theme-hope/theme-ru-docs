import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as s}from"./app-DkYyH7Yy.js";const i={},t=s(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="устаревшее" tabindex="-1"><a class="header-anchor" href="#устаревшее"><span>Устаревшее</span></a></h3><ul><li><p>помечено <code>time</code> как устаревшее, вместо этого использовать <code>date</code></p></li><li><p>помечено <code>categories</code> как устаревшее, вместо этого использовать <code>category</code></p></li><li><p>помечено <code>tags</code> как устаревшее, вместо этого использовать <code>tag</code></p></li></ul><h3 id="изменения" tabindex="-1"><a class="header-anchor" href="#изменения"><span>Изменения</span></a></h3><ul><li><p>изменен тип <code>author</code> с <code>string | undefined</code> на <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Это изменение позволяет вам добавлять нескольких авторов и настраивать для них сайты.</p></li><li><p><code>date</code> поддерживает только стандартную метку DateString с <code>-</code></p></li><li><p>изменен тип <code>category</code> с <code>string | undefined</code> на <code>string[] | string | undefined</code></p><p>Тема поддерживает несколько категорий.</p></li><li><p>изменен тип <code>pageInfo</code> с <code>PageInfo[] | false</code> на <code>ArticleInfo[] | false</code>.</p><p>Доступные значения изменяются с <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> на <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;Visitor&quot;</code></p></li><li><p>переименовано <code>sidebarDepth</code> в <code>headerDepth</code></p></li><li><p>переименовано <code>copyrightText</code> в <code>copyright</code></p></li><li><p>переименовано <code>anchorDisplay</code> в <code>toc</code></p></li><li><p>переименовано <code>updateTime</code> в <code>lastUpdated</code></p></li><li><p>изменены типы <code>prev</code> и <code>next</code> с <code>string | false</code> на <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="удаления" tabindex="-1"><a class="header-anchor" href="#удаления"><span>Удаления</span></a></h3><ul><li><p>удалено <code>password</code></p><p>Из соображений безопасности V2 убирает этот метод шифрования исходного текста шифра.</p></li><li><p>удалено <code>copyright</code></p><p>Связанный плагин еще не совместим с V2.</p></li><li><p>удалено <code>mediaLink</code></p><p>Футер больше не отображает медиа-ссылки.</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>Markdown</span></a></h2><ul><li><p>Изменен синтаксис демо-кода</p><p>До:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [vue] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: demo [react] Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>После:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: normal-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: vue-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::

::: react-demo Title

<span class="token comment">&lt;!-- demo content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Группа кодов изменена на вкладку кода</p><p>До:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: code-group

::: code-group-item pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item npm:active

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>После:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: code-tabs

@tab pnpm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> create vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

@tab:active npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token function">npm</span> init vuepress-theme-hope <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="макет" tabindex="-1"><a class="header-anchor" href="#макет"><span>Макет</span></a></h2><h3 id="домашняя-страница-проекта" tabindex="-1"><a class="header-anchor" href="#домашняя-страница-проекта"><span>Домашняя страница проекта</span></a></h3><p>Изменены параметры frontmatter главной страницы проекта.</p><ul><li>переименовано <code>title</code> в <code>heroText</code></li><li>переименовано <code>darkHeroImage</code> в <code>heroImageDark</code></li><li>переименовано <code>action</code> в <code>actions</code></li></ul>`,13),o=[t];function d(c,l){return n(),a("div",null,o)}const u=e(i,[["render",d],["__file","page.html.vue"]]),m=JSON.parse('{"path":"/migration/page.html","title":"Руководство по миграции страницы","lang":"ru-RU","frontmatter":{"title":"Руководство по миграции страницы","icon":"file","category":["Миграция"],"tag":["Миграция","Frontmatter","Страница"],"description":"Frontmatter Устаревшее помечено time как устаревшее, вместо этого использовать date помечено categories как устаревшее, вместо этого использовать category помечено tags как уста...","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/migration/page.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Руководство по миграции страницы"}],["meta",{"property":"og:description","content":"Frontmatter Устаревшее помечено time как устаревшее, вместо этого использовать date помечено categories как устаревшее, вместо этого использовать category помечено tags как уста..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-03-20T12:45:02.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Миграция"}],["meta",{"property":"article:tag","content":"Frontmatter"}],["meta",{"property":"article:tag","content":"Страница"}],["meta",{"property":"article:modified_time","content":"2023-03-20T12:45:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Руководство по миграции страницы\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T12:45:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"Устаревшее","slug":"устаревшее","link":"#устаревшее","children":[]},{"level":3,"title":"Изменения","slug":"изменения","link":"#изменения","children":[]},{"level":3,"title":"Удаления","slug":"удаления","link":"#удаления","children":[]}]},{"level":2,"title":"Markdown","slug":"markdown","link":"#markdown","children":[]},{"level":2,"title":"Макет","slug":"макет","link":"#макет","children":[{"level":3,"title":"Домашняя страница проекта","slug":"домашняя-страница-проекта","link":"#домашняя-страница-проекта","children":[]}]}],"git":{"createdTime":1679316302000,"updatedTime":1679316302000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"migration/page.md","localizedDate":"20 марта 2023 г.","excerpt":"","autoDesc":true}');export{u as comp,m as data};
