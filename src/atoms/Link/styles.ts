import styled, { css } from "styled-components";

const SC = {
  Container: styled.a(
    ({ theme }) => css`
      color: ${theme.palette.success};
      font-weight: ${theme.fontWeight.lg};
      font-size: ${theme.fontSize.md};
      cursor: pointer;

      &:hover {
        color: ${theme.palette.secondary};
      }
    `
  ),
};

export default SC;
