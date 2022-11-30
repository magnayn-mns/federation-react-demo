
import { useSignin } from "../lib/auth";

export default function Welcome() {
   
    const signin = useSignin();

  
    return (
      <div>
          Welcome
          <button onClick={signin}>Login</button>
      </div>
    );
  }
  