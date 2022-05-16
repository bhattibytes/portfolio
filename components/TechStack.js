import styles from '../styles/Home.module.css'
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


const TechStack = () => {
  return (
    <>
      <div className={styles.techStack}>
        <div className={styles.tech}>
          <Image src={html} alt="html" height={55} width={55}/>
          <Image src={css} alt="css" height={55} width={55}/>
          <Image src={tw} alt="tailwindcss" height={55} width={55}/>
          <Image src={js} alt="javascript" height={55} width={55}/>
          <Image src={ts} alt="typescript" height={55} width={55}/>
          <Image src={jq} alt="jQuery" height={55} width={55}/>
          <Image src={react} alt="react" height={55} width={55}/>
          <Image src={next} alt="next" height={55} width={55}/>
          <Image src={graph} alt="graphQL" height={55} width={55}/>
          <Image src={redux} alt="redux" height={55} width={55}/>
          <Image src={node} alt="node" height={55} width={55}/>
          <Image src={express} alt="express" height={55} width={55}/>
          <Image src={postgres} alt="postgreSQL" height={55} width={55}/>
          <Image src={mongo} alt="mongoDB" height={55} width={55}/>
          <Image src={aws} alt="aws" height={55} width={55}/>
        </div>
      </div>
    </>
  )

}

export default TechStack;
