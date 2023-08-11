import items from "../public/Items.js";
import Carousel from "react-elastic-carousel";
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
          <Carousel>
            {items.items.elastic.map((item) => (
              <center key={item.id}><div
                className={styles.card}
              >
                <img src={item.imageUrl} className={styles.testImg}/>
                <p>"{item.testimonial}"</p>
                <h2>{item.name}</h2>
                <h3>{item.title}</h3>
              </div></center>
            ))}
          </Carousel>
        </div>
      </div>
    </center>
  );
}
