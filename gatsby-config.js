module.exports = {
  siteMetadata: {
    title: "Everpoint-site",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`astroturf`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/img/assets/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "ru-RU",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: true,
          windows: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox even when doing so is possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: "gatsby-plugin-astroturf",
      // defaults:
      options: {
        tagName: "css",
        styledTag: "styled",
        extension: ".module.scss",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
