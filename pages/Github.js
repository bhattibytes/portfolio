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
        <h4>Tech Stack</h4>
          <TechStack />
        {/* Trophy Case */}
        <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img className={styles.gitImg} src="https://github-profile-trophy.vercel.app/?username=bhattibytes" alt="bhattibytes" /></a> </p>
        {/* GitHub Stats */}
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={recent} alt="bhattibytes" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2023} alt="bhattibytes23" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2022} alt="bhattibytes22" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2021} alt="bhattibytes21" /></p>
        <p>&nbsp;<Image className={styles.gitImg} width={800} height={600} align="center" src={git2020} alt="bhattibytes20" /></p>

        {/* GitHub Streak */}
        <p>
          <img className={styles.gitImg} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=bhattibytes&" alt="bhattibytes"/>
        </p>
        <a href='https://github.com/bhattibytes' target="_blank"><h5>GitHub Profile</h5></a>
        <hr></hr>
      </div>
      <Footer />
    </>
  )

}

export default GitHub;