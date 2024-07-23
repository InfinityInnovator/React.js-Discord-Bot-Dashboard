import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Spinner, Text, Progress } from '@chakra-ui/react';

const Callback = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Simulate a delay to mimic a longer authentication process
      await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay

      // Replace with your actual API call to check authentication
      const response = await fetch('/auth/check');
      if (response.ok) {
        setMessage('Login request authorized');
        setLoading(false);
        setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 2 seconds
      } else {
        setMessage('Authentication failed');
        setLoading(false);
        setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.800"
      color="white"
      textAlign="center"
    >
      <Box width="100%" mb={4}>
        <Progress size="xs" isIndeterminate colorScheme="green" />
      </Box>
      <Spinner size="xl" color="green.400" mb={4} />
      <Text fontSize="xl">
        {loading ? 'Loading...' : <span style={{ color: 'green' }}>{message}</span>}
      </Text>
    </Box>
  );
};

export default Callback;
