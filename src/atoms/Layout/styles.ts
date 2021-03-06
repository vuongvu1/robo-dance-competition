import styled, { css } from "styled-components";

const SC = {
  Container: styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
  `,
  Header: styled.header(
    ({ theme }) => css`
      width: 100%;
      height: 70px;
      padding: ${theme.spacing.md};
      display: flex;
      justify-content: center;
      background-color: ${theme.palette.neutral};

      > * {
        margin: 0 ${theme.spacing.md};
      }
    `
  ),
  BodyContainer: styled.div(
    ({ theme }) => css`
      flex: 1;
      width: 100%;
      background-color: ${theme.palette.neutral};
      display: flex;
      justify-content: center;
    `
  ),
  Body: styled.div(
    ({ theme }) => css`
      width: 100%;
      max-width: 930px;
      display: flex;
      margin-bottom: ${theme.spacing.lg};
    `
  ),
};

export default SC;
