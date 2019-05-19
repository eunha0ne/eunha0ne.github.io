/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
    {
      allMarkdownRemark (
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            headings(depth: h2) {
              value
            }
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        const postTemplate = path.resolve("src/templates/post.js");
        const tagTemplate = path.resolve("src/templates/tag-template.js");

        // [1]
        // Create post detail pages
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node }, index) => {
          createPage({
            path: node.fields.slug,
            component: postTemplate,
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
              prev: index === 0 ? null : posts[index - 1],
              next: index === posts.length - 1 ? null : posts[index + 1],
            }
          });
        });

        // [2]
        // All tags
        let allTags = [];
        // Iterate through each post, putting all found tags into `allTags array`
        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            allTags = allTags.concat(edge.node.frontmatter.tags);
          }
        });

        // Eliminate duplicate tags
        allTags = _.uniq(allTags);
        allTags.forEach((tag, index) => {
          createPage({
            path: `/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            }
          });
        });

      })
    )
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
