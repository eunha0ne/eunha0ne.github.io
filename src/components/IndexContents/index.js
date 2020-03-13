import React from 'react';
import { Link } from 'gatsby';
import Tags from 'src/components/Tags';

import './IndexContents.scss';

export const IndexContents = ({ data }) => {
  return (
    <section className="index-contents">
      {data.allMarkdownRemark.edges.map(({ node }, idx) => {
        return (
          <article key={`node-${idx}`} className="index-post">
            <div className="index-post__head">{/* 이미지 들어갈 자리 */}</div>
            <div className="index-post__body">
              <Link to={node.fields.slug}>
                <h3>
                  <span>{node.frontmatter.title}</span>
                </h3>
                <span>{node.frontmatter.date}</span>
                <hr />
                <p>{node.excerpt}</p>
              </Link>
              <Tags props={node} />
            </div>
          </article>
        );
      })}
    </section>
  );
};