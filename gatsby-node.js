const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

const longreadPages = [
  "news",
  "work",
  "company",
  "debug",
  "msp",
  "mobileMsp",
  "evergis",
  "geomonitoring",
  "evertrack",
  "evergisOnline",
  "vacancy",
];

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
//
//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()));
//       return Promise.reject(result.errors);
//     }
//
//     const posts = result.data.allMarkdownRemark.edges;
//
//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })
//   });
// };

exports.onCreatePage = ({ page }) => {
  if (longreadPages.some(route => page.path.match(route))) {
    page.context.layout = "longread";
  }
};

exports.onCreateNode = ({ page, node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, getConfig, actions: { replaceWebpackConfig } }) => {
  const config = getConfig();

  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }

  switch (stage) {
    case "build-javascript":
      const app = typeof config.entry.app === "string" ? [config.entry.app] : config.entry.app;

      config.entry.app = ["@babel/polyfill", ...app];
      replaceWebpackConfig(config);
  }
};
