import { Switch } from "react-router-dom";
import { useGetCurrentUserQuery } from "../src/redux/contacts/api";

import AuthView from "../src/views/AuthView";
import ContactsView from "../src/views/ContactsView";
import PrivateRoute from "../src/routes/PrivateRoute";
import PublicRoute from "../src/routes/PublicRoute";
import UserMenu from "./components/UserMenu";

const App = () => {
  const { isFetching } = useGetCurrentUserQuery();
  return (
    <>
      <UserMenu />
      {isFetching ? (
        ""
      ) : (
        <>
          <Switch>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>

            <PublicRoute path="/login" restricted={true}>
              <AuthView />
              <h2>Login view</h2>
            </PublicRoute>
            <PublicRoute path="/registration" restricted={true}>
              <AuthView />
            </PublicRoute>
          </Switch>
        </>
      )}
    </>
  );
};

export default App;
