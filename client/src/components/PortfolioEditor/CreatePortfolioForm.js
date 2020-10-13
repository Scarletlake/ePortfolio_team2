import React from 'react'
import { useUserProfile } from "../../api/userAPI"
import ArtPortfolioEditor from "./ArtTemplateEditor/ArtPortfolioEditor";
//import MinimalPortfolioEditor from "./MinimalTemplateEditor/MinimalPortfolioEditor";
//import BusinessPortfolioEditor from "./BusinsessTemplateEditor/BusinessPortfolioEditor";
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
export default function CreatePortfolioform(props) {
  const classes = useStyles();
  // load the 
  const { loading, user, error } = useUserProfile();


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


  // the default content of portfolio
  const defaultPortfolio = {
    _id: "0",
    portfolioName: "portfolio_name",
    template: props.temp,
    userName: user.firstName + " " + user.lastName,
    backgroundImage: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602303637/fzrv3jlliersrymeamvp.jpg",
    homePage: {
      tag: "HOME",
      profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602394611/kqwiwuxyi0dbncbi6x8s.png",
      description: "Introduction"
    },
    formalPage: {
      tag: "About",
      title: "ABOUT ME",
      pagePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602407981/plcbsaflnqthvk7rpnmb.png",
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png",
      sections: [{
        id: "0",
        sectionTitle: "University",
        sectionDescription: "Description",
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439900/bok5qj4uu6gs6s8tv2f4.png"
      },
      {
        id: "1",
        sectionTitle: "Working",
        sectionDescription: "Description",
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439929/h2suzoyvdxkfm2stjood.png"
      }]
    },
    leisurePage: {
      tag: "LEISURE",
      title: "Free Time",
      pagePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602443847/wk4tyawn3posmcw9tq65.png",
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png",
      sections: [{
        id: "0",
        sectionTitle: "Arts",
        sectionDescription: "Description",
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602306349/w0eswzu5rddg7iejg2tx.jpg"
      },
      {
        id: "1",
        sectionTitle: "Sports",
        sectionDescription: "Description",
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602306364/dpm0u0lydqfgcvhdiewb.jpg"
      }]
    },
    contactPage: {
      tag: "CONTACT",
      title: "Contact Me",
      email: user.email,
      phone: user.phone,
      //photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601543959/xiwhjc3rgetogsluhj43.jpg",
      photo: user.avatar,
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png",
    }
  }


  if (props.temp === "art"){
    return <ArtPortfolioEditor portfolio={defaultPortfolio} />
  }
  else if (props.temp === "minimal"){
    return <ArtPortfolioEditor portfolio={defaultPortfolio} />
  }
  else if (props.temp === "business"){
    return <ArtPortfolioEditor portfolio={defaultPortfolio} />
  }
  else {
    return <ArtPortfolioEditor portfolio={defaultPortfolio} />
  }
}
