import { useRouteError } from "react-router-dom";
import * as Styled from "./ErrorPage.style";

export default function ErrorPage() {
  const error = useRouteError();
  const err = error as Error;

  return (
    <Styled.ErrorContainer id="error-page">
      <h2>Oops!</h2>
      <p>{`Sorry, an unexpected error has occurred. (${
        err.name || err.message
      })`}</p>
    </Styled.ErrorContainer>
  );
}
