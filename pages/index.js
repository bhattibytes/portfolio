import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import advatar from '../assets/avatar.png';
import devices from '../assets/devices.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BhattiBytes Portfolio</title>
        <meta name="description" content="Portfolio By Jason Bhatti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main>
        <center>
          <h2 className={styles.headline}>Full Stack Software Engineer, Product Engineer & Systems Integrator</h2>
          <p style={{ fontSize: '20px'}}>I love solving problems with code to build great products.</p>
        </center>
        <center><Image className={styles.advatar} src={advatar} alt="developer advatar" height="250px" width="250px"/></center>
        <center><Image className={styles.devices} src={devices} alt="developer advatar" height="500px" width="750px"/></center>
        <section className={styles.section}>
          <section>
            <center>
              <h1 className={styles.homeBio}>Hi, I'm Jason. Welcome to my portfolio.</h1>
              <h2 className={styles.homeBioSummary}>Throughout my career, I have thrived in team-oriented environments that foster innovation and challenge. My in-depth knowledge of JavaScript frameworks and libraries, exceptional debugging skills, and problem-solving strategies have consistently set me apart and allowed me to offer truly unique contributions.</h2>
            </center>
          </section>
        </section>
        <center>
          <section className={styles.row}>
            <div className={styles.column}>
              <h3>Full Stack Software Engineer</h3>
              <p className={styles.blurb}>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
              <h4 className={styles.cardHead}>Languages I speak:</h4>
              <p className={styles.blurb}>HTML, CSS, JavaScript, and TypeScript</p>
              <h4 className={styles.cardHead}>Dev Tools:</h4>
              <p className={styles.blurb}>GitHub</p>
              <p className={styles.blurb}>AWS</p>
              <p className={styles.blurb}>Terminal</p>
              <p className={styles.blurb}>Vercel</p>
              <p className={styles.blurb}>Docker</p>
              <p className={styles.blurb}>Sass</p>
              <p className={styles.blurb}>Bootstrap</p>
            </div>
            <div className={styles.column}>
              <h3>Product Engineer</h3>
              <p className={styles.blurb}>I turn big ideas to beautifully designed products people love.</p>
              <h4 className={styles.cardHead}>Products I love to build:</h4>
              <p className={styles.blurb}>Data Visualizations, Business Tools, SaaS</p>
              <h4 className={styles.cardHead}>Product Tools:</h4>
              <p className={styles.blurb}>Jira</p>
              <p className={styles.blurb}>Trello</p>
              <p className={styles.blurb}>YouTrack</p>
              <p className={styles.blurb}>Notion</p>
              <p className={styles.blurb}>Figma</p>
              <p className={styles.blurb}>Miro</p>
              <p className={styles.blurb}>Google Docs</p>

            </div>
            <div className={styles.column}>
              <h3>Systems Integrator</h3>
              <p className={styles.blurb}>I thrive on uniting systems into a single cohesive infastructure.</p>
              <h4 className={styles.cardHead}>Systems I've integrated:</h4>
              <p className={styles.blurb}>Marketo, Convertr, Salesforce, Swoogo, Cadmium</p>
              <h4 className={styles.cardHead}>Integration Tools:</h4>
              <p className={styles.blurb}>Webhooks</p>
              <p className={styles.blurb}>Websockets</p>
              <p className={styles.blurb}>Cron Jobs</p>
              <p className={styles.blurb}>API</p>
              <p className={styles.blurb}>Zapier</p>
              <p className={styles.blurb}>Lambda</p>
              <p className={styles.blurb}>ISC</p>
            </div>
          </section>
        </center>
      </main>
      <Footer/>
    </div>
  )
}
