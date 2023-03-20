import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { addViteOptimizeDepsInclude } from "vuepress-shared/node";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export interface ConfigOptions {
  name: string;
  base?: string;
  indexName?: string | false;
  pwa?: boolean;
}

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  lang: "ru-RU",
  title: "vuepress-theme-hope",
  description: "Тема vuepress с множеством функций✨",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/assets/icon/chrome-mask-512.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/assets/icon/chrome-mask-192.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/assets/icon/chrome-512.png`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/assets/icon/chrome-192.png`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    ["meta", { name: "theme-color", content: "#46bd87" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: `/assets/icon/apple-icon-152.png`,
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
  ],

  markdown: {
    code: {
      lineNumbers: 10,
    },
  },

  plugins: [searchProPlugin({ indexContent: true })],

  alias: {
    "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
    "@KatexPlayground": path.resolve(__dirname, "./components/KatexPlayground"),
    "@ToggleRTLButton": path.resolve(__dirname, "./components/ToggleRTLButton"),
    "@NetlifyBadge": path.resolve(__dirname, "./components/NetlifyBadge"),
    "@theme-hope/components/HeroInfo": path.resolve(
      __dirname,
      "./components/HopeHero"
    ),
    "@theme-hope/components/NotFoundHint": path.resolve(
      __dirname,
      "./components/HopeNotFoundHint"
    ),
  },

  theme,

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  extendsBundlerOptions: (bundlerOptions: unknown, app): void => {
    addViteOptimizeDepsInclude(bundlerOptions, app, [
      "three",
      "three/examples/jsm/controls/OrbitControls",
      "three/examples/jsm/loaders/STLLoader",
    ]);
  },
});
