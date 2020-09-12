import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000/api";

export default async function userSignIn(user) {
    const endpoint = BASE_URL + "/user/signin";

    const {email, password} = user;
    
    const res = await fetch(endpoint,{

        method: "POST",
        credentials: 'include',
        headers:{
            "credentials": 'include',
            'content-Type': "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    console.log(res);
    return res;
}

export async function userSignUp(user) {
    const endpoint = BASE_URL + "/user/signup";
    const {email, password} = user;
  
    const res = await fetch(endpoint, {
        method: "POST",
        credentials: 'include',
        headers: {
        "credentials": 'include',
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        email,
        password
        })
    });
    console.log(res);
    return res;
}

export async function getUserProfile() {
      const endpoint = `/users/profile`;
    
      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          "credentials": 'include',
          "Accept": 'application/json'
        }
      });
      
      return res.json();
}



// logout by clearing cookie
export function userLogOut() {      
    document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    alert("logout!");
    window.location.replace("/");
}
  

export function useUserProfile() {
    const [loading, setLoading] = useState(true);
    const [user, setResponse] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      getUserProfile()
        .then(user => {
          setResponse(user);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setError(e);
          setLoading(false);
        });
    },[]);
  
    return {
      loading,
      user,
      error
    };
  }