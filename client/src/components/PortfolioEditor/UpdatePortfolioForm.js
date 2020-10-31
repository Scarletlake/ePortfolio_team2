import React from 'react'
import {usePortfolio} from "../../api/portfolioAPI"
import ArtPortfolioEditor from "./ArtTemplateEditor/ArtPortfolioEditor";
import MinimalPortfolioEditor from "./MinimalTemplateEditor/MinimalPortfolioEditor";
import BusinessPortfolioEditor from "./BusinessTemplateEditor/BusinessPortfolioEditor";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  loading: {
    display: 'flex',
    marginTop: theme.spacing(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
export default function UpdatePortfolioForm (props){
  const classes = useStyles();
  // get the data from the original portfolio
  const { loading, res, error } = usePortfolio(props.portfolio_id);

  if (loading) {
    return (
        <div className={classes.loading}>
          <CircularProgress/>
        </div>
    )
  }
  if (error) {        
    return <p>Something went wrong: {error.message}</p>;
  }

  const { portfolio } = res;
 
  if (portfolio.template === "art"){
    return <ArtPortfolioEditor portfolio={portfolio} />
  }
  else if (portfolio.template === "minimal"){
    return <MinimalPortfolioEditor portfolio={portfolio} />
  }
  else if (portfolio.template === "business"){
    return <BusinessPortfolioEditor portfolio={portfolio} />
  }
  else {
    return <ArtPortfolioEditor portfolio={portfolio} />
  }
}
