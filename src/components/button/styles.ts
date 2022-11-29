import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './types';

const COLOR = {
  primary: css`
    color: #fff;
    background: #635fc7;

    &:hover {
      background-color: #a8a4ff;
    }
  `,
  secondary: css`
    color: #635fc7;
    background: #efeff9;

    &:hover {
      background-color: #a8a4ff;
      color: #efeff9;
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

const AsLink = css`
  border-radius: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: transparent;
  color: #828fa3;
  font-weight: 400;

  &:hover {
    background-color: #efeff9;
    color: #635fc7;

    svg {
      fill: #635fc7;
    }
  }
`;

const Container = styled.button<ButtonProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  font-size: 14px;
  font-family: 'IBM Plex Mono', monospace;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.asLink && AsLink}
`;

export default Container;
