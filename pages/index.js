import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import advatar from '../assets/avatar.png';
import devices from '../assets/devices.svg';
import Testimonials from '../components/Testimonials';
import Work from '../components/Work';

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
              <svg height="100" width="100" style={{ paddingTop: "20px", overflow: "visible" }}>
                <circle cx="50" cy="25" r="40" fill="#5BE9B9" />
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
              </svg></svg>
              <h2>Full Stack Software Engineer</h2>
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
              <svg height="100" width="100" style={{ paddingTop: "20px", overflow: "visible" }}>
                <circle cx="38" cy="25" r="40" fill="#5BE9B9" />
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"/>
              </svg></svg>
              <h2>Product Engineer</h2>
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
              <svg height="100" width="100" style={{ paddingTop: "20px", overflow: "visible" }}>
                <circle cx="45" cy="25" r="40" fill="#5BE9B9" />
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"/>
              </svg></svg>
              <h2>Systems Integrator</h2>
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
        <center>
          <h1>My Recent Work</h1>
          <h3>Here are a few projects of mine...</h3>
          <Work />
        </center>
        <Testimonials />
      </main>
      <Footer/>
    </div>
  )
}
