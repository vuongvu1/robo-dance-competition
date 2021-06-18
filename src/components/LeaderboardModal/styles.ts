import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      text-align: left;

      > ul {
        padding-left: ${theme.spacing.md};
        margin-bottom: 0;
      }
    `
  ),
  Table: styled.table(
    ({ theme }) => css`
      margin-top: ${theme.spacing.sm};
      min-width: 400px;
      th {
        text-align: center;
        padding: ${theme.spacing.sm};
        font-weight: ${theme.fontWeight.lg};
      }

      td {
        border: 1px solid ${theme.palette.light};
        padding: ${theme.spacing.sm};
        width: 50%;
      }
    `
  ),
  Td: styled.td<{ isWinner: boolean }>(
    ({ theme, isWinner }) =>
      isWinner &&
      css`
        font-weight: ${theme.fontWeight.lg};
      `
  ),
};

export default SC;
