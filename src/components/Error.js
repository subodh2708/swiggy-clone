import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Page not found</h1>
      <h2>
        {err.status}:{err.statusText}
      </h2>
      <h3>{err.data}</h3>
    </div>
  );
}

export default Error;
