import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Zelda = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <center>
        <h1 className={styles.games}>Legend of Zelda: A Link to the Past</h1>
        <iframe className={styles.iframe} src="https://www.retrogames.cc/embed/44785-the-legend-of-zelda-a-link-to-the-past-title-skip-and-full-hearts.html" width="1000" height="750" frameBorder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
      </center>
      <Footer />
    </div>
  )
};
export default Zelda;
