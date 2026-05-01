import SlideCarousel, { SwiperSlide } from "./SlideCarousel";
import styles from "../styles/Home.module.css";
import videogames from "../public/videogames.js";

export default function ElasticCarouselGames() {
  return (
    <center>
      <div className={styles.container}>
        <div>
          <h1>Playable Retro Games</h1>
          <h3>Enjoy handpicked classic Playstation and Nintendo games...</h3>
        </div>
        <hr className={styles.seperator} />
        <div className={styles.contWrapper}>
          <SlideCarousel singleSlide>
            {videogames.games.map((game) => (
              <SwiperSlide key={game.id}>
                <center>
                  <div className={styles.card}>
                    <h1 className={styles.gameTitles}>{game.name}</h1>
                    <br />
                    <center>
                      <a href={game.href}>
                        <img
                          src={game.src}
                          alt={game.name}
                          width={550}
                          height={367}
                          className={styles.gameIMG}
                        />
                      </a>
                    </center>
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
