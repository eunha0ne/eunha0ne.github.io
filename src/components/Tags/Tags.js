import React from 'react';
import { Link } from 'gatsby';
import './Tags.scss';

const Tags = ({ props }) => {
  const node = props;
  return (
    <div className="tags">
      {node.frontmatter.tags &&
        node.frontmatter.tags.map((tag, idx) => (
          <Link className="tags__item" key={`tag-${idx}`} to={`/${tag}`}>
            {tag}
          </Link>
        ))}
    </div>
  );
};

export default Tags;
