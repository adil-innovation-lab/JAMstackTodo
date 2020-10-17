import React from "react";
import { Container, Heading, Button, Flex } from "theme-ui";

export default props => (
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