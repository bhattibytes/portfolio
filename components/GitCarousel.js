import github from "../public/github.js";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Home.module.css";

export default function ElasticCarouselGitHub() {
  return (
    <center className={styles.portfolio}>
      <div>
        <hr className={styles.seperator2} />
        <div className={styles.gitCarOuter}>
          <Carousel>
            {github.commits.map((item) => (
              <center key={item.id} className={styles.portCar}>
                <div className={styles.portCarInner}>
                  <h2>{item.name}</h2>
                  <img src={item.imgURL} className={styles.gitCarImg} />
                </div>
              </center>
            ))}
          </Carousel>
        </div>
      </div>
    </center>
  );
}
