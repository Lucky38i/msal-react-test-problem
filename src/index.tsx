import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app/App";
import {Configuration, PublicClientApplication} from "@azure/msal-browser";
import {MsalProvider} from "@azure/msal-react";

// This is temporary to ensure the Login UI works, should be removed in SVA-4736
const configuration: Configuration = {
  auth: {
    clientId: "N/A",
    authority: `N/A`,
  }
}

const pca = new PublicClientApplication(configuration)

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App/>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
