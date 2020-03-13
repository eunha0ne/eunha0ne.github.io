import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './NameCard.scss';

export const NameCard = props => {
  const { name, about, interest } = props;
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "selfie/summer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="namecard">
      <div className="namecard__left">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <div className="namecard__right">
        <p className="name">{name}</p>
        <p className="about">{about}</p>
        <ul className="interest">
          {interest.map((str, idx) => (
            <li key={`interest-${idx}`}>{str}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

NameCard.defaultProps = {
  name: 'Kim Gyu-sik (eunha0ne)',
  about:
    '자바스크립트 언어를 사용하는 개발자입니다. 아기자기한 UI 기능을 구현하는 것을 좋아하며 노드 환경에서 동작하는 컴포넌트 빌딩 라이브러리에 관심이 있습니다.',
  interest: ['미드', '요리', '피아노', 'PS4']
};

NameCard.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  interest: PropTypes.array.isRequired
};
