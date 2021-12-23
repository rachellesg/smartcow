import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h1>404 Error!</h1>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Error;
