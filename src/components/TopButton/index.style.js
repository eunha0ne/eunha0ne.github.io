import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  user-select: none;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: inline-block;
  width: 45px;
  height: 45px;
  opacity: 1;
  text-align: center;
  font-size: 0;
  border-radius: 10px;
  background: var(--border-main);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: opacity 0.6s ease, background-color 1s ease;
`;
