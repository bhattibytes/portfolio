import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const FinalFantasyDiscOne = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <center>
        <h1 className={styles.games}>Final Fantasy VII: Disc One</h1>
        <iframe className={styles.iframe} src="https://www.retrogames.cc/embed/43658-final-fantasy-vii-usa-disc-1.html" width="1000" height="750" frameBorder="no" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
      </center>
      <Footer />
    </div>
  )
};
export default FinalFantasyDiscOne;
