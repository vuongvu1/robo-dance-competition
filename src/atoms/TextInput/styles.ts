import styled, { css } from "styled-components";

const SC = {
  Container: styled.input(
    ({ theme }) => css`
      border: 1px solid black;
      padding: ${theme.spacing.sm};
      font-weight: ${theme.fontWeight.md};
      font-size: ${theme.fontSize.sm};
    `
  ),
};

export default SC;
