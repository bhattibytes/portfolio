import styles from '../styles/Home.module.css';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/FBBlack.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import pintrest from '../assets/pintrest.jpeg';
import wordpress from '../assets/wordpress.png';

const Socials = () => {
  return (
    <>
    <h1 className={styles.socialTitle}>Social Media Links:</h1>
    <div className={styles.socialContainer}>
      <div className={styles.social}>
        <Tooltip title="GitHub" arrow>
          <a href="https://github.com/bhattibytes" target="_blank" rel="noopener noreferrer">
            <Image src={github} alt="github" height={30} width={30} style={{ borderRadius: "8px" }}/>
          </a>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <a href="https://www.linkedin.com/in/jasonbhatti/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedin} alt="linkedin" height={30} width={30} style={{ borderRadius: "8px" }}/>
          </a>
        </Tooltip>
        <Tooltip title="Facebook" arrow>
          <a href="https://www.facebook.com/Bhattibytes" target="_blank" rel="noopener noreferrer">
            <Image src={facebook} alt="facebook" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Twitter" arrow>
          <a href="https://twitter.com/BhattiBytes" target="_blank" rel="noopener noreferrer">
            <Image src={twitter} alt="twitter" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Instagram" arrow>
          <a href="https://www.instagram.com/bhattibytes/" target="_blank" rel="noopener noreferrer">
            <Image src={instagram} alt="instagram" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Pinterest" arrow>
          <a href="https://www.pinterest.com/bhattibytes/_saved/" target="_blank" rel="noopener noreferrer">
            <Image src={pintrest} alt="pintrest" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="WordPress" arrow>
          <a href="https://bhattibytes.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <Image src={wordpress} alt="wordpress" height={30} width={30}/>
          </a>
        </Tooltip>
      </div>
    </div>
    </>
  )

}

export default Socials;