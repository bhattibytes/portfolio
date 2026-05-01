import items from "../public/Items.js";
import SlideCarousel, { SwiperSlide } from "./SlideCarousel";
import styles from "../styles/Home.module.css";

export default function ElasticCarouselTestimonials() {
  return (
    <center>
      <div className={styles.container}>
        <div>
          <h1>Testimonials</h1>
          <h3>See what past collegues had to say about me...</h3>
        </div>
        <hr className={styles.seperator} />
        <div className={styles.contWrapper}>
          <SlideCarousel>
            {items.items.elastic.map((item) => (
              <SwiperSlide key={item.id}>
                <center>
                  <div className={styles.card}>
                    <img
                      src={item.imageUrl}
                      alt=""
                      className={styles.testImg}
                    />
                    <p>&quot;{item.testimonial}&quot;</p>
                    <h2>{item.name}</h2>
                    <h3>{item.title}</h3>
                  </div>
                </center>
              </SwiperSlide>
            ))}
          </SlideCarousel>
        </div>
      </div>
    </center>
  );
}
