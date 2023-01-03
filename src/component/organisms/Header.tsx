import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Heading as="h1" fontSize="lg">
        Rayleigh Damping Calculator
      </Heading>
    </Flex>
  );
};
