import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex align="center" maxW="6xl" mx="auto">
        <Link as={RouterLink} to="/" fontWeight="bold">
          Cologne Store
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/products" mr={4}>
          Products
        </Link>
        <Link as={RouterLink} to="/about" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" mr={4}>
          Contact
        </Link>
        <Link as={RouterLink} to="/checkout" mr={4}>
          Checkout
        </Link>
        <Link as={RouterLink} to="/faq">
          FAQ
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
