import { useEffect, useState } from "react";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;


const useToken = () => {
    const [token, setToken] =useState("");

    useEffect(()=>{
        const authParms = {
            method: 'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        };

        const getToken = async() => {
            const res = await fetch('https://accounts.spotify.com/api/token', authParms);
            const data = await res.json();
            setToken(data.access_token);
        };

        getToken();
    },[]);


    return token;
};

export default useToken;