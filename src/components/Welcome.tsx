
import { useSignin } from "../lib/auth";

export default function Welcome() {
   
    const signin = useSignin();

  
    return (
      <div>
          <h1>Welcome</h1>
          <button onClick={signin}>Login</button>
      </div>
    );
  }
  