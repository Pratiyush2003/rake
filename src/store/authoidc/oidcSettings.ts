const oidcSettings = {
    authority: import.meta.env.VITE_AUTH_AUTHORITY,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
    response_type: 'code',
    scope: 'openid profile email',
    post_logout_redirect_uri: import.meta.env.VITE_AUTH_POST_LOGOUT_REDIRECT_URI,
    userinfo_endpoint: import.meta.env.VITE_AUTH_USER_INFO_ENDPOINT,
    response_mode: 'query' as 'query' | 'fragment',
    code_challenge_method: 'S256',
};

export default oidcSettings