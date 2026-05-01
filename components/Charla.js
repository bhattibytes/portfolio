import portfolio from "../public/portfolio.js";
import SlideCarousel, { SwiperSlide } from "./SlideCarousel";
import styles from "../styles/Home.module.css";

export default function ElasticCarouselCharla() {
  return (
    <center className={styles.portfolio}>
      <div>
        <div>
          <h3> **A Side Project that became a Tech Company**</h3>
        </div>
        <hr className={styles.seperator2} />
        <div className={styles.portCarOuter}>
          <SlideCarousel>
            {portfolio.projects.charla.map((item) => (
              <SwiperSlide key={item.id}>
                <center className={styles.portCar}>
                  <div className={styles.portCarInner}>
                    <h2>{item.name}</h2>
                    <img src={item.imgURL} alt="" className={styles.portIMG} />
                    <p className={styles.para}>{item.summary}</p>
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
