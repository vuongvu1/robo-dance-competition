import styled, { css } from "styled-components";

const SC = {
  Container: styled.button(
    ({ theme }) => css`
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `
  ),
};

export default SC;
