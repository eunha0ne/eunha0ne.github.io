import React, { Component } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NameCard from 'src/components/NameCard';
import IndexContents from 'src/components/IndexContents';

import './index.scss';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="maintenance">
        <p>페이지 준비 중입니다.</p>
      </div>
    </Layout>
  );
};


export default IndexPage;
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
        excerpt
      }
    }
  }
}
`
