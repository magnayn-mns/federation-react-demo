// import { Plugins } from "@capacitor/core";
import React, { useState, useMemo, useEffect } from "react";
import { UserManager, User } from "oidc-client-ts";
//import { useStage } from "lib/stage";
import AuthContext from "./AuthContext";
import config, { authConfig } from '../../config';

// const { App } = Plugins;

let isActive = true;
let activeResolvers: (() => void)[] = [];
// App.addListener("appStateChange", (state) => {
//     if (!isActive && state.isActive) {
//         for (const r of activeResolvers) {
//             r();
//         }
//     }
//     isActive = state.isActive;
// });
function waitActive() {
    return new Promise<void>((r) => {
        if (isActive) {
            r();
        } else {
            activeResolvers.push(r);
        }
    });
}

export default function AuthProvider(props: { children: React.ReactNode }) {
    //const [stage] = useStage();
    //const config = stage === "prod" ? prodConfig : testConfig;
    const manager = useMemo(() => new UserManager(authConfig), [config]);
    const [state, setState] = useState({
        ready: false,
        user: null as User | null,
    });
    useEffect(() => {
        manager.getUser().then((user) => {
            console.log("GOT USER ");
            console.log(user);
            setState({ ready: true, user });
        });
        manager.events.addUserLoaded((user) => {
            console.log("GOT USER LOADED ");
            console.log(user);
            console.log(user.access_token);
            localStorage.setItem('token', user.access_token);
            setState({ ready: true, user });
        });
        manager.events.addUserSignedOut(() => {
            manager.clearStaleState();
            setState({ ready: true, user: null });
        });
        manager.events.addUserUnloaded(() => {
            manager.clearStaleState();
            setState({ ready: true, user: null });
        });
        manager.events.addAccessTokenExpiring(async () => {
            await waitActive();
            try {
                await manager.signinSilent();
            } catch (error) {
                console.error("couldn't refresh token: ", error);
            }
        });
        manager.events.addAccessTokenExpired(async () => {
            await waitActive();
            try {
                await manager.signinSilent();
            } catch (error) {
                console.error("couldn't refresh token: ", error);
                manager.clearStaleState();
                setState({ ready: true, user: null });
            }
        });
    }, [manager]);
    return (
        <AuthContext.Provider value={{ ...state, manager }}>
            {props.children}
        </AuthContext.Provider>
    );
}