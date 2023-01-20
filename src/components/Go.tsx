import { useAuth } from "../lib/auth";
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

export default function Go() {
  const auth = useAuth();
  return (
    <div>
        Go
      Access Token:

      <pre>{ "{\"Authorization\": \"Bearer " + auth.user?.access_token + "\"}"}</pre>
   
    </div>
  );
}
