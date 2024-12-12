import { createAsyncThunk } from "@reduxjs/toolkit";
import oidcSettings from "./oidcSettings";
import { UserManager, User } from "oidc-client-ts";
const userManager = new UserManager(oidcSettings);

export const signinRedirect = createAsyncThunk('auth/signinRedirect', async () => {
    await userManager.signinRedirect();
})

export const handleAuthCallback = createAsyncThunk(
    'auth/handleAuthCallback',
    async () => {
        const user: User = await userManager.signinRedirectCallback();
        const userInfoResponse = await fetch(oidcSettings.userinfo_endpoint, {
            headers : {
                Authorization: `Bearer ${user.access_token}`,
            }
        })

        if (!userInfoResponse.ok) {
            throw new Error('Failed to fetch user info');
        }

        const userInfo = await userInfoResponse.json();
        console.log(userInfo)
        localStorage.setItem('user', JSON.stringify({
            id_token: user.id_token || '',
            access_token: user.access_token,
            profile: userInfo,  
            expires_at: user.expires_at || 0,
        }));

        return {
            id_token: user.id_token || '',
            access_token: user.access_token,
            profile: userInfo,  
            expires_at: user.expires_at || 0,
        };
    }
)

export const signout = createAsyncThunk('auth/signout', async() => {
    try {      
        localStorage.removeItem('user'); 
     } catch (error) {
         console.error('Sign out error:', error);
         throw error; 
     }
})