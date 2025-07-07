import { useState, useEffect } from "react";
import styles from "./Product.module.css";
import firstImg from "../../assets/first.jpg";
import secondImg from "../../assets/second.jpg";
import thirdImg from "../../assets/third.jpg";

const images = [
  { src: firstImg, alt: "Піжама спереду" },
  { src: secondImg, alt: "Піжама ззаду" },
  { src: thirdImg, alt: "Піжама збоку" },
];

const fullText = `🦈 Комбінезон-плед у формі акули — це поєднання веселого дизайну, комфорту та функціональності. Завдяки м’якому флісовому матеріалу та вільному крою він чудово підходить для відпочинку вдома, перегляду фільмів, вечірок з друзями або як незвичний образ для тематичних подій. Універсальний фасон пасує як жінкам, так і чоловікам, а також дітям — для всієї родини є кілька розмірів на вибір. Капюшон доповнює образ акули, додаючи ще більше оригінальності. Комбінезон можна використовувати як плед або спальник під час поїздок чи вдома. Це не просто зручний одяг — це крутий подарунок, який викликає усмішку. І найприємніше — одна з найнижчих цін серед подібних товарів!`;

export default function Product() {
  const [selected, setSelected] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const price = 1299;
  const oldPrice = 1699;

  return (
    <section className={styles.product}>
      <div className={styles.tgthr}>
        <div className={styles.mainImageContainer}>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.gallery}>
          {images.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className={`${styles.thumbnail} ${
                selected === i ? styles.activeThumbnail : ""
              }`}
              onClick={() => setSelected(i)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      <div className={styles.charact}>
        <h2 className={styles.productTitle}>Піжама-Акула</h2>
        <div className={styles.availCont}>
          <p className={styles.avail}>В наявності</p>
          <span className={styles.reviewCount}>⋆</span>
          <span className={styles.reviewCount}>500+ купило</span>
          <span className={styles.reviewCount}>⋆</span>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={styles.star}>
                ⭐
              </span>
            ))}
          </div>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.price}>{price} грн</span>
          <span className={styles.oldPrice}>{oldPrice} грн</span>
        </div>

        <p className={styles.productDescription}>
          🦈 Комбінезон-плед у формі акули — це поєднання веселого дизайну,
          комфорту та функціональності. Завдяки м’якому флісовому матеріалу та
          вільному крою він чудово підходить для відпочинку вдома, перегляду
          фільмів, вечірок з друзями або як незвичний образ для тематичних
          подій.
          <button
            className={styles.readMoreBtn}
            onClick={() => setModalOpen(true)}
            type="button"
          >
            Читати більше
          </button>
        </p>
      </div>

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <p>{fullText}</p>
          </div>
        </div>
      )}
    </section>
  );
}
