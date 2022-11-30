import { Routes, Route, Navigate, Outlet } from "react-router";


import Home from "./components/Home";
import Welcome from "./components/Welcome";
import { User } from "oidc-client-ts";
import Go from "./components/Go";
import { saveRequestUrl } from "./lib/auth/util";
import { SigninCallback } from "./App";
import { useAuth } from "./lib/auth";


//{user, redirectPath = '/welcome', children) => {
const ProtectedRoute = (props:any) => {
    console.log("ProtectedRoute");
    const auth = props.auth;
    console.log(auth);
    if (!auth.ready) return <></>;
   if (!auth.user) {
    saveRequestUrl();
       console.log("No user");
       return <Navigate to={props.redirectPath} replace />
    }
    
    //return <div>yip</div>;
    return props.children ? props.children : <Outlet />;
  };

export default function AppRoutes() {

const auth = useAuth();
console.log(auth);
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome/>} />    
      <Route path="/home" element={ <SigninCallback />} />
      <Route path="/go" element={<div> <a>{"user " + auth.user}</a> <ProtectedRoute  redirectPath="/welcome" auth={auth}><Go/></ProtectedRoute></div>} />      
        
    </Routes>
  );
}
