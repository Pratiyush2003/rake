/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { signinRedirect , handleAuthCallback, signout } from "./actions";

const authoidcreducer = createSlice({
    name : "auth",
    initialState: {
        user: null as {
            id_token: string;         
            access_token: string;
            profile: any;
            expires_at: number;      
        } | null,
        isAuthenticated: false,
        loading: false,
        error: null as string | null,
    },
    reducers: {
        loadUserFromLocalStorage(state) {
            const userData = localStorage.getItem('user');
            if (userData) {
                const user = JSON.parse(userData);
                state.user = user;
                state.isAuthenticated = !!user.id_token;
            }
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(signinRedirect.pending, (state) => {
            state.loading = true;
        })
        .addCase(handleAuthCallback.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload; 
            state.isAuthenticated = !!action.payload.id_token; 
        })
        .addCase(handleAuthCallback.rejected, (state) => {
            state.loading = false;
            state.error = 'Login failed';
        })
        .addCase(signout.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.user = null;
        });
    },
});

export const { loadUserFromLocalStorage } = authoidcreducer.actions; 
export default authoidcreducer.reducer;
