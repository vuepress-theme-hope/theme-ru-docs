import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as n}from"./app-DkYyH7Yy.js";const o={},r=n(`<p>В этом руководстве будет представлена структура проекта VuePress.</p><h2 id="структура-проекта-vuepress" tabindex="-1"><a class="header-anchor" href="#структура-проекта-vuepress"><span>Структура проекта VuePress</span></a></h2><p>VuePress управляет только файлами в папке проекта VuePress, то есть параметрами из предыдущей главы. Другие файлы в проекте не используются VuePress.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Если вы использовали <code>docs</code>, как указано в предыдущем уроке, <code>docs</code> — это папка вашего проекта VuePress.</p></div><p>Базовая структура проекта выглядит следующим образом:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
├── .github (optional) → GitHub config file storage path
│     └── workflow → GitHub workflow configuration
│          └── docs-deploy.yml → Workflow for automatic deployment of documents
|
├── docs → project folder specified by you
│    │
│    ├── .vuepress (optional) → VuePress config folder
│    │    │
│    │    ├── dist (default) → build output directory
│    │    │
│    │    ├── public (optional) → static resource directory
│    │    │
│    │    ├── styles (optional) → style-related files
│    │    │
│    │    ├── config.{js,ts} (optional) → the entry file of the configuration file
│    │    │
│    │    └── client.{js,ts} (optional) → client application file
│    │
│    ├── ... → Other project documentation
│    │
│    └── README.md → Project Homepage
│
└── package.json → Nodejs configuration file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),s=[r];function a(l,c){return t(),i("div",null,s)}const p=e(o,[["render",a],["__file","structure.html.vue"]]),m=JSON.parse('{"path":"/cookbook/tutorial/structure.html","title":"Структура проекта","lang":"ru-RU","frontmatter":{"title":"Структура проекта","icon":"folder-tree","order":6,"category":["Учебник с примерами","Руководство","Начало работы"],"tag":["Структура проекта"],"description":"В этом руководстве будет представлена структура проекта VuePress.","head":[["meta",{"property":"og:url","content":"https://theme-hope-ru.vuejs.press/cookbook/tutorial/structure.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Структура проекта"}],["meta",{"property":"og:description","content":"В этом руководстве будет представлена структура проекта VuePress."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2023-03-20T12:45:02.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Структура проекта"}],["meta",{"property":"article:modified_time","content":"2023-03-20T12:45:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Структура проекта\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T12:45:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Структура проекта VuePress","slug":"структура-проекта-vuepress","link":"#структура-проекта-vuepress","children":[]}],"git":{"createdTime":1679316302000,"updatedTime":1679316302000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"cookbook/tutorial/structure.md","localizedDate":"20 марта 2023 г.","excerpt":"<p>В этом руководстве будет представлена структура проекта VuePress.</p>\\n","autoDesc":true}');export{p as comp,m as data};
