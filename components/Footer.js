import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Socials from './Socials';
import Vercel from '../assets/vercel.png';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      Powered by &nbsp;
      <span>
        <Image src={Vercel} alt="Vercel Logo" width={100} height={56}/>
      </span>
      
      <br/>
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