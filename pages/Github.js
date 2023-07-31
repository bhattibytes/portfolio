import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import TechStack from '../components/TechStack';
import Typewriter from 'typewriter-effect';
import git2020 from '../assets/2020.png';
import git2021 from '../assets/2021.png';
import git2022 from '../assets/2022.png';
import git2023 from '../assets/2023.png';
import recent from '../assets/recent.png';
import Image from 'next/image';

const GitHub = () => { 
  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.git}>
        <div className={styles.gitType}> 
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
            cursor: '',
          }}
          onInit={(typewriter) => {
          typewriter.typeString('<h1>Hi 👋,&nbsp; I Am <br></br>Jason Bhatti</h1>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<h1>A&nbsp; Passionate <br></br>Full Stack Developer</h1>')
            .pauseFor(2500)
            .deleteAll()
            .pauseFor(1500)
            .start();
          }} />
        </div>
        <br/>
        <a href='https://github.com/bhattibytes' target="_blank"><h2 className={styles.gitPro}>👉 Link to GitHub Profile 👈</h2></a>  
        <h4>Tech 🚀 Stack</h4>
          <TechStack />
         {/* GitHub Streak */}
         <h4 style={{marginBottom: "0px"}}>GitHub ☄️ Streak</h4>
          <img className={styles.gitImg} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=bhattibytes&" alt="bhattibytes"/>
        {/* Trophy Case */}
        <h4 style={{marginBottom: "0px"}}>GitHub 🏆 Case</h4>
        <a href="https://github.com/ryo-ma/github-profile-trophy"><img className={styles.gitImg} src="https://github-profile-trophy.vercel.app/?username=bhattibytes" alt="bhattibytes" /></a>
        {/* GitHub Commits */}
        <h4>GitHub ⭐ Commits</h4>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={recent} alt="bhattibytes" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2023} alt="bhattibytes23" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2022} alt="bhattibytes22" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2021} alt="bhattibytes21" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2020} alt="bhattibytes20" /></p>
      </div>
      <Footer />
    </>
  )

}

export default GitHub;