import { Outlet } from "react-router-dom";
import * as Styled from "./PageLayout.style";

export const PageLayout = () => (
  <Styled.Body>
    <Styled.Header>
      <img
        src="/src/assets/tradingview-logo-short.svg"
        alt="tradingview-logo-short"
        height="89px"
      />
    </Styled.Header>
    <Outlet />
  </Styled.Body>
);
