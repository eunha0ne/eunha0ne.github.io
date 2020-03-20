const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const template = {
  post: path.resolve('src/templates/post.js'),
  tag: path.resolve('src/templates/tag.js')
};

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter
}) => {
  const results = await getAllPagesData(graphql);
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { data } = results;
  const allPosts = data.allMarkdownRemark.edges;
  let allTags = [];

  allPosts.forEach(({ node }, index) => {
    allTags = allTags.concat(node.frontmatter.tags);
    createPage({
      path: node.fields.slug,
      component: template.post,
      context: {
        slug: node.fields.slug,
        prev: index === 0 ? null : allPosts[index - 1],
        next: index === allPosts.length - 1 ? null : allPosts[index + 1]
      }
    });
  });

  allTags = _.uniq(allTags);
  allTags.forEach(tag => {
    createPage({
      path: `/${tag}/`,
      component: template.tag,
      context: {
        tag
      }
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

const getAllPagesData = graphql => {
  return graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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
};
