import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Socials from './Socials';
import Vercel from '../assets/vercel.png';
import BB from '../assets/BBWhite.png';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      Powered by
      <span>
        <Image src={Vercel} alt="Vercel Logo" width={100} height={56}/>
      </span>   
      <span>
        <Image src={BB} alt="BhattiBytes Logo" width={60} height={60}/>  
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