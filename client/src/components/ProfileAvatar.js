import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },

}));

export default function ProfileAvatar(props) {
  const classes = useStyles();

  function NameInitial(){
    var initial = '';
    if (props.first_name){
      initial+=props.first_name[0];
    }

    if (props.last_name){
      initial+=props.last_name[0];
    }
    return initial;
  }


  return (
    <div className={classes.root}>
      
      {NameInitial()?
        (<Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange}>
          {NameInitial()}
        </Avatar>):    
        <Avatar src="/broken-image.jpg" />}
    </div>
  );
}