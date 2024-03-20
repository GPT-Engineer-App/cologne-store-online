import React from 'react';
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.100" py={10} mt={20}>
      <Flex maxW="6xl" mx="auto">
        <Text>&copy; 2024 Cologne Store. All rights reserved.</Text>
        <Spacer />
        <Text>Privacy Policy | Terms of Service</Text>
      </Flex>
    </Box>
  )
}

export default Footer;