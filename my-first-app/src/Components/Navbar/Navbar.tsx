import { useContext } from "react";
import { Link } from "react-router-dom";
import Light  from "../../assets/light.svg?react";
import Dark from "../../assets/dark.svg?react";
import { ActiveContext, ThemeContext } from "../../Сontext/Context";

import styles from "./Navbar.module.scss";
const Navbar = () => {
  const context = useContext(ActiveContext);
  const theme = useContext(ThemeContext);
  console.log(theme?.theme);
  return (
    <div
      className={
        !context?.isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
      <div style={{ marginBottom: "5rem" }}></div>
      <button onClick={theme?.toggleTheme}>
        <Light />
        <Dark />
      </button>
    </div>
  );
};
export default Navbar;
