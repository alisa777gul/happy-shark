import styles from "./Hero.module.css";
import shark from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Твоя найтепліша покупка цього року 🦈💙
            </h1>
            <p className={styles.text}>
              М’яка, тепла та неймовірно зручна піжама в формі акули — ідеальний
              вибір для відпочинку вдома чи подарунка близьким.
            </p>
            <a href="#about" className={styles.link}>
              Дізнатися більше
            </a>
          </div>
          <div className={styles.imgContainer}>
            <img
              src={shark}
              alt="Shark"
              className={styles.logoImg}
              width={1280}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
