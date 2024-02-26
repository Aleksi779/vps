import GsapMagnetic from "../GsapMagnetic";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>Logo</p>
      <ul className={styles.ul}>
        <GsapMagnetic>
          <li className={styles.li}>Home</li>
        </GsapMagnetic>
        <GsapMagnetic>
          <li className={styles.li}>About</li>
        </GsapMagnetic>
        <GsapMagnetic>
          <li className={styles.li}>Blog</li>
        </GsapMagnetic>
      </ul>
    </nav>
  );
};

export default NavBar;
