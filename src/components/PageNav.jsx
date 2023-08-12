import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";
import { useAuth } from "../contexts/FakeAuthContext";

function PageNav() {
  const { isAuthenicated, logout } = useAuth();

  function hanldeLogout() {
    logout();
  }
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink
            to={!isAuthenicated ? "/login" : "/"}
            className={styles.ctaLink}
            onClick={isAuthenicated ? hanldeLogout : null}
          >
            {!isAuthenicated ? "Login" : "Logout"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
