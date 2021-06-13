import styled, { css } from "styled-components";

const SC = {
  Container: styled.a(
    ({ theme }) => css`
      color: ${theme.palette.primary};
      font-weight: ${theme.fontWeight.lg};
      font-size: ${theme.fontSize.md};
      cursor: pointer;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.6;
      }
    `
  ),
};

export default SC;
