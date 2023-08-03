import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Ghouls = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <center>
        <h1 className={styles.games}>Super Ghouls'n Ghosts</h1>
        <iframe className={styles.iframe} src="https://www.retrogames.cc/embed/20262-super-ghouls-n-ghosts-europe.html" width="1000" height="750" frameBorder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
      </center>
      <Footer />
    </div>
  )
};
export default Ghouls;
