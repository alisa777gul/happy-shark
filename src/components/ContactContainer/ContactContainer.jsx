import { useState } from "react";
import Contact from "../Contact/Contact";

export default function ContactContainer() {
  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("");
    setFormLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mjkrqvaz", {
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
    <Contact
      formLoading={formLoading}
      formStatus={formStatus}
      handleSubmit={handleSubmit}
    />
  );
}
