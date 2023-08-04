import { items } from "../public/Items.json";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Home.module.css";

export default function ElasticCarousel() {
  const { elastic } = items;
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
            {elastic.map((item) => (
              <center><div
                key={item.id}
                className={styles.card}
              >
                <img src={item.imageUrl} style={{ borderRadius: "100px", height: "150px" }} key={item.id}/>
                <p key={item.id}>"{item.testimonial}"</p>
                <h2 key={item.id}>{item.name}</h2>
                <h3 key={item.id}>{item.title}</h3>
              </div></center>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </center>
  );
}
