import React, { createContext, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo-client";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from './AppRoutes';
import { authConfig } from "./config";

import { useProcessSignout, useProcessSignin, useAuth, AuthProvider } from './lib/auth';


export function SignoutCallback() {
  useProcessSignout();
  return <></>;
}

export function SigninCallback() {
useProcessSignin();

const auth = useAuth();


return (
    <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
    >
    Redirecting...

    </div>
);
}

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider {...authConfig}>
        <BrowserRouter basename="/app">
        <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  
  );
}

export default App;
