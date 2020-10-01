import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import '../styles.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" className='TextCenter'>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      E-Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function StickyFooter() {


  return (
    <div className='FooterRoot'>
      <CssBaseline />
      <footer className='Footer'>
    
        <div >
          <div className='TextCenter'>E-Portfolio | This website is developed by Panda</div>
          <Copyright/>
        </div>

      </footer>
    </div>
  );
}