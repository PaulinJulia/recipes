import { useRouteError, ErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main id="error-page">
      <h1>Error</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as ErrorResponse).statusText ||
            (error as ErrorResponse).message}
        </i>
      </p>
      <Link to={"/"}>Return</Link>
    </main>
  );
}
