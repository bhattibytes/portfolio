import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Socials from './Socials';
import { useState } from 'react';
import Vercel from '../assets/vercel.png';
import BB from '../assets/BBwhite.png';
import BB2 from '../assets/BB.png';

const Footer = () => {
  const [id, setId] = useState(0);

  return (
    <footer className={styles.footer}>
      Powered by
      <span>
        <Image src={Vercel} alt="Vercel Logo" width={100} height={56}/>
      </span>   
      <span>
        <a href='/'>
          <Image id={1} onMouseEnter={() => setId(1)} onMouseLeave={() => setId(0)} src={ id == 1 ? BB2 : BB } alt="BhattiBytes Logo" width={60} height={60}/>
        </a>
      </span> 
      <p className={styles.footerQuote}>
        Living, learning, & leveling up 
        <br/>
        one day at a time.
      </p>
      <Socials />
      <p className={styles.handFooter}>
        &nbsp;
        Handcratfed by me © BhattiBytes
      </p>
    </footer>
  )

}

export default Footer;