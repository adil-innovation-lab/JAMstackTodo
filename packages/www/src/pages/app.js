import React from "react";
import { Router, Link } from "@reach/router";
import netlifyIdentity from "netlify-identity-widget";

let Dash = () => {
    const user = netlifyIdentity.currentUser();

    return <div>{user && user.user_metadata.full_name}</div>
}

export default props => {
    return (
        <Router>
        <Dash path="/app" />
      </Router>
    );
};