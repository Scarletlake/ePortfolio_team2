import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, TextField } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  form: {
    flexGrow: 1,
    display: 'flex',
    height: '580px',
  },
  grow: {
    flexGrow: 1,
  },
  btn: {
    marginLeft: theme.spacing(1),
  },
  pop: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  appbar: {
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function PortfolioEditorBar(props) {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <div className={classes.grow} />
        
        <Button variant="outlined" color="primary" onClick={props.handleCancel} className={classes.btn}>
          Cancel
        </Button>

        <Button variant="contained" color="primary" onClick={props.handlePublish} className={classes.btn}>
          Publish
        </Button>

        <Dialog
          open={props.open_cancel}
        >
          <DialogTitle>{"Abort this edit?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you choose to abort this edit, all changes will not be saved.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={props.handleCancel} autoFocus>
              Continue editing
            </Button>
            <Button href={"/user/home"} color="secondary">
              <b>Abort</b>&nbsp;editing
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={props.open_publish}
          onClose={props.handlePublish}
        >
          <DialogTitle>{"Finished all edits?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you are finished editing, you can click the "Continue" button to finish publishing.
            </DialogContentText>
            <TextField
            id="portfolioName"
            name="portfolioName"
            label="portfolio Name"
            placeholder="Portfolio Name"
            defaultValue={props.portfolioName}
            onChange={event => props.setPortfolioName(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handlePublish} color="primary">
              Back
            </Button>
            <Button onClick={props.onSubmit} color="primary" autoFocus>
              Continue
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={props.open_redirect}
          onClose={props.handleRedirect}

        >
          <DialogTitle>{"Your portfolio is now successfully published!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>View your portfolio: </p>
              <Link href={props.portfolioURL}>
                {props.portfolioURL}
              </Link>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button href={"../user/home"} color="primary">
              Go Back To Dashboard
            </Button>
          </DialogActions>
        </Dialog>
      
      </Toolbar>
    </AppBar>
  )
}