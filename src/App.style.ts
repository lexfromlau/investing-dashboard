import styled from "@emotion/styled";

export const FlexWrap = styled.div`
  display: flex;
  wrap: no-wrap;

  > div {
    > div {
      height: 400px;
    }
  }
`;

export const DailyChart = styled.div`
  > div {
    height: 400px;
  }
`;
