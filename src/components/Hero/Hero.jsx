import styles from "./Hero.module.css";
import shark from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Піжама-Акула - твій комфорт вдома</h1>
        <p className={styles.text}>
          М’яка, тепла та неймовірно зручна піжама в формі акули — ідеальний
          вибір для відпочинку вдома чи подарунка близьким.
        </p>
        <a href="#about" className={styles.link}>
          Дізнатися більше
        </a>
      </div>
      <div className={styles.container}>
        <img
          src={shark}
          alt="Shark"
          className={styles.logoImg}
          width={1280}
          height={1024}
        />
      </div>
    </section>
  );
}
