import styled, { css } from "styled-components";

const SC = {
  Container: styled.div<{ type?: "h1" | "h2" | "body"; color?: string }>(
    ({ theme, type, color }) => css`
      color: ${color || theme.palette.black};
      font-weight: normal;
      font-size: ${theme.fontSize.md};

      ${type === "h1" &&
      css`
        font-weight: bold;
        font-size: ${theme.fontSize.lg};
      `}

      ${type === "h2" &&
      css`
        font-weight: bold;
        font-size: ${theme.fontSize.md};
      `}

      ${type === "body" &&
      css`
        margin: 0;
        font-weight: normal;
        font-size: ${theme.fontSize.sm};
      `}
    `
  ),
};

export default SC;
