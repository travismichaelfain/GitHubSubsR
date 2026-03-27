import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/space-content">Space Content</NavLink>
    </nav>
  );
}

export default NavBar;
