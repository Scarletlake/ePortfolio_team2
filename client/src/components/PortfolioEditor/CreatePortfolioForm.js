import React from 'react'
import { useUserProfile } from "../../api/userAPI"
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
  const defaultArtPortfolio = {
    _id: "0",
    portfolioName: "portfolio_name",
    template: props.temp,
    userName: user.firstName + " " + user.lastName,
    backgroundImage: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604108666/sjkfvqapldxrxuiw8lph.jpg",
    homePage: {
      tag: "HOME",
      profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602394611/kqwiwuxyi0dbncbi6x8s.png",
      description: "Introduction"
    },
    formalPage: {
      tag: "ABOUT",
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
      photo: user.avatar,
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png",
    }
  }

  const defaultMinimalPortfolio = {
    _id: "0",
    portfolioName: "portfolio_name",
    template: props.temp,
    userName: user.firstName + " " + user.lastName,
    backgroundImage: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604059520/vn2lhtgguax4x9u6c7mh.jpg",
    homePage: {
      tag: "HOME",
      profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602526464/h1vr5pkcq7tmuof2qzar.png",
      description: "Introduction"
    },
    formalPage: {
      tag: "About",
      title: "ABOUT ME",
      pagePhoto: "",
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604106272/b7oonk3pd3czdhlvqh9d.jpg",
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
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604106272/b7oonk3pd3czdhlvqh9d.jpg",
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
      photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602527938/zsmjqjvssdm5ivt78bqw.jpg",
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604106272/b7oonk3pd3czdhlvqh9d.jpg",
    }
  }

  const defaultBusinessPortfolio = {
    _id: "0",
    portfolioName: "portfolio_name",
    template: props.temp,
    userName: user.firstName + " " + user.lastName,
    backgroundImage: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604108023/lclxqkxtatp81bmkawdg.jpg",
    homePage: {
      tag: "HOME",
      profilePhoto: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557613/fmkeeuionhrx8gfnxh5l.png",
      description: "Introduction"
    },
    formalPage: {
      tag: "About",
      title: "ABOUT ME",
      pagePhoto: "",
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603905346/knqtpdid10lzpcriw29s.jpg",
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
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603905346/knqtpdid10lzpcriw29s.jpg",
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
      photo: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602557688/snd6vsb4cihgwjrd2x7j.png",
      textBackground: "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603905346/knqtpdid10lzpcriw29s.jpg",
    }
  }


  if (props.temp === "art"){
    return <ArtPortfolioEditor portfolio={defaultArtPortfolio} />
  }
  else if (props.temp === "minimal"){
    return <MinimalPortfolioEditor portfolio={defaultMinimalPortfolio} />
  }
  else if (props.temp === "business"){
    return <BusinessPortfolioEditor portfolio={defaultBusinessPortfolio} />
  }
  else {
    return <MinimalPortfolioEditor portfolio={defaultMinimalPortfolio} />
  }
}
