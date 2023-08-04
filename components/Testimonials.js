import items from "../public/Items.js";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Home.module.css";

export default function ElasticCarousel() {
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
                <img src={item.imageUrl} style={{ borderRadius: "100px", height: "150px" }}/>
                <p>"{item.testimonial}"</p>
                <h2>{item.name}</h2>
                <h3>{item.title}</h3>
              </div></center>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </center>
  );
}
