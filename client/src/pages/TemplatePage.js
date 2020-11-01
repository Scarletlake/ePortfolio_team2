import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import { Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ImageExamples from '../components/App/ImageExamples';
require('../views/templatePage.css');

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
    marginTop: "6%",
    textAlign: "center",
  },
  grid: {
    marginTop: "8%",
    marginBottom: "8%",
    textAlign: "center",
  },
  btn_style: {
    background: "linear-gradient(45deg, #5a9cb8 30%, #2d49ba 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(63, 80, 181, .5)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "5px",
    width: "100%",
  },
  card: {
    maxWidth: 450,
    margin: "auto",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

let resFont = createMuiTheme();
resFont = responsiveFontSizes(resFont);

const tileData1 = [
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603908745/dtsp8csymx6h7pjmnj9g.png",
    title: 'Page: Home',
  },
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603909821/xhc7bhsmnsb8aicgqg4x.png",
    title: 'Page: About',
  },
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603909844/bwxobha281divultswsj.png",
    title: 'Page: Contact',
  },
]

const tileData2 = [
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603908806/awbltb3htbnozmk64myu.png",
    title: 'Page: Home',
  },
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603909948/cp2fnno8gumalcyzst7o.png",
    title: 'Page: About',
  },
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603909964/iy7w0lpjekqydrfwfxyv.png",
    title: 'Page: Contact',
  }
]

const tileData3 = [
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603908880/xlsrzf2dgpubdb6hj2nj.png",
    title: 'Page: Home',
  },
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603910103/k0h1opuwae3y5drotkji.png",
    title: 'Page: About',
  },
  {
    img: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603910162/fp4ol4oi983zp5oejt6p.png",
    title: 'Page: Contact',
  }
]

export default function TemplatePage() {

  const classes = useStyles();

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <div className='PageContainer'>
      < div className={classes.root}>

        <MuiThemeProvider theme={resFont}>
          <Typography variant="h2" gutterBottom>CHOOSE THE TEMPLATE YOU WANT TO USE</Typography>
        </MuiThemeProvider>

        <Grid container className={classes.grid} spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
            <Card className='container'>
              <CardActionArea className="image" >
                <CardMedia
                  component="img"
                  alt="Template Page"
                  height='300'
                  image="http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557645/aywlzommatqnbcbi9cnm.png"
                  title="Contemplative Reptile"/>
                <CardContent>                  
                  <Typography gutterBottom variant="h5" component="h2">
                    Business
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                    Your best partner with your work
                  </Typography>                  
                </CardContent>
              </CardActionArea>
              <div className="middle" >
                <Button className={classes.btn_style} onClick={handleClickOpen1}>
                  View example
                </Button>
                <br/><br/>
                <Button className={classes.btn_style} href="/portfolio/editor?temp=business&id=0">
                  Use this template
                </Button>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
            <Card className="container" >
              <CardActionArea className="image" >
                <CardMedia
                  component="img"
                  alt="Template Page"
                  height='300'
                  image="http://res.cloudinary.com/do0ecn2sm/image/upload/v1602527076/dmhb4kzeuworzfnw2h5n.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Minimal
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                    Simple,but not crude
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="middle" >
                <Button className={classes.btn_style} onClick={handleClickOpen2}>
                  View example
                </Button>
                <br/><br/>
                <Button className={classes.btn_style} href="/portfolio/editor?temp=minimal&id=0">
                  Use this template
                </Button>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
            <Card className="container" >
              <CardActionArea className="image" >
                <CardMedia
                  component="img"
                  alt="Template Page"
                  height='300'
                  image="http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439900/bok5qj4uu6gs6s8tv2f4.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Art
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                    Your own style, your story
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="middle" >
                <Button className={classes.btn_style} onClick={handleClickOpen3}>
                  View example
                </Button>
                <br/><br/>
                <Button className={classes.btn_style} href="/portfolio/editor?temp=art&id=0">
                  Use this template
                </Button>
              </div>
            </Card>
          </Grid>

        </Grid>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
          <div className={classes.paper}>
            <ImageExamples tileData={tileData1} />
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
            <ImageExamples tileData={tileData2} />
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open3}>
          <div className={classes.paper}>
            <ImageExamples tileData={tileData3} />
          </div>
        </Fade>
      </Modal>

    </div>
  );
}