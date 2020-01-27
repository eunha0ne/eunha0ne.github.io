import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import TopButton from '../components/main/TopButton';
import TableContents from '../components/main/TableContents';
import MetaTags from 'src/components/MetaTags';
import HeaderBack from 'src/components/HeaderBack';
import NameCard from 'src/components/NameCard';
import Comments from 'src/components/comments';
import './post.scss';
import 'prismjs/themes/prism-tomorrow.css';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM, YYYY")
      }
      headings {
        value
        depth
      }
    }
  }
`;

export default ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;

  // 개발 환경에서 frontmatter에 간혈적으로 접근하지 못하는 이슈가 있음
  // 분기 처리는 해결 방법이 아님, 랜더 함수에는 리턴한 결과가 필요함
  // console.log(post) // null
  
  return (
    <Layout>
      <MetaTags
        title={post.frontmatter.title}
        description={data.markdownRemark.excerpt}
      />
      <main>
        <article className="post">
          <header className="post__header">
            <h1>{post.frontmatter.title}</h1>
            <span>{post.frontmatter.date}</span>
            <HeaderBack />
          </header>

          <section className="post__contents">
            <TableContents headings={post.headings} />
            {post.frontmatter.tags && <PostTags tags={post.frontmatter.tags} />}
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </section>

          <section className="post__footer">
            <PostNavi prev={prev} next={next} />
            <NameCard />
            <Comments />
            <TopButton />
          </section>
        </article>
      </main>
    </Layout>
  );
};

const PostTags = props => {
  const { tags } = props;
  return (
    <div className="inner-tags">
      {tags.map((tag, i) => (
        <a href={`/${tag}`} key={i}>
          {tag}
        </a>
      ))}
    </div>
  );
};

const PostNavi = props => {
  const { prev, next } = props;
  return (
    <div className="navi">
      {prev && (
        <Link to={prev.node.fields.slug} className="navi__prev">
          <span>&larr;</span>
          <p>{prev.node.frontmatter.title}</p>
        </Link>
      )}
      {next && (
        <Link to={next.node.fields.slug} className="navi__next">
          <p>{next.node.frontmatter.title}</p>
          <span>&rarr;</span>
        </Link>
      )}
    </div>
  );
};
