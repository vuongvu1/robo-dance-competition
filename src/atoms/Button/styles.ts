import styled, { css } from "styled-components";

const SC = {
  Container: styled.button(
    ({ theme }) => css`
      cursor: pointer;
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      border: none;
      background-color: ${theme.palette.light};
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.6;
      }
    `
  ),
};

export default SC;
