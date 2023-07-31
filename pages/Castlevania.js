import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Battle = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1 className={styles.games}>Castlevania: Symphony of the Night</h1>
      <center><iframe className={styles.iframe} src="https://www.retrogames.cc/embed/41504-castlevania-symphony-of-the-night.html" width="1000" height="750" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe></center>
      <Footer />
    </div>
  )
};
export default Battle;