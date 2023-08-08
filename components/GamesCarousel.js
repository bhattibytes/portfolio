import Carousel from "react-elastic-carousel";
import styles from "../styles/Home.module.css";
import videogames from '../public/videogames.js';

export default function ElasticCarouselGames() {
  return (
    <center>
      <div className={styles.container}>
        <div>
          <h1>Payable Retro Games</h1>
          <h3>These are my favorite retro games to enjoy...</h3>
        </div>
        <hr className={styles.seperator} />
        <div className={styles.contWrapper}>
          <Carousel>
            {videogames.games.map((game) => (
              <center key={game.id}><div
                className={styles.card}>
                 <h1 className={styles.titles}>{game.name}</h1>
                 <br/>
                 <center>
                    <a href={game.href}><img src={game.src} alt={game.name} width={550} height={367} /></a>
                 </center>
              </div>
              </center>
            ))}
          </Carousel>
        </div>
      </div>
    </center>
  );
}
