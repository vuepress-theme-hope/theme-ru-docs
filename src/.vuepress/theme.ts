import { path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const hostname = "https://theme-hope-ru.vuejs.press";

export default hopeTheme(
  {
    hostname,

    author: {
      name: "Mr.Hope",
      url: "https://mister-hope.com",
    },

    favicon: "/favicon.ico",

    iconAssets: "fontawesome-with-brands",

    repo: "vuepress-theme-hope/vuepress-theme-hope",
    docsRepo: "vuepress-theme-hope/theme-ru-docs",
    docsDir: "src",

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    copyright: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    extraLocales: {
      English: "https://theme-hope.vuejs.press/:route",
      简体中文: "https://theme-hope.vuejs.press/zh/:route",
    },

    pageInfo: ["ReadingTime", "Category", "Tag"],

    blog: {
      name: "VuePress Theme Hope",
    },

    fullscreen: true,

    navbar,
    sidebar,

    encrypt: {
      config: {
        "/demo/encrypt.html": "1234",
      },
    },

    plugins: {
      blog: {
        excerptLength: 0,
      },

      comment: {
        provider: "Giscus",
        repo: "vuepress-theme-hope/giscus-discussions",
        repoId: "R_kgDOG_Pt2A",
        category: "Announcements",
        categoryId: "DIC_kwDOG_Pt2M4COD69",
        mapping: "url",
      },

      components: {
        components: [
          "ArtPlayer",
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "Share",
          "SiteInfo",
          "StackBlitz",
          "VidStack",
          "VideoPlayer",
          "YouTube",
        ],

        componentOptions: {
          pdf: {
            pdfjs: "/assets/lib/pdfjs/",
          },
        },
      },

      copyright: {
        license: "MIT",
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        align: true,
        attrs: true,
        component: true,
        chart: true,
        codetabs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: {
          resolvePath: (file) => {
            if (file.startsWith("@echarts"))
              return file.replace(
                "@echarts",
                path.resolve(__dirname, "../echarts")
              );

            return file;
          },
        },
        katex: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ["ts", "vue", "unocss"],
        },
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
          themes: [
            "auto",
            "beige",
            "black",
            "blood",
            "league",
            "moon",
            "night",
            "serif",
            "simple",
            "sky",
            "solarized",
            "white",
          ],
        },
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
      },
    },
  },

  { custom: true }
);
