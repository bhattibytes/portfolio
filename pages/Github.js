import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import TechStack from '../components/TechStack';
import Typewriter from 'typewriter-effect';
import GitCarousel from '../components/GitCarousel.js';

const GitHub = () => { 
  return (
    <>
      <ResponsiveAppBar />
        <div className={styles.git}>
          <div className={styles.gitBG}>
            <div className={styles.gitType}> 
              <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: '',
              }}
              onInit={(typewriter) => {
              typewriter.typeString('<h1>Hi, 👋 I Am <br></br>Jason Bhatti</h1>')
                .pauseFor(600)
                .deleteAll()
                .typeString('<h1>A Passionate <br></br>Full Stack Developer</h1>')
                .pauseFor(800)
                .deleteAll()
                .typeString('<h1>Check Out<br></br>My GitHub Stats Below</h1>')
                .pauseFor(2000)
                .deleteAll()
                .start();
              }} />
            </div>
            <a href='https://github.com/bhattibytes' target="_blank">
              <h2 className={styles.gitPro}>👉 Link to GitHub Profile 👈</h2>
            </a>
          </div>
        <section className={styles.sectionTech}> 
          <h4 className={styles.gitTech}>Tech 🚀 Stack</h4>
          <center>
            <TechStack />
          </center>
        </section> 
         {/* GitHub Streak */}
         <h4 className={styles.gitStreak}>GitHub ☄️ Streak</h4>
          <img className={styles.gitImg} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=bhattibytes&" alt="bhattibytes"/>
        {/* Trophy Case */}
        <h4 className={styles.gitTrophy}>GitHub 🏆 Case</h4>
        <a href="https://github.com/ryo-ma/github-profile-trophy"><img className={styles.gitImg} src="https://github-profile-trophy.vercel.app/?username=bhattibytes&row=2&column=4" alt="bhattibytes" /></a>
        {/* GitHub Commits */}
        <h4 className={styles.gitContrib}>GitHub ⭐ Contributions</h4>
        <GitCarousel />
      </div>
      <Footer />
    </>
  )

}

export default GitHub;
