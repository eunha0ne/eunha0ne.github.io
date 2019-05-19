import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import TopButton from "../components/main/TopButton";
import TableContents from "../components/main/TableContents"

import MetaTags from 'src/components/MetaTags';
import HeaderBack from "src/components/HeaderBack"
import NameCard from "src/components/NameCard"

import "./post.scss";
import "./themeModify.scss";
import "prismjs/themes/prism-tomorrow.css";

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
  const { title, image, tags } = data.markdownRemark.frontmatter;

  // thumbnail={thumbnail && url + thumbnail}
  // url={url}
  // pathname={props.location.pathname}
  return (
    <Layout>
      <MetaTags
        title={title}
        description={data.markdownRemark.excerpt}
      />
      <main>
        <article className="post">
          <header className="post__header">
            <h2>{post.frontmatter.title}</h2>
            <span>{post.frontmatter.date}</span>
            <HeaderBack />
          </header>

          <div className="post__contents">
            <TableContents headings={post.headings} />
            {tags && <PostTags tags={tags} />}
            <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <footer className="post__footer">
            <PostNavi prev={prev} next={next} />
            <NameCard/>
            <TopButton/>
          </footer>
        </article>
      </main>
    </Layout>
  );
};

// <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />

const PostTags = (props) => {
  const { tags } = props;
  return (
    <div className="inner-tags" >
      {tags.map((tag, i) => (
        <a href={`/${tag}`} key={i} >
          {tag}
        </a>
      ))}
    </div>
  )
};

const PostNavi = (props) => {
  const { prev, next } = props;
  return (
    <div className="post__navi navi">
    {prev &&
      <Link to={prev.node.fields.slug} className="navi__prev">
        <span>&larr;</span>
        <p>{prev.node.headings.length > 0 && prev.node.headings[0].value}</p>
      </Link>
    }
    {next &&
      <Link to={next.node.fields.slug} className="navi__next">
        <p>{next.node.headings.length > 0 && next.node.headings[0].value}</p>
        <span>&rarr;</span>
      </Link>
    }
    </div>
  );
};
