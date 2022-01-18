import { Link as NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  //   const activeClass = [s.link, s.active];
  return (
    <div className={s.firstMenu}>
      <NavLink to="/login" className={s.link}>
        Login
      </NavLink>
      <NavLink to="/registration" className={s.link}>
        Registration
      </NavLink>
    </div>
  );
}
