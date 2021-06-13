import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      width: 100%;
      text-align: center;
      padding: ${theme.spacing.lg};
      padding-left: 80px;
    `
  ),
};

export default SC;
