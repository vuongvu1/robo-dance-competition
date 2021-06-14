import styled, { css } from "styled-components";

const SC = {
  Container: styled.div<{ type?: "h1" | "h2" | "h3" | "body"; color?: string }>(
    ({ theme, type, color }) => css`
      color: ${color || theme.palette.black};
      font-weight: ${theme.fontWeight.md};
      font-size: ${theme.fontSize.sm};

      ${type === "h1" &&
      css`
        font-weight: ${theme.fontWeight.lg};
        font-size: ${theme.fontSize.xlg};
      `}

      ${type === "h2" &&
      css`
        font-weight: ${theme.fontWeight.lg};
        font-size: ${theme.fontSize.lg};
      `}

      ${type === "h3" &&
      css`
        font-weight: ${theme.fontWeight.lg};
        font-size: ${theme.fontSize.md};
      `}

      ${type === "body" &&
      css`
        margin: 0;
        font-weight: ${theme.fontWeight.md};
        font-size: ${theme.fontSize.sm};
      `}
    `
  ),
};

export default SC;
