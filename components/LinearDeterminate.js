import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  // setTimeout(() => {
  //   setProgress(100)
  // }, 100);

  React.useEffect(() => {
    let computeProgress = () => {
      // The scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;
      // scrollHeight gives total length of the window and the clientHeight gives the length of viewport
      const scrollLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = 100*scrolled/scrollLength;
  
      setProgress(progress);
    }
  
    // Adding event listener on mounting
    window.addEventListener("scroll", computeProgress);
  
    // Removing event listener upon unmounting
    return () => window.removeEventListener("scroll", computeProgress);
  });



  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} style={{ backgroundColor: '#5BE9B9' }}/>
    </Box>
  );
}
