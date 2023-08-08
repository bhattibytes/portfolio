import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Charla from '../components/Charla.js';
import Syv from '../components/Syv.js';
import Catwalk from '../components/Catwalk.js';


const Projects = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className={styles.projects}>
        <section id="charla" className={styles.sectionApp}>
          <center style={{ marginTop: '40px', color: 'white' }}>
            <a href="https://www.f6s.com/company/charla-technologies-inc#about" target="_blank" rel="noopener noreferrer">
              <h1 className={styles.heading}>Charla Technologies, Inc.</h1>
            </a>
            <h2> **A Side Project that became a Tech Company**</h2>
          </center>
        </section> 
        <Charla /> 
        <div id="syv"></div>
        <section className={styles.sectionApp}>
          <center style={{ marginTop: '40px', color: 'white' }}>
            <a href="https://syv-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h1 className={styles.heading}>Secure Your Vote App</h1>
            </a>
            <h2>**A Capstone Project**</h2>
          </center>
        </section>
        <Syv />
        <div id="catwalk"></div>
        <section className={styles.sectionApp}>
          <center style={{ marginTop: '40px', color: 'white' }}>
            <a href="https://github.com/bhattibytes/Catwalk" target="_blank" rel="noopener noreferrer">
              <h1 className={styles.heading}>Catwalk</h1>
            </a>
            <h2>**An Ecommerce Project**</h2>
          </center>
        </section>
        <Catwalk />
      </div>
      <Footer />
    </div>
  )

}

export default Projects;