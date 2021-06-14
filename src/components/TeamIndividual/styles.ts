import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div<{ isWinner?: boolean }>(
    ({ theme, isWinner }) => css`
      width: 100%;
      height: 400px;
      text-align: center;
      padding: ${theme.spacing.lg};
      transition: background-color 0.3s;

      ${isWinner &&
      css`
        background-color: ${theme.palette.light};
      `}
    `
  ),
};

export default SC;
