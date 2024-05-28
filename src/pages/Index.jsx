import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Chicken Curry",
    description: "A flavorful and spicy chicken curry made with a blend of spices and coconut milk.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">RecipeShare</Heading>
        <HStack spacing={8}>
          <Link href="#home">Home</Link>
          <Link href="#recipes">Recipes</Link>
          <Link href="#submit">Submit a Recipe</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" id="home" bg="gray.100" py={20} textAlign="center">
        <Heading mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="lg" mb={6}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg">Submit a Recipe</Button>
      </Box>

      {/* Recipes Section */}
      <Box as="section" id="recipes" py={20}>
        <Heading textAlign="center" mb={10}>Our Recipes</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading size="md" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us at: info@recipeshare.com</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;