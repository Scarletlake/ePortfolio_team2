import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function userSignin(user) {
    const endpoint = BASE_URL + "/user/signin";

    const {email, password} = user;

    const res = fetch(endpoint,{

        method: "POST",
        headers:{
            "credentials": 'include',
            'content-Type': "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return res;
}

export function userSignUp(user){
    const endpoint = BASE_URL + "/user/signup";

    const {email, password} = user;

    const res = fetch(endpoint, {
        method: "POST",
        headers: {
            "credentials": 'include',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

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
    var d = new Date();
    d.setTime(d.getTime() - 1);
    var expires = "expires="+d.toUTCString();
    document.cookie = "Authorization" + "=" + "" + "; " + expires;
    alert("logout!");
}
  