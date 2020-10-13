import React from 'react'
import { useUserProfile } from "../../api/userAPI"
import PortfolioEditor from "./PortfolioEditor"
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

  const defaultPortfolio = {};
  if (props.temp == 'art') 
  {
  // the default content of art portfolio
    const defaultPortfolio = {
      _id: "0",
      portfolioName: "portfolio_name",
      template: props.temp,
      userName: user.firstName + " " + user.lastName,
      backgroungImage: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602303637/fzrv3jlliersrymeamvp.jpg",
      homePage: {
        tag: "HOME",
        profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602528379/uauqeyyjvqcofbltokwg.png",
        description: "Introduction"
      },
      formalPage: {
        tag: "About",
        title: "ABOUT ME",
        pagePhoto: "",
        sections: [{
          id: "0",
          sectionTitle: "ART WORKS",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439900/bok5qj4uu6gs6s8tv2f4.png"
        },
        {
          id: "1",
          sectionTitle: "WORK EXPERIENCE",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439929/h2suzoyvdxkfm2stjood.png"
        }]
      },
      leisurePage: {
        tag: "LEISURE",
        title: "Free Time",
        pagePhoto: '',
        sections: [{
          id: "0",
          sectionTitle: "MUSIC",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602306349/w0eswzu5rddg7iejg2tx.jpg"
        },
        {
          id: "1",
          sectionTitle: "ADVENTURE",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602306364/dpm0u0lydqfgcvhdiewb.jpg"
        }]
      },
      contactPage: {
        tag: "CONTACT",
        title: "Contact Me",
        email: user.email,
        phone: user.phone,
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601543959/xiwhjc3rgetogsluhj43.jpg"
      }
    }
    return (
        <div>
          <PortfolioEditor portfolio={defaultPortfolio} />
        </div>
      )
  }
  if (props.temp == 'minimal') 
  {
  // the default content of minimal portfolio
    const defaultPortfolio = {
      _id: "0",
      portfolioName: "portfolio_name",
      template: props.temp,
      userName: user.firstName + " " + user.lastName,
      backgroungImage: "",
      homePage: {
        tag: "HOME",
        profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602526464/h1vr5pkcq7tmuof2qzar.png",
        description: "Introduction"
      },
      formalPage: {
        tag: "About",
        title: "ABOUT ME",
        pagePhoto: "",
        sections: [{
          id: "0",
          sectionTitle: "UNIVERSITY",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602526818/fowd8oi6lv4r4ehym2we.jpg",
        },
        {
          id: "1",
          sectionTitle: "WORK EXPERIENCE",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602526812/xltqyw5lebmhbmawk9y4.jpg"
        }]
      },
      leisurePage: {
        tag: "LEISURE",
        title: "Free Time",
        pagePhoto: '',
        sections: [{
          id: "0",
          sectionTitle: "MUSIC",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602527076/dmhb4kzeuworzfnw2h5n.jpg"
        },
        {
          id: "1",
          sectionTitle: "PHOTO",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602527805/eo9ectdhvplfh3pt2qbz.jpg"
        }]
      },
      contactPage: {
        tag: "CONTACT",
        title: "Contact Me",
        email: user.email,
        phone: user.phone,
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602527938/zsmjqjvssdm5ivt78bqw.jpg"
      }
    }
    return (
        <div>
          <PortfolioEditor portfolio={defaultPortfolio} />
        </div>
      )
  }

  if (props.temp == 'business') 
  {
  // the default content of business portfolio
    const defaultPortfolio = {
      _id: "0",
      portfolioName: "portfolio_name",
      template: props.temp,
      userName: user.firstName + " " + user.lastName,
      backgroungImage: "",
      homePage: {
        tag: "HOME",
        profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557613/fmkeeuionhrx8gfnxh5l.png",
        description: "Introduction"
      },
      formalPage: {
        tag: "About",
        title: "ABOUT ME",
        pagePhoto: "",
        sections: [{
          id: "0",
          sectionTitle: "EXPERIENCE",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557629/fjevxds6c5h7vcqjyib5.png",
        },
        {
          id: "1",
          sectionTitle: "EDUCATION",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557645/aywlzommatqnbcbi9cnm.png"
        }]
      },
      leisurePage: {
        tag: "LEISURE",
        title: "Free Time",
        pagePhoto: '',
        sections: [{
          id: "0",
          sectionTitle: "SKILLS",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557663/g3suhljonzg0cybjzec8.png"
        },
        {
          id: "1",
          sectionTitle: "EXPERTISE",
          sectionDescription: "Description",
          photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557669/tlb7peienpp5rphyut47.jpg",
        }]
      },
      contactPage: {
        tag: "CONTACT",
        title: "Contact Me",
        email: user.email,
        phone: user.phone,
        photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557688/snd6vsb4cihgwjrd2x7j.png"
      }
    }
    return (
        <div>
          <PortfolioEditor portfolio={defaultPortfolio} />
        </div>
      )
  }
  

  
}
