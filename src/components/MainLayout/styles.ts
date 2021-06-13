import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  TeamsWrapper: styled.section`
    flex: 2;
    display: flex;
  `,
  Team: styled.div(
    ({ theme }) => css`
      flex: 1;
      padding: ${theme.spacing.lg};
      display: grid;
      place-items: center;
    `
  ),
  MiddleText: styled.div`
    display: grid;
    place-items: center;
  `,
  BottomSection: styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  `,
};

export default SC;
