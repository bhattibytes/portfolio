import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      Powered by &nbsp;
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      &nbsp;
      <p className={styles.logo}>
      &nbsp;
      Created with Next.js & Material UI By: Jason Bhatti
      </p>
    </footer>
  )

}

export default Footer;