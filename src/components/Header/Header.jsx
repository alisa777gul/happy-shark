import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
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
      <nav className={styles.navigation}>
        <a href="#about">
          <span className={styles.text}>Про Нас</span>
        </a>
        <a href="#catalog">
          <span className={styles.text}>Товари</span>
        </a>
        <a href="#reviews">
          <span className={styles.text}>Відгуки</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
