import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error ? error.statusText : 'Not Found'}</i>
      </p>
      <Link to="/">Go Back!</Link>
    </div>
  );
};

export default ErrorPage;
