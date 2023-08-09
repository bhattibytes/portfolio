import portfolio from "../public/portfolio.js";
import Carousel from "react-elastic-carousel";
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
          <Carousel>
            {portfolio.projects.charla.map((item) => (
              <center key={item.id} className={styles.portCar}>
                <div className={styles.portCarInner}>
                  <h2>{item.name}</h2>
                  <img src={item.imgURL} className={styles.portIMG} />
                  <p className={styles.para}>{item.summary}</p>
                </div>
              </center>
            ))}
          </Carousel>
        </div>
      </div>
    </center>
  );
}
