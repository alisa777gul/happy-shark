import styles from "./Footer.module.css";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.tgthr}>
        <a className={styles.logo} href="/">
          <img
            src={logo}
            alt="Logo"
            className={styles.logoImg}
            width={40}
            height={40}
          />
        </a>
        <a href="/" className={styles.shark}>
          Happy Shark
        </a>
      </div>
      <div className={styles.info}>
        <p className={styles.email}>happ7sharkmanager@gmail.com</p>
        <p className={styles.rights}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
