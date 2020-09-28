import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import isAuthenticated from "../utils/checkAuthToken";
import {userLogOut} from '../api/userAPI';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function NavBarEditor(props) {

  return (
    <div>
      <Grid>
     <Input placeholder="Home" defaultValue={props.homePageTab} 
            inputProps={{ 'aria-label': 'description' }} onChange={props.changeHomeTab}/>
     <Input placeholder="About" defaultValue={props.formalPageTab} 
            inputProps={{ 'aria-label': 'description' }} />
     <Input placeholder="Leisure" defaultValue={props.leisurePageTab} 
            inputProps={{ 'aria-label': 'description' }} />
     <Input placeholder="Contact" defaultValue={props.contactPageTab} 
            inputProps={{ 'aria-label': 'description' }} />
     </Grid>
    </div> 
    );
  
}