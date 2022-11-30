
import React, { useEffect, createContext, useState, useContext } from "react";
import { useAuth } from "./lib/auth";

let token: string | undefined;

const HasTokenContext = createContext(false);

export function TokenSyncProvider(props: { children: React.ReactNode }) {
  const auth = useAuth();
  const accessToken = auth?.user?.access_token;
  // Flag stored in state so we can be sure that getToken isn't behind context.
  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    token = accessToken;
    setHasToken(!!accessToken);
  }, [accessToken]);
  return (
    <HasTokenContext.Provider value={hasToken}>
      {props.children}
    </HasTokenContext.Provider>
  );
}

export function useHasToken() {
  return useContext(HasTokenContext);
}

export function getToken() {
  return token;
}
