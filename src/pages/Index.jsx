import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const colognes = [
  {
    id: 1,
    name: "Aqua Di Gio",
    price: 80,
    image: "https://images.unsplash.com/photo-1504801019156-beabdea673be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBcXVhJTIwRGklMjBHaW8lMjBjb2xvZ25lfGVufDB8fHx8MTcxMDg5NTk0MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Sauvage",
    price: 90,
    image: "https://images.unsplash.com/photo-1504801019156-beabdea673be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTYXV2YWdlJTIwY29sb2duZXxlbnwwfHx8fDE3MTA4OTU5NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Bleu de Chanel",
    price: 100,
    image: "https://images.unsplash.com/photo-1618597865230-affadcdb74cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCbGV1JTIwZGUlMjBDaGFuZWwlMjBjb2xvZ25lfGVufDB8fHx8MTcxMDg5NTk0MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Creed Aventus",
    price: 300,
    image: "https://images.unsplash.com/photo-1504801019156-beabdea673be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDcmVlZCUyMEF2ZW50dXMlMjBjb2xvZ25lfGVufDB8fHx8MTcxMDg5NTk0MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (cologne) => {
    setCart([...cart, cologne]);
  };

  const removeFromCart = (cologne) => {
    setCart(cart.filter((c) => c.id !== cologne.id));
  };

  return (
    <Box>
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl">Welcome to our Cologne Store</Heading>
        <Text fontSize="xl" mt={6}>Discover our latest featured fragrances</Text>
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={10}>
        {colognes.map((cologne) => (
          <Box key={cologne.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={cologne.image} alt={cologne.name} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
              <Heading size="md" mt={2}>
                {cologne.name}
              </Heading>
              <Text color="blue.600" fontSize="2xl">
                ${cologne.price}
              </Text>
              <Button mt={4} colorScheme="blue" onClick={() => addToCart(cologne)}>
                Add to cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>

            <DrawerBody>
              {cart.length === 0 ? (
                <Text>Your cart is empty</Text>
              ) : (
                <>
                  {cart.map((cologne) => (
                    <Flex key={cologne.id} alignItems="center" mb={4}>
                      <Image src={cologne.image} alt={cologne.name} boxSize="100px" objectFit="cover" mr={4} />
                      <Box>
                        <Heading size="sm">{cologne.name}</Heading>
                        <Text fontSize="sm" color="gray.500">
                          ${cologne.price}
                        </Text>
                        <Button size="xs" mt={2} onClick={() => removeFromCart(cologne)}>
                          Remove
                        </Button>
                      </Box>
                    </Flex>
                  ))}
                  <Text fontSize="lg" fontWeight="bold">
                    Total: ${cart.reduce((sum, c) => sum + c.price, 0)}
                  </Text>
                </>
              )}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
