import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '~/utils/performance';

import { Layout } from '~/components/layout';
import { SEO } from '~/components/seo';
import { NameCard } from '~/components/NameCard';
import { IndexContents } from '~/components/IndexContents';

import * as S from '~/ui/main';

export default function Index() {
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
      <main css={S.main}>
        <h1 css={S.main__head}>은하의 개발 블로그입니다.</h1>
        <NameCard />
        <IndexContents data={data} />
      </main>
    </Layout>
  );
}
