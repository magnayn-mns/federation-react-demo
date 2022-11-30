import { useContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { isNative } from "lib/constants";
import AuthContext from "./AuthContext";
import { getRequestedUrl } from "./util";


export function useAuth() {
    return useContext(AuthContext);
}

export function useSignin() {
    const history = useNavigate();
    const auth = useAuth();

    return useCallback(() => {
        // if (isNative) {
        //     auth.manager?.signinPopup().then(() => {
        //         history.replace(getRequestedUrl());
        //     });
        // } else {

            console.log("Signin redirect");
            console.log(auth);

            auth.manager?.signinRedirect();
        // }
    }, [auth.manager, history]);
}

export function useSignout() {
    const history = useNavigate();
    const auth = useAuth();

    return useCallback(() => {
        // if (isNative) {
        //     auth.manager?.signoutPopup().then(async () => {
        //         await auth.manager?.removeUser();
        //         history.replace("/");
        //     });
        // } else {
            auth.manager?.signoutRedirect();
        // }
    }, [auth.manager, history]);
}

export function useProcessSignin() {
    const history = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        auth.manager
            ?.signinRedirectCallback()
            .then(() => {
                console.log("???");
                console.log(auth.user);
                history(getRequestedUrl(), { replace: true });
            })
            .catch((err) => {
                history("/", { replace: true });
            });
    }, [auth.manager, history]);
}

export function useProcessSignout() {
    const history = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        auth.manager?.signoutRedirectCallback().then(() => {
            history("/", { replace: true });
        });
    }, [auth.manager, history]);
}