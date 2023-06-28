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
          My name is Jason Bhatti and I am an experienced professional with several years of experience having worked primarily at SaaS - “Software as a Service” technology companies. Throughout my professional career, I've always been curious about how systems work and how they can be improved upon. Improvements I've made have helped companies from a standpoint of increasing efficiency, usability, user experience, and accessibility. In making these improvements, I've often found myself gravitating towards working directly with engineering teams to conceptualize unique solutions for clients and stakeholders. I've always been passionate about technology and I'm excited to continue learning and improving my skills.
           <br></br>
           <br></br>
           For the last few years, I've been learning full stack JavaScript. In 2021, I attended and graduated from <a href='https://www.hackreactor.com/' rel='noopener noreferrer' target="_blank"><strong>Hack Reactor</strong></a>, an immersive full stack software engineering bootcamp. This truly transformational experience set the foundation and helped me to where I am today. Currently, I'm the Lead Software Engineer at <a href='https://www.cyberriskalliance.com/' rel='noopener noreferrer' target="_blank" ><strong>CyberRisk Alliance</strong></a>
           <br></br>
           <br></br>
           My specialties include quickly learning new skills and programming languages, managing software engineering teams, problem solving, responsive design principles, agile methodology, website optimization, SEO, User Experience Design (UXD) and the Model View Controller (MVC) method of organizing code. So far I have HTML, CSS, JavaScript, jQuery, React.JS, Next.JS, Node.JS, Express.JS, Tailwind CSS, Material UI, GraphQL, MongoDB, Mongoose, mySQL, Postgres, Sequelize, AWS - EC2, IAM, S3, Lambda, DynamoDB, Dynamoose, CI/CD - Vercel, Netlify, AWSPipeline and Git/GitHub. I'm learning Python and Typescript. I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into my coding wheelhouse.
           </p>
          </div>
          <h1>Tech Stack</h1>
          <TechStack />
          <h1>Let's Connect!</h1>
          <Socials/>
          <a href="mailto:bhattibytes@gmail.com"><h3 style={{marginBottom: "80px"}}>Email Me</h3></a>
        </div>
      <Footer />
    </>
  )

}

export default About;