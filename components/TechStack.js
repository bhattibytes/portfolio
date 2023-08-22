import styles from '../styles/Home.module.css'
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image'
import html from '../tech/html.png'
import css from '../tech/css.png'
import js from '../tech/js.png'
import ts from '../tech/ts.png'
import react from '../tech/react.png'
import next from '../tech/next.svg'
import redux from '../tech/redux.png'
import node from '../tech/node.png'
import express from '../tech/express.png'
import postgres from '../tech/postgresql.png'
import mongo from '../tech/mongo.png'
import graph from '../tech/graph.png'
import jq from '../tech/jq.jpeg'
import tw from '../tech/tw.png'
import aws from '../tech/aws.png'
import mui from '../tech/mui.png'


const TechStack = () => {
  return (
    <>
      <div className={styles.techStack}>
        <div className={styles.tech}>
          <Tooltip title="HTML5" arrow>
            <div>
              <Image src={html} alt="html" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="CSS3" arrow>
            <div>
              <Image src={css} alt="css" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Tailwind CSS" arrow>
            <div>
              <Image src={tw} alt="tailwindcss" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="JavaScript" arrow>
            <div>
              <Image src={js} alt="javascript" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="TypeScript" arrow>
            <div>
              <Image src={ts} alt="typescript" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="jQuery" arrow>
            <div>
              <Image src={jq} alt="jQuery" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="React.js" arrow>
            <div>
              <Image src={react} alt="react" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Next.js" arrow>
            <div>
              <Image src={next} alt="next" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="GraphQL" arrow>
            <div>
              <Image src={graph} alt="graphQL" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Redux.js" arrow>
            <div>
              <Image src={redux} alt="redux" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Node.js" arrow>
            <div>
              <Image src={node} alt="node" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Express.js" arrow>
            <div>
              <Image src={express} alt="express" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="PostgreSQL" arrow>
            <div>
              <Image src={postgres} alt="postgreSQL" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="MongoDB" arrow>
            <div>
              <Image src={mongo} alt="mongoDB" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Amazon Web Services" arrow>
            <div>
              <Image src={aws} alt="aws" height={65} width={65}/>
            </div>
          </Tooltip>
          <Tooltip title="Material UI" arrow>
            <div>
              <Image src={mui} alt="mui" height={65} width={65}/>
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  )

}

export default TechStack;
