// src/components/Navbar.js
import React from 'react';
import { Flex, Box, Text, Link, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    // For example, clearing session and redirecting to login
    window.location.href = '/logout'; // Assuming logout is handled by the server
  };

  return (
    <Flex
      as="nav"
      bg="gray.900"
      color="white"
      padding={4}
      align="center"
      justify="space-between"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">My Dashboard</Text>
      </Box>
      <Flex>
        <Link
          href="/"
          mx={4}
          _hover={{ textDecoration: 'none', color: 'gray.300' }}
        >
          Home
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;