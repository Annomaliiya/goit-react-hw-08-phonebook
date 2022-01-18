import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/selectors";

export default function PrivateRoute({ children, redirectTo = "/", path }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? (
    <Route path={path}> {children} </Route>
  ) : (
    <Redirect to={redirectTo} />
  );
}
