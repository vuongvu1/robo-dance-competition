import styled, { css } from "styled-components";

type WrapperProps = {};

const SC = {
  Background: styled.div(
    ({ theme }) => css`
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
    `
  ),
  Wrapper: styled.div<WrapperProps>(
    ({ theme }) => css`
      position: relative;
      max-width: 80vw;
      min-width: 200px;
      padding: ${theme.spacing.md};
      padding-top: 0;
      margin-bottom: 200px;
      background-color: ${theme.palette.white};
    `
  ),
  CloseWrapper: styled.div(
    ({ theme }) => css`
      position: absolute;
      top: ${theme.spacing.sm};
      right: ${theme.spacing.sm};
      cursor: pointer;
    `
  ),
  Title: styled.div(
    ({ theme }) => css`
      margin-right: ${theme.spacing.md};
    `
  ),
};

export default SC;
