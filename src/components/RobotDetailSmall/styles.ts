import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: ${theme.spacing.md};
      text-align: left;
    `
  ),
  Image: styled.img(
    ({ theme }) => css`
      width: 40px;
      height: 40px;
      margin-right: ${theme.spacing.md};
      border: 1px solid ${theme.palette.black};
    `
  ),
};

export default SC;
