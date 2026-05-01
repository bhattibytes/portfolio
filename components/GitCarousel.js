import github from "../public/github.js";
import SlideCarousel, { SwiperSlide } from "./SlideCarousel";
import styles from "../styles/Home.module.css";

export default function ElasticCarouselGitHub() {
  return (
    <center className={styles.portfolio}>
      <div>
        <hr className={styles.seperator2} />
        <div className={styles.gitCarOuter}>
          <SlideCarousel>
            {github.commits.map((item) => (
              <SwiperSlide key={item.id}>
                <center className={styles.portCar}>
                  <div className={styles.portCarInner}>
                    <h2>{item.name}</h2>
                    <img src={item.imgURL} alt="" className={styles.gitCarImg} />
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
