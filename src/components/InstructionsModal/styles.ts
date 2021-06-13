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
};

export default SC;
