import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Mario = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1 className={styles.games}>Super Mario World</h1>
      <center><iframe className={styles.iframe} src="https://www.retrogames.cc/embed/43944-super-mario-world-4-player.html" width="1000" height="750" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe></center>
      <Footer />
    </div>
  )
};
export default Mario;
