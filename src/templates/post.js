import React from 'react';
import { graphql, Link } from 'gatsby';

import { Layout } from '~/components/Layout';
import { NameCard } from '~/components/NameCard';
import TableContents from '~/components/Main/TableContents';
import MetaTags from '~/components/MetaTags';
import HeaderBack from '~/components/HeaderBack';
import Comments from '~/components/Comments';

import * as S from '~/ui/main';
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

export default function Post({ data, pageContext }) {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;

  return (
    <Layout>
      <MetaTags
        title={post.frontmatter.title}
        description={data.markdownRemark.excerpt}
      />
      <main css={S.main}>
        <article className="post">
          <header className="post__header">
            <h1 css={S.main__head}>{post.frontmatter.title}</h1>
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
          </section>
        </article>
      </main>
    </Layout>
  );
}

const PostTags = props => {
  const { tags } = props;

  return (
    <div className="inner-tags">
      {tags.map((tag, i) => (
        <a href={`/${tag}`} key={`post-tags-${i}`}>
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
