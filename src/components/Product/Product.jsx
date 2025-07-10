import { useState, useEffect } from "react";
import styles from "./Product.module.css";
import firstImg from "../../assets/first.jpg";
import secondImg from "../../assets/second.jpg";
import thirdImg from "../../assets/third.jpg";
import tg from "../../assets/telegram.svg";
import size from "../../assets/size.svg";

const images = [
  { src: firstImg, alt: "Піжама спереду" },
  { src: secondImg, alt: "Піжама ззаду" },
  { src: thirdImg, alt: "Піжама збоку" },
];

const fullText = `🦈 Комбінезон-плед у формі акули — це поєднання веселого дизайну, комфорту та функціональності. Завдяки м’якому флісовому матеріалу та вільному крою він чудово підходить для відпочинку вдома, перегляду фільмів, вечірок з друзями або як незвичний образ для тематичних подій. Універсальний фасон пасує як жінкам, так і чоловікам, а також дітям — для всієї родини є кілька розмірів на вибір. Капюшон доповнює образ акули, додаючи ще більше оригінальності. Комбінезон можна використовувати як плед або спальник під час поїздок чи вдома. Це не просто зручний одяг — це крутий подарунок, який викликає усмішку. І найприємніше — одна з найнижчих цін серед подібних товарів!`;

export default function Product() {
  const [selected, setSelected] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(""); // "" | "success" | "error"
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      modalOpen || formOpen || sizeModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen, formOpen, sizeModalOpen]);

  const price = 1299;
  const oldPrice = 1799;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("");
    setFormLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xpwrglqr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section className={styles.product} id="catalog">
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
          <span className={styles.reviewCount}>199+ купило</span>
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
          <span className={styles.price}>{price} грн </span>
          <span className={styles.oldPrice}>{oldPrice} грн</span>{" "}
          <span
            className={styles.sizeBtn}
            onClick={() => setSizeModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSizeModalOpen(true);
            }}
            aria-label="Відкрити розмірну сітку"
          >
            <img src={size} alt="Sizing" width={24} height={24} />
          </span>
        </div>
        <p className={styles.productDescription}>
          🦈 Комбінезон-плед у формі акули — це поєднання веселого дизайну,
          комфорту та функціональності. Завдяки м’якому флісовому матеріалу та
          вільному крою він чудово підходить для відпочинку вдома, перегляду
          фільмів, вечірок з друзями або як незвичний образ для тематичних
          подій.
        </p>{" "}
        <button
          className={styles.readMoreBtn}
          onClick={() => setModalOpen(true)}
          type="button"
        >
          Читати більше
        </button>
        <a
          href="https://t.me/shop777online"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegramBtn}
        >
          Замовляй у Telegram{" "}
          <img
            src={tg}
            alt="Telegram"
            className={styles.telegr}
            width={24}
            height={24}
          />
        </a>{" "}
        <p className={styles.abo}>або</p>
        <button
          type="button"
          className={styles.formBtn}
          onClick={() => {
            setFormOpen(true);
            setFormStatus(""); // сбросить статус при открытии формы
          }}
        >
          Залишити заявку
        </button>
      </div>

      {/* Модалка с полным описанием */}
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
              aria-label="Закрити модалку з описом"
            >
              &times;
            </button>
            <p>{fullText}</p>
          </div>
        </div>
      )}

      {/* Модалка с формой заявки */}
      {formOpen && (
        <div className={styles.modalOverlay} onClick={() => setFormOpen(false)}>
          <div
            className={styles.formModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setFormOpen(false)}
              aria-label="Закрити форму заявки"
            >
              &times;
            </button>
            <h3>Залиште заявку</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formField}>
                <label htmlFor="name">Ім’я</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className={styles.formField}>
                <label htmlFor="contact">Номер телефону або Telegram</label>
                <input type="text" name="contact" id="contact" required />
              </div>
              <div className={styles.formField}>
                <label htmlFor="message">Коментар</label>
                <textarea name="message" id="message" rows="3" />
              </div>
              <button
                type="submit"
                className={styles.formBtn}
                disabled={formLoading}
              >
                {formLoading ? "Відправка..." : "Надіслати"}
              </button>
            </form>
            {formStatus === "success" && (
              <p style={{ color: "green", marginTop: "10px" }}>
                Супер! Наш менеджер скоро зв'яжеться з вами.
              </p>
            )}
            {formStatus === "error" && (
              <p style={{ color: "red", marginTop: "10px" }}>
                Сталася помилка. Спробуйте будь ласка пізніше.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Модалка с размерной сеткой */}
      {sizeModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSizeModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setSizeModalOpen(false)}
              aria-label="Закрити модалку розмірної сітки"
            >
              &times;
            </button>
            <h3 className={styles.sizeTitle}>📏 Обери свій розмір:</h3>
            <ul className={styles.sizeList}>
              <li>
                <strong>M</strong> — до 130 см
              </li>
              <li>
                <strong>L</strong> — 130–150 см
              </li>
              <li>
                <strong>XL</strong> — 150–170 см
              </li>
              <li>
                <strong>XXL</strong> — від 170 см
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
