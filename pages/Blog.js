import styles from '../styles/Home.module.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Wordpress = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <center>
        <a href='https://bhattibytes.wordpress.com/'><h1 className={styles.games}>BhattiBytes Wordpress Blog</h1></a></center>
      <center className={styles.BlogiFrame}>
        <iframe className={styles} src="https://bhattibytes.wordpress.com/" width="1200" height="750" frameBorder="yes" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe>
      </center>
    </div>
  )
};
export default Wordpress;