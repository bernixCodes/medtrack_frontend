import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";

  if (error.status === 404) {
    title = "Page not found!";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h1>{title}</h1>
      <Link style={{ color: "#346bae", marginTop: "1rem" }} to={"/"}>
        {" "}
        Go to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
