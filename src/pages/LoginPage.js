// src/pages/Login.js
import React from 'react';
import { Flex, Button, Text, Box } from '@chakra-ui/react';

const Login = () => {
  const discordAuthURL = `https://discord.com/oauth2/authorize?client_id=1161839731286478989&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds`;

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      bg="gray.800"
      color="white"
      direction="column"
      textAlign="center"
    >
      <Box>
        <Text fontSize="2xl" mb={4}>
          Welcome to the Discord Bot Dashboard
        </Text>
        <Button
          as="a"
          href={discordAuthURL}
          colorScheme="blue"
          size="lg"
          variant="solid"
        >
          Login with Discord
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
