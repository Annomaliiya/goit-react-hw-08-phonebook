import {
  useLogOutUserMutation,
  useGetCurrentUserQuery,
} from "../../redux/contacts/api";
import { useSelector } from "react-redux";

import Navigation from "../Navigation";
import {
  getIsLoggedIn,
  selectCurrentUser,
} from "../../redux/contacts/auth/selectors";

import s from "./UserMenu.module.css";

export default function UserMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(selectCurrentUser);
  const [logOut] = useLogOutUserMutation();
  const { isFetching } = useGetCurrentUserQuery();
  return (
    <>
      {isFetching ? (
        ""
      ) : (
        <div className={s.userMenu}>
          <div className={s.logout}>
            {isLoggedIn ? (
              <button className={s.logoutBtn} onClick={logOut}>
                Log out
              </button>
            ) : (
              <Navigation />
            )}
          </div>
          <div className={s.user}>
            {isLoggedIn && user && (
              <>
                <li>{user.name}</li>
                <li>{user.email}</li>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
