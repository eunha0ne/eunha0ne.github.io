/**
 * createPages
 */

const path = require(`path`);
const _ = require("lodash");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query {
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
  `);


  // [1] Create post pages
  const postTemplate = path.resolve("src/templates/post.js");
  const tagTemplate = path.resolve("src/templates/tag-template.js");
  const posts = results.data.allMarkdownRemark.edges; 

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      // Data passed to context is available in page queries as GraphQL variables.
      context: {
        slug: node.fields.slug,
        prev: index === 0 ? null : posts[index - 1],
        next: index === posts.length - 1 ? null : posts[index + 1],
      }
    });
  });

  
  // [2] Create tag pages
  let allTags = [];

  // Iterate through each post, putting all found tags into `allTags array`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      allTags = allTags.concat(edge.node.frontmatter.tags);
    }
  });

  // Eliminate duplicate tags
  allTags = _.uniq(allTags);
  allTags.forEach(tag => {
    createPage({
      path: `/${tag}/`,
      component: tagTemplate,
      context: {
        tag,
      }
    });
  });
};


/**
 * onCreateNode
 */

const { createFilePath } = require(`gatsby-source-filesystem`);

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
