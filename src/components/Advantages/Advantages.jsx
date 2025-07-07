import styles from "./Advantages.module.css";
import washing from "../../assets/washing.svg";
import gift from "../../assets/gift.svg";
import design from "../../assets/design.svg";

export default function Advantages() {
  return (
    <section className={styles.advantages} id="about">
      <div className="container">
        {" "}
        <h2 className={styles.title}>Чому обирають саме нас?</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            {" "}
            <img
              src={design}
              alt="Logo"
              className={styles.logoImg}
              width={40}
              height={40}
            />
            <h3 className={styles.descr}>
              Унікальний дизайн для всіх вікових груп
            </h3>
            <p className={styles.text}>
              Наші пледи-піжами мають яскравий дизайн та високу якість
              матеріалу.
            </p>
          </li>
          <li className={styles.item}>
            {" "}
            <img
              src={washing}
              alt="Logo"
              className={styles.logoImg}
              width={40}
              height={40}
            />
            <h3 className={styles.descr}>Легкість у догляді та використанні</h3>
            <p className={styles.text}>Їх легко прати і вони швидко сохнуть.</p>
          </li>
          <li className={styles.item}>
            {" "}
            <img
              src={gift}
              alt="Logo"
              className={styles.logoImg}
              width={40}
              height={40}
            />
            <h3 className={styles.descr}>
              Ідеальний подарунок для ваших близьких
            </h3>
            <p className={styles.text}>
              Ці пледи-піжами дуже стильні та оригінальні, що приємно здивує
              ваших найрідніших.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
