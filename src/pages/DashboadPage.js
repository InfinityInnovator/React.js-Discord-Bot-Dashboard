// DashboardPage.js
import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardPage = () => {

  return (
    <Box display="flex" height="100vh">
          <Sidebar />
          <Box
            flex="1"
            ml={{ base: 0, md: '250px' }} // Adjust margin for larger screens
            mb="60px" // Ensure space for the navbar
            p={4}
            overflow="auto"
          >
            <Navbar />
        </Box>
    </Box>
  );
};

export default DashboardPage;
