import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o,c as p,b as n,d as c,a as i,e as a}from"./app-DkYyH7Yy.js";const l="/assets/article-list-light-D371Bhaw.png",r="/assets/article-list-dark-DBx6Sc_3.png",u={},d=a('<p>Тема предоставляет вам список всех статей по пути <code>/article/</code> по умолчанию.</p><h2 id="статья" tabindex="-1"><a class="header-anchor" href="#статья"><span>Статья</span></a></h2><p>Все статьи будут добавлены в список статей по умолчанию и отображены по пути <code>/article/</code>.</p><p><img src="'+l+'" alt="Список статей" loading="lazy" data-mode="lightmode-only"><br><img src="'+r+'" alt="Список статей" loading="lazy" data-mode="darkmode-only"></p><p>Если вы не хотите, чтобы список содержал какие-то конкретные статьи, просто установите для параметра <code>article</code> значение <code>false</code> в начале статьи или вы можете настроить его с помощью <code>plugins.blog.filter</code> в параметрах темы.</p><p>Чтобы прикрепить конкретную статью к списку статей, просто установите для параметра <code>sticky</code> значение <code>true</code> в frontmatter статьи.</p><div class="hint-container tip"><p class="hint-container-title">Порядок</p><p>Для липких статей вы можете установить <code>sticky</code> с числом, чтобы установить их порядок. Статьи с большими номерами будут перечислены первыми.</p></div><h2 id="выдержка" tabindex="-1"><a class="header-anchor" href="#выдержка"><span>Выдержка</span></a></h2><h3 id="добавление-выдержки" tabindex="-1"><a class="header-anchor" href="#добавление-выдержки"><span>Добавление выдержки</span></a></h3><p>Если вы хотите добавить отрывок к статье, вы можете пометить содержимое комментарием <code>&lt;!-- more --&gt;</code>. Любой контент до этого комментария будет считаться выдержкой.</p><p>Между тем, если отрывок, который вы хотите установить, не соответствует тому, что вы хотите показать в начале статьи, вы также можете установить строку HTML с помощью параметра <code>excerpt</code> во Frontmatter.</p><h3 id="автоматически-генерировать-выдержку" tabindex="-1"><a class="header-anchor" href="#автоматически-генерировать-выдержку"><span>Автоматически генерировать выдержку</span></a></h3><p>По умолчанию тема автоматически извлекает для вас выдержки из статьи.</p><p>Если вы хотите, чтобы тема отображала только указанный вами отрывок, установите <code>plugins.blog.excerptLength: 0</code> в параметрах темы.</p><div class="hint-container warning"><p class="hint-container-title">Ограничение выдержки</p><p>Мы рекомендуем вам использовать <code>&lt;!-- more --&gt;</code>, чтобы отметить отрывок как первый выбор. Если вам нужна особая выдержка, установите ее во вступительном слове самостоятельно.</p><p>Кроме того, отрывок напрямую вставляется в DOM через <code>innerHTML</code>, это означает, что никакие функции Vue недоступны.</p></div><h2 id="звездные-статьи" tabindex="-1"><a class="header-anchor" href="#звездные-статьи"><span>Звездные статьи</span></a></h2><p>Вы можете пометить статью, установив для параметра <code>star</code> значение <code>true</code> в frontmatter. После просмотра пользователи могут просмотреть эти статьи на странице <code>/star/</code>.</p><p>В то же время любые звездные статьи будут отображаться в столбце статей на боковой панели главной страницы блога.</p><div class="hint-container info"><p class="hint-container-title">Инфо</p><p>Наше соображение по поводу предоставления звездочек: пользователи темы могут захотеть показать посетителям некоторые высококачественные статьи, но не хотят, чтобы прилепленные статьи переполняли главную страницу, в результате чего посетители не могли видеть недавно обновленные статьи.</p></div><div class="hint-container tip"><p class="hint-container-title">Порядок</p><p>Как и в случае с прикрепленными статьями, вы также можете установить <code>star</code> на номер, чтобы установить их порядок. Статьи с большими номерами будут перечислены первыми.</p></div>',20),k={id:"другие-типы-статеи",tabindex:"-1"},m={class:"header-anchor",href:"#другие-типы-статеи"},v=a(`<p>Тема предоставляет отдельные списки для дополнительных типов статей.</p><p>Чтобы добавить дополнительный тип статьи, вы должны установить <code>plugins.blog.type</code> в настройках темы с массивом объектов, описывающих нужный вам тип.</p><p>Каждый тип должен иметь уникальный ключ (без специальных символов) и функцию <code>filter</code>, чтобы определить, должна ли страница соответствовать типу. Функция <code>filter</code> должна принимать объект страницы и возвращать логическое значение.</p><p>Для сортировки страниц в списке типов вы также можете установить функцию <code>sorter</code>. Функция <code>sorter</code> должна принимать два объекта страницы и возвращать число.</p><p>По умолчанию путь к списку типов будет <code>/key/</code> (с заменой <code>key</code> вашим фактическим ключом). Вы также можете установить собственный путь, установив <code>path</code> в параметрах.</p><p>Опция <code>frontmatter</code> управляет лицевой стороной страницы макета, а функция принимает <code>localePath</code> и возвращает объект внешней оболочки. Этот параметр полезен при установке заголовка страницы макета.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p><code>layout</code> — это имя макета, по умолчанию это будет <code>BlogType</code>, зарегистрированный макет <code>vuepress-theme-hope</code>. ТОЛЬКО ЕСЛИ вы создаете собственный макет для списка типов, вы должны установить для этой опции значение вашего макета.</p></div><p>Также вам необходимо установить <code>blogLocales[key]</code> в локалях темы с фактическим именем типа, чтобы тема могла правильно отображать имя типа.</p><p>Для начала мы хотели бы показать вам несколько примеров.</p><details class="hint-container details"><summary>Примеры</summary><ol><li><p>Добавление типа страниц слайдов.</p><p>Все страницы со слайдами должны иметь <code>layout: Slide</code> во frontmatter. И последовательность не имеет значения.</p></li><li><p>Добавление исходного типа.</p></li></ol><p>Вы должны установить следующие параметры:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// you may need to install vuepress-shared to use its \`compareDate\`</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compareDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// other config</span>
  <span class="token comment">// ...</span>

  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
      slide<span class="token operator">:</span> <span class="token string">&quot;Slides&quot;</span><span class="token punctuation">,</span>
      original<span class="token operator">:</span> <span class="token string">&quot;Original&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      blog<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&quot;slide&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">&quot;Slide&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;Slides&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>original<span class="token punctuation">,</span>
            <span class="token function-variable function">sorter</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token punctuation">,</span> pageB<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
              <span class="token function">compareDate</span><span class="token punctuation">(</span>pageA<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date <span class="token operator">-</span> pageB<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;Original&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10);function h(g,b){const s=e("Badge");return o(),p("div",null,[d,n("h2",k,[n("a",m,[n("span",null,[c("Другие типы статей "),i(s,{text:"Продвинутый",type:"info"})])])]),v])}const _=t(u,[["render",h],["__file","article.html.vue"]]),q=JSON.parse('{"path":"/guide/blog/article.html","title":"Список статей","lang":"ru-RU","frontmatter":{"title":"Список статей","icon":"clipboard-list","order":3,"category":["Блог"],"tag":["Статья","Блог","Шифрование","Слайд","Избранное"],"description":"Тема предоставляет вам список всех статей по пути /article/ по умолчанию. Статья Все статьи будут добавлены в список статей по умолчанию и отображены по пути /article/. Если вы ...","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/guide/blog/article.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Список статей"}],["meta",{"property":"og:description","content":"Тема предоставляет вам список всех статей по пути /article/ по умолчанию. Статья Все статьи будут добавлены в список статей по умолчанию и отображены по пути /article/. Если вы ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-05-21T16:45:41.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Статья"}],["meta",{"property":"article:tag","content":"Блог"}],["meta",{"property":"article:tag","content":"Шифрование"}],["meta",{"property":"article:tag","content":"Слайд"}],["meta",{"property":"article:tag","content":"Избранное"}],["meta",{"property":"article:modified_time","content":"2023-05-21T16:45:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Список статей\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-21T16:45:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Статья","slug":"статья","link":"#статья","children":[]},{"level":2,"title":"Выдержка","slug":"выдержка","link":"#выдержка","children":[{"level":3,"title":"Добавление выдержки","slug":"добавление-выдержки","link":"#добавление-выдержки","children":[]},{"level":3,"title":"Автоматически генерировать выдержку","slug":"автоматически-генерировать-выдержку","link":"#автоматически-генерировать-выдержку","children":[]}]},{"level":2,"title":"Звездные статьи","slug":"звездные-статьи","link":"#звездные-статьи","children":[]},{"level":2,"title":"Другие типы статей","slug":"другие-типы-статеи","link":"#другие-типы-статеи","children":[]}],"git":{"createdTime":1679316302000,"updatedTime":1684687541000,"contributors":[{"name":"Aleksandr Gorbatov","email":"hkrtrk@yandex.ru","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.19,"words":656},"filePathRelative":"guide/blog/article.md","localizedDate":"20 марта 2023 г.","excerpt":"<p>Тема предоставляет вам список всех статей по пути <code>/article/</code> по умолчанию.</p>\\n<h2>Статья</h2>\\n<p>Все статьи будут добавлены в список статей по умолчанию и отображены по пути <code>/article/</code>.</p>\\n<p><br>\\n</p>\\n<p>Если вы не хотите, чтобы список содержал какие-то конкретные статьи, просто установите для параметра <code>article</code> значение <code>false</code> в начале статьи или вы можете настроить его с помощью <code>plugins.blog.filter</code> в параметрах темы.</p>\\n<p>Чтобы прикрепить конкретную статью к списку статей, просто установите для параметра <code>sticky</code> значение <code>true</code> в frontmatter статьи.</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Порядок</p>\\n<p>Для липких статей вы можете установить <code>sticky</code> с числом, чтобы установить их порядок. Статьи с большими номерами будут перечислены первыми.</p>\\n</div>\\n<h2>Выдержка</h2>\\n<h3>Добавление выдержки</h3>\\n<p>Если вы хотите добавить отрывок к статье, вы можете пометить содержимое комментарием `</p>\\n","autoDesc":true}');export{_ as comp,q as data};
