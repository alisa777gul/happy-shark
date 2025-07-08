import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Reviews.module.css";
import { Autoplay } from "swiper/modules";

const reviews = [
  {
    text: "Моя дитина буквально не знімає цей плед цілими днями! Він дуже теплий, зручний і я повністю задоволена якістю покупки.",
    author: "– Наталя, Запоріжжя",
  },
  {
    text: "Неочікувано комфортний плед, виглядає чудово навіть на фото. Доставка була швидкою, що приємно здивувало.",
    author: "– Ігор, Черкаси",
  },
  {
    text: "Піжама-плед стала моїм улюбленим одягом для холодних вечорів. Дуже тепла, м’яка і зручна — рекомендую всім!",
    author: "– Олена, Мукачево",
  },
  {
    text: "Замовляли цей плед на подарунок — виглядає стильно, пошитий якісно, всі залишилися задоволені.",
    author: "– Андрій, Київ",
  },
  {
    text: "Носимо з чоловіком разом — супер комфортно і виглядає досить весело! Дуже раджу спробувати.",
    author: "– Марина, Харків",
  },
  {
    text: "Матеріал дуже м’який і приємний до тіла. Не хочеться знімати навіть у теплу погоду, дуже комфортно.",
    author: "– Таня, Івано-Франківськ",
  },
  {
    text: "Цей плед чудово гріє взимку. Моя дочка дуже щаслива, що має такий теплий подарунок.",
    author: "– Вікторія, Тернопіль",
  },
  {
    text: "Нарешті щось нестандартне та круте! Весело, затишно і комфортно — ідеально для дому.",
    author: "– Сергій, Кривий Ріг",
  },
  {
    text: "Все відповідає фото, навіть краще! Дуже дякую за якість і швидку доставку.",
    author: "– Аліна, Одеса",
  },
];

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <h2 className={styles.title}>Відгуки покупців</h2>
      <div className={styles.slider}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <p className={styles.text}>“{review.text}”</p>
              <p className={styles.author}>{review.author} 🦈</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
