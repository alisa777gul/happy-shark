import { useState } from "react";
import styles from "./Contact.module.css";
import sharks from "../../assets/twosharks.webp";

export default function Contact() {
  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

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

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
        console.error("Error response:", data);
      }
    } catch (error) {
      setFormStatus("error");
      console.error("Fetch error:", error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.formSection}>
        {" "}
        {formStatus === "success" && (
          <p
            className="green"
            style={{ color: "green", position: "absolute", bottom: "10px" }}
          >
            Супер! Наш менеджер скоро зв'яжеться з вами.
          </p>
        )}
        {formStatus === "error" && (
          <p className="red" style={{ color: "red" }}>
            Сталася помилка. Спробуйте будь ласка пізніше.
          </p>
        )}
        <h2 className={styles.title}>Залиште заявку</h2>{" "}
        <form onSubmit={handleSubmit} className={styles.form}>
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
          </button>{" "}
        </form>
      </div>

      <div className={styles.imageWrapper}>
        <img src={sharks} alt="Two sharks" className={styles.sideImage} />
      </div>
    </section>
  );
}
