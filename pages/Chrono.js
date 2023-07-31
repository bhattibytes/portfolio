import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Chrono = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1 className={styles.games}>Chrono Trigger</h1>
      <center><iframe className={styles.iframe} src="https://www.retrogames.cc/embed/22857-chrono-trigger-usa.html" width="1000" height="750" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe></center>
      <Footer />
    </div>
  )
};
export default Chrono;