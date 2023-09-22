import React from "react";
import Wrapper from "./Wrapper";
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    // const user = "test";
    if (isLoading) {
        return (
            <div className="flex justify-center items-center">Loading ...</div>
        );
    }
    return (
        <>
            <div>
                {/* <Wrapper user={user} /> */}
                {isAuthenticated && <Wrapper user={user} />}
            </div>
        </>
    );
};

export default Main;
