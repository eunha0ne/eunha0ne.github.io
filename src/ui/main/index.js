import { css } from '@emotion/core';

export const main = css`
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

export const main__head = css`
  font-size: 0;
  visibility: hidden;
`;
