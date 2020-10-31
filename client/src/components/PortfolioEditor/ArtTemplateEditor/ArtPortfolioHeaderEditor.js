import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import '../../../views/artTemplateEditor.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  inputCenter: {
    textAlign: 'center',
  },
  input: {
    "font-family": "monospace, sans-serif",
    "font-size": "16px",
    "font-weight": "bold",
  }
}));

export default function PortfolioHeaderEditor(props) {

  const classes = useStyles();

  return (
    <form className="PortfolioTabs">
     <Input classes={{input: classes.inputCenter}} className={classes.input}
            placeholder="Home" defaultValue={props.homePageTab} 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={event => {props.changeHomePageTab(event.target.value)}}
      />
     <Input classes={{input: classes.inputCenter}} className={classes.input}
            placeholder="About" defaultValue={props.formalPageTab} 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={event => {props.changeFormalPageTab(event.target.value)}} 
      />
     <Input classes={{input: classes.inputCenter}} className={classes.input}
            placeholder="Leisure" defaultValue={props.leisurePageTab} 
            inputProps={{ 'aria-label': 'description' }}
            onChange={event => {props.changeLeisurePageTab(event.target.value)}} 
      />
     <Input classes={{input: classes.inputCenter}} className={classes.input}
            placeholder="Contact" defaultValue={props.contactPageTab} 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={event => {props.changeContactPageTab(event.target.value)}} 
      />
    </form> 
    );
  
}