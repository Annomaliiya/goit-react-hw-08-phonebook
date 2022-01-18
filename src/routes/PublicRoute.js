import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/contacts",
  path,
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Redirect to={redirectTo} />
  ) : (
    <Route path={path}> {children} </Route>
  );
}
