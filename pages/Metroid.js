import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Metroid = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1 className={styles.games}>Super Metroid</h1>
      <center><iframe className={styles.iframe} src="https://www.retrogames.cc/embed/20006-super-metroid-japan-usa-en-ja-hack-by-saturn-v1-5-super-metroid-impossible.html" width="1000" height="750" frameborder="yes" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe></center>
      <Footer />
    </div>
  )
};
export default Metroid;
