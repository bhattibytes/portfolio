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
      <a href="https://ably-hackathon.vercel.app/" target="_blank">
        <h2 className={styles.titles}>Ably - TrackChat App</h2>
      </a>
      <a href="https://star-trek.vercel.app/" target="_blank">
        <h2 className={styles.titles}>Star Trek - Tribute App</h2>
      </a>
      <a href="https://fetch-dog-adoption.vercel.app/" target="_blank">
        <h2 className={styles.titles}>Fetch - Dog Adoption</h2>
      </a>
      <a href="https://thegameofwar.vercel.app/" target="_blank">
        <h2 className={styles.titles}>Game of War - Game App</h2>
      </a>
      </section>

      <GamesCarousel />
      <Footer />
    </div>
  )
};

export default Games;
