import React from 'react';
import { Box, Flex, Text, Link, VStack, IconButton, useDisclosure, Avatar, Divider, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SettingsIcon, InfoOutlineIcon, AtSignIcon, EditIcon, QuestionIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      direction="column"
      width={{ base: isOpen ? 'full' : '60px', md: '250px' }}
      height="100vh"
      bg="gray.900"
      color="white"
      p={4}
      position="fixed"
      top={0}
      left={0}
      transition="width 0.3s ease"
      zIndex={1}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <IconButton
          aria-label="Open Sidebar"
          icon={<HamburgerIcon />}
          size="lg"
          colorScheme="teal"
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          display={{ base: isOpen ? 'none' : 'block', md: 'none' }}
          onClick={onOpen}
        />
        <IconButton
          aria-label="Close Sidebar"
          icon={<CloseIcon />}
          size="lg"
          colorScheme="teal"
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
          onClick={onClose}
        />
        <Avatar size="md" name="User Name" src="https://bit.ly/sage-adebayo" display={{ base: 'block', md: 'none' }} />
      </Flex>
      
      <Flex align="center" mb={6} display={{ base: 'none', md: 'flex' }}>
        <Avatar size="lg" name="User Name" src="https://bit.ly/sage-adebayo" />
        <Box ml={3}>
          <Text fontSize="lg" fontWeight="bold">User Name</Text>
          <Text fontSize="sm" color="gray.400">user@example.com</Text>
        </Box>
      </Flex>
      
      <Divider mb={4} borderColor="gray.600" display={{ base: isOpen ? 'block' : 'none', md: 'block' }} />
      
      <VStack
        spacing={4}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        align="start"
      >
        <Heading as="h3" size="sm" color="gray.400">General</Heading>
        <Link as={RouterLink} to="/dashboard" display="flex" alignItems="center">
          <EditIcon mr={2} />
          <Text fontSize="lg" _hover={{ textDecoration: 'underline' }}>Dashboard</Text>
        </Link>
        <Link as={RouterLink} to="/profile" display="flex" alignItems="center">
          <AtSignIcon mr={2} />
          <Text fontSize="lg" _hover={{ textDecoration: 'underline' }}>Profile</Text>
        </Link>
        
        <Heading as="h3" size="sm" color="gray.400" mt={4}>Settings</Heading>
        <Link as={RouterLink} to="/settings" display="flex" alignItems="center">
          <SettingsIcon mr={2} />
          <Text fontSize="lg" _hover={{ textDecoration: 'underline' }}>Account Settings</Text>
        </Link>
        <Link as={RouterLink} to="/privacy" display="flex" alignItems="center">
          <InfoOutlineIcon mr={2} />
          <Text fontSize="lg" _hover={{ textDecoration: 'underline' }}>Privacy Settings</Text>
        </Link>

        <Heading as="h3" size="sm" color="gray.400" mt={4}>Support</Heading>
        <Link as={RouterLink} to="/help" display="flex" alignItems="center">
          <QuestionIcon mr={2} />
          <Text fontSize="lg" _hover={{ textDecoration: 'underline' }}>Help Center</Text>
        </Link>
        <Link as={RouterLink} to="/contact" display="flex" alignItems="center">
          <AtSignIcon mr={2} />
          <Text fontSize="lg" _hover={{ textDecoration: 'underline' }}>Contact Us</Text>
        </Link>
        {/* Add more categories and links as needed */}
      </VStack>
      
      <Divider mt={6} borderColor="gray.600" display={{ base: isOpen ? 'block' : 'none', md: 'block' }} />
      
      <Box mt={6} display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
        <Text fontSize="sm" color="gray.400">© 2024 Your Company</Text>
      </Box>
    </Flex>
  );
};

export default Sidebar;
