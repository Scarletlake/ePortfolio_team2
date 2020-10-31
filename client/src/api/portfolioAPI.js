import { useState, useEffect } from "react";

//const BASE_URL = "http://pandaeportfolio.herokuapp.com/api";


// get portfolio
export default async function getPortfolio(portfolioID) {
  const endpoint = "/api/portfolio/" + portfolioID;

  const res = await fetch(endpoint, {
    method: "GET",
    credentials: 'include',
    headers: {
      "credentials": 'include',
      'content-Type': "application/json"
    },
  });

  return res.json();
}


// create a new portfolio
export async function createPortfolio(portfolio) {

  const endpoint = `/api/portfolio/new`;
  const { portfolioName, template, userName, backgroundImage, homePage, formalPage, leisurePage, contactPage } = portfolio;

  const res = await fetch(endpoint, {
    method: "POST",
    credentials: 'include',
    headers: {
      "credentials": 'include',
      "Accept": 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      portfolioName: portfolioName,
      template: template,
      userName: userName,
      backgroundImage: backgroundImage, 
      homePage: homePage,
      formalPage: formalPage,
      leisurePage: leisurePage,
      contactPage: contactPage
    })
  });

  if (res.status === 200) {

  } else if (res.status === 401) {
    alert("Log in first to create your portfolio");
    window.location.replace("/user/signin");
  } else {
    alert("Unable to create the portfolio");
  }

  return res.json();
}

// create a new portfolio
export async function updatePortfolio(portfolio) {

  const endpoint = `/api/portfolio/`;
  const { portfolioID, portfolioName, template, userName, backgroundImage, homePage, formalPage, leisurePage, contactPage } = portfolio;

  const res = await fetch(endpoint + portfolioID, {
    method: "POST",
    credentials: 'include',
    headers: {
      "credentials": 'include',
      "Accept": 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      portfolioName: portfolioName,
      template: template,
      userName: userName,
      homePage: homePage,
      backgroundImage: backgroundImage,
      formalPage: formalPage,
      leisurePage: leisurePage,
      contactPage: contactPage
    })
  });

  if (res.status === 200) {

  } else if (res.status === 401) {
    alert("Log in first to create your portfolio");
    window.location.replace("/user/signin");
  } else {
    alert("Unable to create the portfolio");
  }

  return res.json();
}


// delete the portfolio
export function deletePortfolioByID(portfolioID) {
  const endpoint = `/api/portfolio/`;

  const res = fetch(endpoint + portfolioID, {
    credentials: 'include',
    headers: {
      "credentials": 'include',
      "Content-Type": "application/json"
    },
    method: "DELETE",
  });
  return res;
}


export function usePortfolio(portfolioID) {
  const [loading, setLoading] = useState(true);
  const [res, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPortfolio(portfolioID)
      .then(res => {
        setResponse(res);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, [portfolioID]);

  return {
    loading,
    res,
    error
  };
} 