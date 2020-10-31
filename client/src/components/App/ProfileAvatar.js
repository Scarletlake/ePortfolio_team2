import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  },
}));

export default function ProfileAvatar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.avatar === ""?    
        <Avatar src="/broken-image.jpg" />:
        <Avatar src={props.avatar} />
      }
    </div>
  );
}