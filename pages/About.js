import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Image from 'next/image';
import profile from '../assets/Pro.jpeg';
import profile2 from '../assets/JayRoof.jpeg';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';

const About = () => {
  return (
    <>
      <ResponsiveAppBar />
        <div className={styles.about}>
          <h1 className={styles.header}>About Me</h1>
          <Image className={styles.profilePic} src={profile2} alt="profile" height="300px" width="300px"/>
          <div className={styles.aboutText} >
            <p>
            My name is Jason Bhatti and I am an experienced professional with several years of experience working at technology companies primarily “Software as a Service.” Throughout my professional career, I've always been curious about how systems work and how they can be improved upon. Improvements I've made have helped companies from a standpoint of increasing efficiency, usability, user experience, and revenues by decreasing sales cycles, errors, and time. In making these improvements, I've often found myself gravitating towards working directly with engineering teams to conceptualize unique solutions for clients. I've always been passionate about technology and I'm excited to continue learning and improving my skills. For the last few years I've been learning software engineering and I'm currently looking for a position in the field of software development.
            <br></br>
            <br></br>
            My specialties include quickly learning new skills and programming languages, problem solving, responsive design principles, agile methodology, website optimization, User Experience Design (UXD) and the Model View Controller (MVC) method of organizing code. So far I have HTML, CSS, JavaScript, jQuery, React.JS, Next.JS, Node.JS, Express.JS, Tailwind CSS, Material UI, GraphQL, MongoDB, Mongoose, mySQL, Postgres, Sequelize, AWS - EC2, IAM, S3, Lambda, DynamoDB, Dynamoose, CI/CD - Vercel, Netlify, AWSPipeline and Git/GitHub. I've started learning Python, Golang and Typescript. I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into my coding wheelhouse. 
            </p>
          </div>
          <h1>Tech Stack</h1>
          <TechStack />
          <h1>Let's Connect!</h1>
          <Socials/>
          <a href='https://docs.google.com/document/d/1zPT2Xt76w6gkfXBsDnSFYHT41eAZRkfxBfRhtMXAoaQ/edit?usp=sharing'
            target="_blank"
          >
            <h3>Download my Resume</h3>
          </a>
          <a href="mailto:bhattibytes@gmail.com"><h3>Email Me</h3></a>
        </div>
      <Footer />
    </>
  )

}

export default About;