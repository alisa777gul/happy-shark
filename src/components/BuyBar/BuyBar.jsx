import React from "react";
import styles from "./BuyBar.module.css";

const BuyBar = () => {
  return (
    <div className={styles.buyBar}>
      <div>
        <span className={styles.price}> 1299 грн</span>
        <span className={styles.oldPrice}>1799 грн</span>
      </div>
      <a href="#contact" className={styles.buyButton}>
        Купити
      </a>
    </div>
  );
};

export default BuyBar;
