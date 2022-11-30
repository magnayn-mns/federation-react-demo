import { UserManagerSettings, WebStorageStateStore } from "oidc-client-ts";


const commonAuthConfig = {
  response_type: "code",
  scope: "offline_access openid store.marksandspencer",
  monitorSession: false,
  userStore: new WebStorageStateStore({ store: localStorage }),
};


const dev = {
  graphql: {
    url: `http://${window.location.hostname}:8080/graphql`
  }
}

const prod = {
  graphql: {
    url: "/graphql",
  }
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

const { origin } = window.location;
// default/oauth2/authorize?acr_values=SU5URVJBQ1RJVkU
export const authConfig = {
  ...commonAuthConfig,
  client_id: "34038b3240d2423fa63b0b5f6b8541cb",
  authority: "https://auth-dev.ciam.marksandspencer.com/default/",
  redirect_uri: `${origin}/app/home`,
  post_logout_redirect_uri: `${origin}/app/logout`,
};


export default config;
