import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Image from 'next/image'
import profile from '../assets/Pro.jpeg'
import Socials from '../components/Socials'
import TechStack from '../components/TechStack'

const About = () => {
  return (
    <>
      <ResponsiveAppBar />
        <div className={styles.about}>
          <h1 className={styles.header}>About Me</h1>
          <Image className={styles.profilePic} src={profile} alt="github" height="300px" width="450px" />
          <div className={styles.aboutText} >
            <p>
            I am an experienced professional with several years of experience working in technology companies primarily “Software as a Service.” Throughout my professional career, I've always been curious about how systems work and how they can be improved upon. Improvements I've made have helped companies from a standpoint of increasing efficiency, usability, user experience, and revenues by decreasing sales cycles, errors, and time. In making these improvements, I've often found myself gravitating towards working directly with engineering teams to conceptualize unique solutions.
           <br></br>
           <br></br>
            My specialties include quickly learning new skills and programming languages, problem solving, responsive design principles, agile methodology, website optimization, User Experience Design (UXD) and the Model View Controller (MVC) method of organizing code. So far I have HTML, CSS, JavaScript, jQuery, React.JS, Next.JS, Node.JS, Express.JS, TailwindCSS, MongoDB, Mongoose, mySQL, Postgres, Sequelize, AWS - EC2, Lambda, DynamoDB, Dynamoose, CI/CD - Vercel, Netlify AWSPipeline and Git/GitHub. I've started learning Salesforce CMI, Salesforce DX, Python and Typescript. I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into my coding wheelhouse. 
            </p>
          </div>
          <h1>Tech Stack</h1>
          <TechStack />
          <h1>Let's Connect!</h1>
          <Socials/>
          
        </div>
      <Footer />
    </>
  )

}

export default About;