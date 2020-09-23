import React from "react";
import { Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    marginTop: "500px",
    marginBottom: "500px",
    textAlign: "center",
  },
  btn_style: {
    background: "linear-gradient(45deg, #5a9cb8 30%, #2d49ba 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export default function TemplatePage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid} justifyContent="space-evenly">
      <Grid item xs={4}>
        <Button className={classes.btn_style} href="/portfolio/template/editor">
          use this template
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button className={classes.btn_style} href="/portfolio/template/editor">
          use this template
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button className={classes.btn_style} href="/portfolio/template/editor">
          use this template
        </Button>
      </Grid>
    </Grid>
  );
}
