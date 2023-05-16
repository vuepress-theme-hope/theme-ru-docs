import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const hostname = "https://theme-hope-ru.vuejs.press";

export default hopeTheme(
  {
    hostname,

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    favicon: "/favicon.ico",

    iconAssets: "fontawesome-with-brands",

    repo: "vuepress-theme-hope/vuepress-theme-hope",
    docsRepo: "vuepress-theme-hope/theme-ru-docs",
    docsDir: "src",

    logo: "/logo.svg",

    copyright: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    pageInfo: ["ReadingTime", "Category", "Tag"],

    blog: {
      name: "VuePress Theme Hope",
    },

    fullscreen: true,

    locales: {
      "/": {
        navbar,
        sidebar,
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
          "SiteInfo",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",
        ],

        componentOptions: {
          pdf: {
            pdfjs: "/assets/lib/pdfjs/",
          },
        },
      },

      copyright: true,

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        align: true,
        attrs: true,
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
        include: true,
        mathjax: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ["ts", "vue"],
        },
        presentation: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
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
