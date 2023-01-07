import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link } from "@chakra-ui/react";

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
      <Link href="https://github.com/hotaosa/rayleigh_damping" isExternal fontWeight="bold">
        GitHub <ExternalLinkIcon mx='2px' />
      </Link>
    </Flex>
  );
};
