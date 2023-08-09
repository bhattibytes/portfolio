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
      <p style={{ fontSize: "24px", textAlign: "center" }}>
        Living, learning, & leveling up 
        <br/>
        one day at a time.
      </p>
      <Socials />
      <p style={{ fontSize: "18px" }}>
        &nbsp;
        Handcratfed by Jason Bhatti aka BhattiBytes
      </p>
    </footer>
  )

}

export default Footer;