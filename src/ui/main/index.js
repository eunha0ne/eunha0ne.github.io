import { css } from '@emotion/core';
import styled from '@emotion/styled';

const mainCSS = `
margin: 0 auto;
padding: 5rem 1.25rem 0;
display: flex;
flex-direction: column;
max-width: 740px;
width: 100%;
`;

export const main = css`
  ${mainCSS}

  @media screen and (max-width: 640px) {
    /* ... */
  }
`;

export const main__head = css`
  font-size: 0;
  visibility: hidden;
`;

export const Main = styled.main`
  ${mainCSS}
  ${props => props.paddingTop && `padding-top: ${props.paddingTop}`}
`;
