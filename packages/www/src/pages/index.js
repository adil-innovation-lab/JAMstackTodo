import React, { useEffect, useState } from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";
import { Link } from 'gatsby';

export default props => {
    const [user, setUser] = useState();

   useEffect( () => {
       netlifyIdentity.init({});
   });

   netlifyIdentity.on("login", user => {
       netlifyIdentity.close();
       setUser(user);
   });

   netlifyIdentity.on("logout", () => {
       netlifyIdentity.close();
       setUser();
   });

   return (
    <Container>
        <Flex as='nav'>
            <NavLink as={Link} to="/" p={2}>
                Home
            </NavLink>
            <NavLink as={Link} to={"/app"} p={2}>
                Dashboard
            </NavLink>
            {user && (<NavLink p={2}>
                {user.user_metadata.full_name}
            </NavLink>)}
        </Flex>
        <Flex sx={{ flexDirection: "column", padding: 3 }}>
            <Heading as="h1">Todo App</Heading>
            <Button sx={{ marginTop: 2, color: 'black' }}
                onClick= { () => { netlifyIdentity.open() } }
            >
                Login
            </Button>
        </Flex>
    </Container>
)}