import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Metroid = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <center>
        <h1 className={styles.games}>Super Metroid</h1>
        <iframe className={styles.iframe} src="https://www.retrogames.cc/embed/16893-super-metroid-japan-usa-en-ja.html" width="1000" height="750" frameBorder="yes" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
      </center>
      <Footer />
    </div>
  )
};
export default Metroid;
