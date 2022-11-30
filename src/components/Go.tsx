import { useAuth } from "../lib/auth";


export default function Go() {
  const auth = useAuth();
  return (
    <div>
        Go
      Access Token:

      <pre>{auth.user?.access_token}</pre>
      

    </div>
  );
}
