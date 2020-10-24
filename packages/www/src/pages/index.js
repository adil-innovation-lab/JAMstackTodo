<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
=======
import React, { useEffect } from "react";
import { Container, Heading, Button, Flex } from "theme-ui";
>>>>>>> parent of 8fcece2... Working on Client Side Dashboard Route
import netlifyIdentity from "netlify-identity-widget";

export default props => {
   useEffect( () => {
       netlifyIdentity.init({});
   });
   return (
=======
import React from "react";
import { Container, Heading, Button, Flex } from "theme-ui";

export default props => (
>>>>>>> parent of 5a077f6... Added Netlify Identity
    <Container>
        <Flex sx={{ flexDirection: "column", padding: 3 }}>
            <Heading as="h1">Todo App</Heading>
            <Button sx={{ marginTop: 2, color: 'black' }}
                onClick= { () => {alert("Login")} }
            >
                Login
            </Button>
        </Flex>
    </Container>
);