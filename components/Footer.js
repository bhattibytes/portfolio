import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      Powered by &nbsp;
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
      </span>
      &nbsp;
      <p>
      &nbsp;
      Created with Next.js & Material UI By: Jason Bhatti
      </p>
    </footer>
  )

}

export default Footer;