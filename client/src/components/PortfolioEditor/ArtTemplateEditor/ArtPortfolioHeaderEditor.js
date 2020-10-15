import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import '../../../views/artTemplate.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    textAlign: 'center',
  },
}));

export default function PortfolioHeaderEditor(props) {

  const classes = useStyles();

  return (
    <div>
     <Input classes={{input: classes.input}} className='PortfolioTabsFont'
            placeholder="Home" defaultValue={props.homePageTab} 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={event => {props.changeHomePageTab(event.target.value)}}
      />
     <Input classes={{input: classes.input}} className='PortfolioTabsFont'
            placeholder="About" defaultValue={props.formalPageTab} 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={event => {props.changeFormalPageTab(event.target.value)}} 
      />
     <Input classes={{input: classes.input}} className='PortfolioTabsFont'
            placeholder="Leisure" defaultValue={props.leisurePageTab} 
            inputProps={{ 'aria-label': 'description' }}
            onChange={event => {props.changeLeisurePageTab(event.target.value)}} 
      />
     <Input classes={{input: classes.input}} className='PortfolioTabsFont'
            placeholder="Contact" defaultValue={props.contactPageTab} 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={event => {props.changeContactPageTab(event.target.value)}} 
      />
    </div> 
    );
  
}