import React from 'react';
import { graphql } from 'gatsby'
import Layout from 'src/components/layout';
import IndexContents from 'src/components/IndexContents';
import AllTags from 'src/components/AllTags';
import './tag-template.scss'

// import { connect } from 'react-redux';
// import { toggleTheme } from 'src/state/app';

const Tags = (props) => {
  const { data, pageContext }= props;
  return (
    <Layout>
      <main className="index-view tags-view">
        <AllTags/>
        <p className="tag-name">{pageContext.tag}</p>
        <IndexContents data={data} />
      </main>
    </Layout>
  );
}

// export default connect(state => {
//   return ({ isNightMode: state.app.isNightMode });
// }, null)(Tags);
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
          excerpt
        }
      }
    }
  }
`
