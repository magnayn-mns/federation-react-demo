import { useAuth } from "../lib/auth";




export default function Home() {
  
    const auth = useAuth();

    function doLogin() {
        //auth.manager.signinRedirectCallback()
      }
      // Usage
     

  return (
    <div>
        Home
    
    </div>
  );
}
