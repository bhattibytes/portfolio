import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Image from 'next/image';
import profile2 from '../assets/JayRoof.jpeg';

const About = () => {
  return (
    <>
      <ResponsiveAppBar />
        <div className={styles.about}>
          <h1 className={styles.aboutHeader}>About Me</h1>
          <Image className={styles.profilePic} src={profile2} alt="profile" height="300px" width="300px"/>
          <div className={styles.aboutText}>
          <p className={styles.aboutBody}>
            I am Jason Bhatti, a highly skilled and accomplished professional with a proven track record in the "Software as a Service" - (SaaS) technology sector. Over the course of several years, I have honed my expertise through various roles in leading SaaS companies. My career has been driven by an unwavering curiosity for understanding systems and a relentless pursuit of improvement.
            
            Throughout my professional journey, I have been at the forefront of driving significant enhancements for organizations. By focusing on increasing efficiency, usability, user experience, and accessibility, I have effectively contributed to the growth and success of the companies I've been associated with.
            
            A key aspect of my approach has been collaborating closely with engineering teams to devise innovative solutions that cater to the unique needs of clients and stakeholders. This hands-on involvement has allowed me to bridge the gap between conceptualization and execution, resulting in streamlined processes and satisfied stakeholders.
            
            Passionate about technology, I remain committed to continuous learning and skill enhancement, as I firmly believe in the importance of staying updated with the latest industry trends and advancements.
            
            I am eager to embrace new challenges and contribute my expertise to drive success for future endeavors.
            <br></br>
            <br></br>
            In recent years, I have dedicated myself to mastering full stack JavaScript. In 2021, I successfully completed the immersive full stack software engineering boot camp at <a href='https://www.hackreactor.com/' rel='noopener noreferrer' target="_blank"><strong>Hack Reactor</strong></a>,  a transformational experience that laid the foundation for my current achievements. Notably, I served as the Lead Software Engineer at <a href='https://www.cyberriskalliance.com/' rel='noopener noreferrer' target="_blank" ><strong>CyberRisk Alliance</strong></a> and previously held the roles of Co-founder, Product & Software Engineer at Charla Technologies Inc. At present, I am actively seeking a full-time software engineering role to further apply and expand my expertise.
            <br></br>
            <br></br>
            My skill set encompasses a diverse range of specialties, including agile acquisition of new skills and programming languages, effective management of software engineering teams, adept problem-solving capabilities, and a keen understanding of responsive design principles. Additionally, I possess expertise in website optimization, SEO, User Experience Design (UXD), and the Model View Controller (MVC) method of code organization. I have hands-on experience with an array of technologies such as HTML, CSS, JavaScript, jQuery, React.JS, Next.JS, Node.JS, Express.JS, Tailwind CSS, Material UI, GraphQL, MongoDB, Mongoose, MySQL, Postgres, Sequelize, and AWS services such as EC2, IAM, S3, Lambda, Amplify, DynamoDB, and Dynamoose. My proficiency extends to CI/CD tools like Vercel, Netlify, and AWSPipeline, as well as version control using Git and GitHub. Currently, I am actively learning Python and Typescript, continuously expanding my coding wheelhouse to integrate additional programming languages, frameworks, and principles.
          </p>
          </div>
          <div className={styles.aboutFiles}>
            <a href="/Jason_Bhatti-Resume.pdf" alt="Jason_Bhatti_CV" target="_blank" rel="noopener noreferrer">
              <h1>View My Resume</h1>
            </a>
            <a href="/HRCertificate.pdf" alt="Hack Reactor Certificate" target="_blank" rel="noopener noreferrer">
              <h1>View Hack Reactor Certificate of Completion</h1>
            </a>
            <a href="/Testimonials.pdf" alt="Testimonials from Hack Reactor" target="_blank" rel="noopener noreferrer">
              <h1>View Hack Reactor Testimonials</h1>
            </a>
          </div>
        </div>
      <Footer />
    </>
  )

}

export default About;