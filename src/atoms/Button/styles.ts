import styled, { css } from "styled-components";

const SC = {
  Container: styled.button(
    ({ theme }) => css`
      cursor: pointer;
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      border: 1px solid ${theme.palette.black};
    `
  ),
};

export default SC;
