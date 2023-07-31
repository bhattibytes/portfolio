import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import logoWhite from '../assets/BBWhite.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BhattiBytes Portfolio</title>
        <meta name="description" content="Portfolio By Jason Bhatti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <Image src={logoWhite} alt="BhattiBytes Logo" height="750px" width="750px"/>
      </main>
      <Footer/>
    </div>
  )
}
