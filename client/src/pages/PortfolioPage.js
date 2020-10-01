import React from 'react'
import { useParams } from "react-router-dom";
import { usePortfolio } from "../api/portfolioAPI"

export default function PortfolioPage() {

  const { id } = useParams();
  const { loading, res, error } = usePortfolio(id);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const { portfolio } = res;

  return (
    <div>
      <p>{portfolio.portfolioName} </p>
      <p>{portfolio.userName} </p>
      <p>{portfolio.homePage.description}</p>
      <img src={portfolio.homePage.profilePhoto} />
      <p>{portfolio.portfolioURL} </p>
      <p>{portfolio.contactPage.email} </p>
    </div>
  )
}
