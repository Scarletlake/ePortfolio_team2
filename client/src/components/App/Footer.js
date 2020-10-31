import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit">
      E-Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {

  return (
    <div className='Footer'>
      <CssBaseline />
      <footer className='FooterRoot'>
        <Container maxWidth="sm">
          <Typography variant="body1"> E-Portfolio | This website is developed by Panda</Typography>
            <Typography  variant="body1">
                コロナに負けない &nbsp;不要输给新冠病毒 &nbsp;Don't lose to coronavirus
            </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}