import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Socials from './Socials';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      Powered by &nbsp;
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
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