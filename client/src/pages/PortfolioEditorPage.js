import React from 'react';
import { useUserProfile } from '../api/userAPI'
import Editor from '../components/Editor'

export default function PortfolioEditorPage() {

  const { loading, user, error } = useUserProfile();


  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }


  const { firstName, lastName, email, phone, gender } = user;


  return (
    <div>
      <Editor firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        gender={gender} />
    </div>
  )
}
