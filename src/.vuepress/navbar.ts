import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/guide/",
  "/config/",
  "/faq/",
  {
    text: "Учебник с примерами",
    icon: "signs-post",
    prefix: "/cookbook/",
    children: ["tutorial/", "markdown/", "vuepress/", "advanced/"],
  },
  "/migration/",
  {
    text: "Проект",
    icon: "circle-info",
    prefix: "/",
    children: [
      "changelog",
      "demo",
      "contribution",
      {
        text: "Плагины",
        icon: "puzzle-piece",
        children: [
          {
            text: "Auto catalog Plugin",
            icon: "network-wired",
            link: "https://plugin-auto-catalog.vuejs.press",
          },
          {
            text: "Плагин блога",
            icon: "blog",
            link: "https://plugin-blog2.vuejs.press",
          },
          {
            text: "Плагин комментариев",
            icon: "comment",
            link: "https://plugin-comment2.vuejs.press",
          },
          {
            text: "Плагин компонентов",
            icon: "puzzle-piece",
            link: "https://plugin-components.vuejs.press",
          },
          {
            text: "Плагин копирования кода",
            icon: "copy",
            link: "https://plugin-copy-code2.vuejs.press",
          },
          {
            text: "Плагин авторских прав",
            icon: "copyright",
            link: "https://plugin-copyright.vuejs.press",
          },
          {
            text: "Плагин фида",
            icon: "rss",
            link: "https://plugin-feed2.vuejs.press",
          },
          {
            text: "Плагин галереи",
            icon: "image",
            link: "https://plugin-lightgallery.vuejs.press",
          },
          {
            text: "Плагин улучшения разметки",
            icon: "fab fa-markdown",
            link: "https://plugin-md-enhance.vuejs.press",
          },
          {
            text: "Плагин свайпа фото",
            icon: "image",
            link: "https://plugin-photo-swipe.vuejs.press",
          },
          {
            text: "Плагин PWA",
            icon: "mobile",
            link: "https://plugin-pwa2.vuejs.press",
          },
          {
            text: "Плагин время чтения",
            icon: "book-open",
            link: "https://plugin-reading-time2.vuejs.press",
          },
          {
            text: "Remove PWA Plugin",
            icon: "trash-can",
            link: "https://plugin-remove-pwa.vuejs.press",
          },
          {
            text: "Плагин редиректа",
            icon: "fas fa-eject fa-rotate-90",
            link: "https://plugin-redirect.vuejs.press",
          },
          {
            text: "Плагин палитры Sass",
            icon: "palette",
            link: "https://plugin-sass-palette.vuejs.press",
          },
          {
            text: "Client Search Plugin",
            icon: "search",
            link: "https://plugin-search-pro.vuejs.press",
          },
          {
            text: "Плагин СЕО",
            icon: "wrench",
            link: "https://plugin-seo2.vuejs.press",
          },
          {
            text: "VuePress shared",
            icon: "toolbox",
            link: "https://plugin-shared.vuejs.press",
          },
          {
            text: "Плагин карты сайта",
            icon: "sitemap",
            link: "https://plugin-sitemap2.vuejs.press",
          },
        ],
      },
    ],
  },
]);
