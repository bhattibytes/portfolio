import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Image from 'next/image';

const GitHub = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.git}>
        <a href='https://github.com/bhattibytes' target="_blank">
          <Image src="https://pngpress.com/wp-content/uploads/2020/08/uploads_github_github_PNG17.png" alt="github" height="300px" width="1000px" />
        </a>
        <h1>Deployed App Links:</h1>
        <a target="_blank" href="https://app.charla.cc">Charla - Community Intelligence - SaaS Platform</a>
        <br/>
        <a target="_blank" href="https://star-trek.vercel.app/">Star Trek Quote Generator App </a>
        <a target="_blank" href="https://github.com/bhattibytes/star-trek">Star Trek GitHub Repo</a>
        <br/>
        <a target="_blank" href="https://thegameofwar.vercel.app/">War Card Game App </a>
        <a target="_blank" href="https://github.com/bhattibytes/thegameofwar">War Game GitHub Repo</a>
        <br/>
        <a target="_blank" href="http://34.207.113.139:3000/">Color Picker App </a>
        <a target="_blank" href="https://github.com/bhattibytes/Colors">Color Picker GitHub Repo</a>
        <br/>
      </div>
      <Footer />
    </>
  )

}

export default GitHub;