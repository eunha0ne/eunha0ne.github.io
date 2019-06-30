import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NameCard from 'src/components/NameCard';
import IndexContents from 'src/components/IndexContents';
import './index.scss';


const IndexPage = ({ data }) => {
  return (
    <Layout>
      {<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />}
      <main className="index-view">
        <h1>은하의 개발 블로그입니다.</h1>
        <NameCard/>
        <IndexContents data={data} />
      </main>
    </Layout>
  );
};


export default IndexPage;
// export default connect(state => ({
//   isNightMode: state.app.isNightMode
// }), null)(IndexPage);

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          tags
          date(formatString: "YYYY년 MM월 DD일")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 120)
      }
    }
  }
}
`
