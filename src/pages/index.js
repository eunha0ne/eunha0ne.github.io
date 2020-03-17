import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import '~/utils/performance';

import { Layout } from '~/components/layout/';
import { SEO } from '~/components/seo';
import { NameCard } from '~/components/NameCard';
import { IndexContents } from '~/components/IndexContents';

const main = css`
  margin: 0 auto;
  padding: 0 1rem {
    top: 15rem;
  }
  display: flex;
  flex-direction: column;
  max-width: 740px;
  width: 100%;

  @media screen and (max-width: 640px) {
    margin-top: 15rem;
  }
`;

const main__head = css`
  font-size: 0;
  visibility: hidden;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            excerpt(pruneLength: 90, truncate: true)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <main css={main}>
        <h1 css={main__head}>은하의 개발 블로그입니다.</h1>
        <NameCard />
        <IndexContents data={data} />
      </main>
    </Layout>
  );
};

export default IndexPage;
