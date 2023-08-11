import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import works from '../public/works';
import styles from '../styles/Home.module.css';

export default function Work() {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className={styles.work}>
      { works.projects.map(work => 
      <div
        className={styles.cardMedia} 
        key={work.id} 
        onMouseEnter={(evt) => {
          setHover(true);
          setId(evt.target.id);
        }} 
        onMouseLeave={(evt) => {
          setHover(false);
          setId(0);
        }}>
        <Card>
            <div>
                <CardMedia
                  id={work.id}
                  component="img"
                  alt="Dashboard"
                  height="300"
                  width={500}
                  image={hover && id == work.id ? work.black : work.imgURL}
                />
                { hover && id == work.id ?
                <div className={styles.myWorkHome}>
                  <center style={{ color: "white" }}>
                    <CardContent style={{ color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {work.name}
                    </Typography>
                    <Typography variant="body2">
                      {work.summary}
                    </Typography>
                    </CardContent>
                  </center>
                  <CardActions>
                    <a href={work.visit} target="_blank"><Button className={styles.btn} size="small">Visit Site</Button></a>
                    <a href={work.learn}><Button className={styles.btn} size="small">Learn More</Button></a>
                  </CardActions>
                </div> : null }
            </div>
        </Card>
      </div>
    )}
   </div>
  );
}