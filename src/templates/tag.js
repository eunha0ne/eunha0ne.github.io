import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'src/components/layout';
import { IndexContents } from '~/components/IndexContents';
import AllTags from 'src/components/AllTags';
import './tag.scss';

const Tags = props => {
  const { data, pageContext } = props;
  return (
    <Layout>
      <main className="index-view tags-view">
        <AllTags />
        <p className="tag-name">{pageContext.tag}</p>
        <IndexContents data={data} />
      </main>
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "YYYY년 MM월 DD일")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 90, truncate: true)
        }
      }
    }
  }
`;
