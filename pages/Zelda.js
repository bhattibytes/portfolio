import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Zelda = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1 className={styles.games}>Legend of Zelda: A Link to the Past</h1>
      <center><iframe className={styles.iframe} src="https://www.retrogames.cc/embed/44785-the-legend-of-zelda-a-link-to-the-past-title-skip-and-full-hearts.html" width="1000" height="750" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe></center>
      <Footer />
    </div>
  )
};
export default Zelda;
