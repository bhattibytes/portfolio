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
      <p>
      &nbsp;
      Handcratfed by Jason Bhatti aka BhattiBytes
      </p>
      <Socials />
    </footer>
  )

}

export default Footer;