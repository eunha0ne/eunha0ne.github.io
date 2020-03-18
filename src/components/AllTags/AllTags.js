import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './AllTags.scss';

const AllTags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const { group } = data.allMarkdownRemark;

  return (
    <div className="tags all-tags">
      {group.map((tag, idx) => (
        <Link
          key={`tag-${idx}`}
          to={`/${tag.fieldValue}`}
          className="tags__item"
        >
          {tag.fieldValue} {`(${tag.totalCount})`}
        </Link>
      ))}
    </div>
  );
};

export default AllTags;
