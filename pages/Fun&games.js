import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import GamesCarousel from '../components/GamesCarousel';

const Games = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <section className={styles.funGamesSection} >
      <center>
        <h1 className={styles.games}>Applications Made For Fun!</h1>
      </center>
      <a href="https://star-trek.vercel.app/" target="_blank">
        <h2 className={styles.titles}>Star Trek Tribute App</h2>
      </a>
      <a href="https://thegameofwar.vercel.app/" target="_blank">
        <h2 className={styles.titles}>The Game of War</h2>
      </a>
      <a href="https://space-x-launch-app-iota.vercel.app/" target="_blank">
        <h2 className={styles.titles}>SpaceX Launch App</h2>
      </a>
      </section>

      <GamesCarousel />
      <Footer />
    </div>
  )
};

export default Games;
