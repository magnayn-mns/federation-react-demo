import { createContext } from "react";
import { User, UserManager } from "oidc-client-ts";

export default createContext<{
    ready: boolean;
    user: User | null;
    manager?: UserManager;
}>({ ready: false, user: null });