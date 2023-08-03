import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Image from 'next/image'
import overview from '../projects/OverviewWidget.png'
import related from '../projects/RelatedProductWidget.png'
import ratings from '../projects/RatingsReviewsWidget.png'
import address from '../projects/address.png'
import dashboard from '../projects/dashboard.png'
import home from '../projects/home.png'
import map from '../projects/map.png'
import signup from '../projects/signup.png'
import state from '../projects/state.png'
import vote from '../projects/vote.png'
import dash from '../projects/dash.png'
import health from '../projects/health.png'
import keywords from '../projects/keywords.png'
import quick from '../projects/quick.png'
import reports from '../projects/reports.png'
import word from '../projects/word.png'
import lead from '../projects/export.png'


const Projects = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className={styles.projects}>
      <section className={styles.sectionApp}>
          <center style={{ marginTop: '40px', color: 'white' }}>
            <a href="https://app.charla.cc/" target="_blank" rel="noopener noreferrer">
              <h1 className={styles.heading}>Charla Technologies, Inc.</h1>
            </a>
            <h2> **A Side Project that became a Tech Company**</h2>
          </center>
        </section>  
        
        <p className={styles.summary}>
          Charla Technologies, Inc. is a SaaS Community Intelligence Platform that helps brands and their revenue teams manage their online communities. The application allows community managers to make data informed decisions by presenting data visualizations from conversations happening in online communities like Slack. Insights can be drawn from the data with Charla's keyword tracking, real-time brand mention alerts, topic word clouds, sentiment analysis and community health. Charla also integrates with sales automation tools such as Hubspot and Salesforce to export leads from important conversations to augment CRM prospect data by enriching leads with more contact information. 
        </p>
        <p className={styles.overview}> 
          Charla's home dashboard shows all of the modules within the platform and explainations so you can get a better understanding of each module's functionality.
        </p>
        <Image src={dash} width={800} height={500}/>
        <p className={styles.overview}>
          The Quick Search module allows users to search for products, services, and companies by keyword across multiple workspaces and communities. Preforms sentiment analysis of the search results and allows users to engage with messages by opening messages back to the community.
        </p>
        <Image src={quick} width={800} height={500}/>
        <p className={styles.overview}>
          Within the Quick Search and Saved Keywords is the ability to exports leads to either Hubspot or Salesforce.  Exporting also enriches leads with more contact information and imports a snapshot of the conversation and attribution of where lead came from for better tracking of leads. 
        </p>
        <Image src={lead} width={800} height={500}/>
        <p className={styles.overview}>
          Saved Keywords gets real-time notifications on high priority keywords such as topics, target accounts, competitors, brand mentions, and other intent signal. Follow conversations across all your connected Slack communities (Workspaces) for topics, prospects, companies, competitors, content, and other keywords.
        </p>
        <Image src={keywords} width={800} height={500}/>
        <p className={styles.overview}>
          Community Health lets you understand positive, negative, and neutral sentiment across all your connected communities. Segment sentiment by keyword and channel. Identify crises to mitigate community health risks.
        </p>
        <Image src={health} width={800} height={500}/>
        <p className={styles.overview}>
          Community Engagement Reports allows managers to see the most active and least active members in the community. It breaks down the enagement factors into messages, replies, and reactions.  At a high level it shows you an activity heatmap of the community to better understand when is the best time to post new content to effectively engage with the community. 
        </p>
        <Image src={reports} width={800} height={500}/>
        <p className={styles.overview}>
          The Topic Wordcloud are a great way to understand what the community talks about and cares about 
          Identify trending topics, content ideas, and other keywords, per channel and across your multiple connected online communities.
        </p>
        <Image src={word} width={800} height={500}/>
        <section className={styles.sectionApp}>
          <center style={{ marginTop: '40px', color: 'white' }}>
            <a href="https://syv-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h1 className={styles.heading}>Secure Your Vote App</h1>
            </a>
            <h2>**A Capstone Project**</h2>
          </center>
        </section>
        <p className={styles.summary}>
          The aim of this project was to create a secure and easy-to-use voting app that also showed election information catered to the user's location. Our team of highly skilled engineers envisioned a method that accomplished a high level of security while also offering many user focused experiences that create a sticky user experience while also being aesthetically pleasing and accessible. We have incorporated many features that allow customization based on user specific information that is securely stored and offer features that guide the user to having all the election information at their fingertips.
        </p>
        <p className={styles.summary}>
          The App gives users the ability to sign-up and sign-in securely, get polling info, register to vote with the US government and be able to view specific election information for elections in their area. Then if a user has been validated living in the United States, they will be able to vote directly in the app securely.
        </p>
        <p className={styles.overview}>
          Starting at the home page, there are three links that--even if a user doesn't have an account can register to vote, check registration status, and get election information based on state.
        </p>
        <Image src={home} width={800} height={500}/>
        <p className={styles.overview}>
          To sign-up, click the sign-up button on the top right of the homepage. Then, the user enters the requisite information: first name, last name, email, and password. Both email and password have validations that will check if they are properly formatted: the password be between 8 - 13 characters and that also contain at least one uppercase, one lowercase, and one special character.
        </p>
        <Image src={signup} width={800} height={500}/>
        <p className={styles.overview}>
          Address Validation let's you first search for an address then once it is found it will populate the rest of the fields and validate the address is in the United States with a special confetti animation on the inserting a valid address.
        </p>
        <Image src={address} width={800} height={500}/>
        <Image src={map} width={800} height={500}/>
        <p className={styles.overview}>
          Upon clicking Get Information By State, an interactive map will be displayed. When a user clicks on a state, the user will be redirected to a state specific page with that state's election information.
        </p>
        <Image src={state} width={800} height={500}/>
        <p className={styles.overview}>
          After user is Authenticated and Validated they are now able to see a user specific dashboard with several tabs with information tailored to the user's specific location.
        </p>
        <Image src={dashboard} width={800} height={500}/>
        <Image src={vote} width={800} height={500}/>

        <section className={styles.sectionApp}>
          <center style={{ marginTop: '40px', color: 'white' }}>
            <h1 className={styles.heading}>Catwalk</h1>
            <h2>**An Eccomerce Project**</h2>
          </center>
        </section>
        <p className={styles.summary}>
          Representative of a cloned fashion ecommerce website that enables customers the ability to search, browse, add to cart, and checkout items. This app was previously deployed on AWS using an EC2 instance.
        </p>
        <p className={styles.overview}>
          Overview Widget This feature gives client the ability to filter through all styles available for a product. Client can click through a gallery of images for a given style. Client can add products by quantity and size. This was the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:
        </p>
        <ul>
          <li className={styles.details}>Image Gallery</li>
          <li className={styles.details}>Product Information</li>
          <li className={styles.details}>Style Selector</li>
          <li className={styles.details}>Add To Cart</li>
        </ul>
        <Image src={overview} width={800} height={500}/>
        <p className={styles.overview}>
          Related Products Widget Related Products provides clients with a carousel of products related to the overview product above. The functionality contained within this module can be divided into several pieces:
        </p>
        <ul>
          <li className={styles.details}>Related Products gallery</li>
          <li className={styles.details}>Comparision overlay</li>
          <li className={styles.details}>Your Outfit gallery</li>
        </ul>
        <Image src={related} width={800} height={500}/>
        <p className={styles.overview}>
          Ratings & Reviews Widget The Ratings & Reviews module was implemented to allow viewing and submission of reviews for a product selected. The functionality contained within this module can be divided into several pieces:
        </p>
        <ul>
          <li className={styles.details}>Write New Review</li>
          <li className={styles.details}>Reviews List</li>
          <li className={styles.details}>Sorting</li>
          <li className={styles.details}>Rating Breakdown</li>
          <li className={styles.details}>Product Breakdown</li>
        </ul>
        <Image src={ratings} width={800} height={500}/>
      </div>
      <Footer />
    </div>
  )

}

export default Projects;