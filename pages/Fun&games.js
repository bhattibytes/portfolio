import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Image from 'next/image';
import MetroidCover from '../assets/metroid.jpeg';
import MarioCover from '../assets/mario.jpeg';
import GhoulsCover from '../assets/ghouls.png';
import BattleCover from '../assets/battle.jpeg';
import CastleCover from '../assets/castle.png';
import ChronoCover from '../assets/chrono.jpeg';
import ZeldaCover from '../assets/zelda.jpeg'

const Games = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <center><h1 className={styles.games}>Applications Made For Fun!</h1></center>
        <a href="https://star-trek.vercel.app/" target="_blank">
          <h2 className={styles.titles}>Star Trek Tribute Quote App</h2>
        </a>
        <a href="https://thegameofwar.vercel.app/" target="_blank">
          <h2 className={styles.titles}>The Game of War</h2>
        </a>
        <a href="https://space-x-launch-app-iota.vercel.app/" target="_blank">
          <h2 className={styles.titles}>SpaceX Launch App</h2>
        </a>
      <center><h1 className={styles.games}>Playable Retro Games!</h1></center>
      <h1 className={styles.titles}>Chrono Trigger</h1>
      <br/>
      <center><a href='/Chrono'><Image src={ChronoCover} alt="Chrono Trigger" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <h1 className={styles.titles}>Legend of Zelda: A Link to the Past</h1>
      <br/>
      <center><a href='/Zelda'><Image src={ZeldaCover} alt="Legend of Zelda: A Link to the Past" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <h1 className={styles.titles}>Super Metroid</h1>
      <br/>
      <center><a href='/Metroid'><Image src={MetroidCover} alt="Super Metroid" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <h1 className={styles.titles}>Castlevania: Symphony of the Night</h1>
      <br/>
      <center><a href='/Castlevania'><Image src={CastleCover} alt="Castlevania" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <h1 className={styles.titles}>Super Mario World</h1>
      <br/>
      <center><a href='/Mario'><Image src={MarioCover} alt="Super Mario" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <h1 className={styles.titles}>The Battle of Olympus</h1>
      <br/>
      <center><a href='/Battle'><Image src={BattleCover} alt="Battle of Olympus" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <h1 className={styles.titles}>Super Ghouls'n Ghosts</h1>
      <br/>
      <center><a href='/Ghouls'><Image src={GhoulsCover} alt="Super Ghouls'n Ghosts" width={750} height={500} /></a></center>
      <div className={styles.bottom}></div>
      <Footer />
    </div>
  )
};

export default Games;
