import styles from '../styles/Home.module.css';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import { useState } from 'react';
import github from '../assets/socials/github.png';
import gitBlack from '../assets/socials/black/github.png';
import linkedin from '../assets/socials/linkedin.png';
import linkedBlack from '../assets/socials/black/linkedin.png';
import facebook from '../assets/socials/facebook.png';
import facebookBlack from '../assets/socials/black/FBBlack.png';
import twitter from '../assets/socials/twitter.png';
import twitterBlack from '../assets/socials/black/twitter.png';
import instagram from '../assets/socials/instagram.png';
import instagramBlack from '../assets/socials/black/instagram.png';
import pintrest from '../assets/socials/pintrest2.png';
import pintrestBlack from '../assets/socials/black/pintrest2.png';
import wordpress from '../assets/socials/wordpress.png';
import wordpressBlack from '../assets/socials/black/wordpress.png';
import mail from '../assets/socials/mail.png';
import mailBlack from '../assets/socials/black/mail.png';

const Socials = () => {
  const [id, setId] = useState(0);
  
  return (
    <>
    <div className={styles.socialContainer}>
      <div className={styles.social}>
        <Tooltip title="GitHub" arrow>
          <a id={1} onMouseEnter={() => setId(1)} onMouseLeave={() => setId(0)} href="https://github.com/bhattibytes" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 1 ? gitBlack : github } alt="github" height={30} width={30} style={{ borderRadius: "3px" }}/>
          </a>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <a id={2} onMouseEnter={() => setId(2)} onMouseLeave={() => setId(0)} href="https://www.linkedin.com/in/jasonbhatti/" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 2 ? linkedBlack : linkedin } alt="linkedin" height={30} width={30} style={{ borderRadius: "3px" }}/>
          </a>
        </Tooltip>
        <Tooltip title="Facebook" arrow>
          <a id={3} onMouseEnter={() => setId(3)} onMouseLeave={() => setId(0)} href="https://www.facebook.com/Bhattibytes" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 3 ? facebookBlack : facebook } alt="facebook" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Twitter" arrow>
          <a id={4} onMouseEnter={() => setId(4)} onMouseLeave={() => setId(0)} href="https://twitter.com/BhattiBytes" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 4 ? twitterBlack : twitter } alt="twitter" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Instagram" arrow>
          <a id={5} onMouseEnter={() => setId(5)} onMouseLeave={() => setId(0)} href="https://www.instagram.com/bhattibytes/" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 5 ? instagramBlack : instagram } alt="instagram" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Pinterest" arrow>
          <a id={6} onMouseEnter={() => setId(6)} onMouseLeave={() => setId(0)} href="https://www.pinterest.com/bhattibytes/_saved/" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 6 ? pintrestBlack : pintrest } alt="pintrest" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="WordPress" arrow>
          <a id={7} onMouseEnter={() => setId(7)} onMouseLeave={() => setId(0)} href="https://bhattibytes.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 7 ? wordpressBlack : wordpress } alt="wordpress" height={30} width={30}/>
          </a>
        </Tooltip>
        <Tooltip title="Email" arrow>
          <a id={8} onMouseEnter={() => setId(8)} onMouseLeave={() => setId(0)} href="mailto:bhattibytes@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={ id == 8 ? mailBlack : mail } alt="email" height={32} width={30}/>
          </a>
        </Tooltip>
      </div>
    </div>
    </>
  )

}

export default Socials;