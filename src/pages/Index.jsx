import React from "react";
import { Box, Button, Container, Heading, Text, Stack, Image, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRocket, FaCloud, FaLock, FaPlus } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} textAlign={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("blue.500", "blue.300")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 6, md: 10 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Build Your Next <br />
          <Text as={"span"} color={"blue.400"}>
            SaaS Solution
          </Text>
        </Heading>
        <Text color={"gray.500"}>Our platform provides one-stop solutions for managing your SaaS business with ease. Launch your product, market to customers, and scale without the technical headaches.</Text>
        <Stack spacing={6} direction={"row"} align={"center"} alignSelf={"center"} position={"relative"}>
          <Button
            colorScheme={"blue"}
            bg={"blue.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "blue.500",
            }}
          >
            Get Started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn More
          </Button>
          <Box position={"absolute"} right={{ base: "-16", sm: "-10" }} top={"-16"}>
            <Icon as={FaRocket} color={"blue.400"} w={10} h={10} />
          </Box>
        </Stack>
      </Stack>

      <Flex align={"center"} justify={"center"} my={20}>
        <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1634496994539-ebffdbfe6e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBoZXJvfGVufDB8fHx8MTcwODkzOTUxN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
      </Flex>

      <Stack spacing={20}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align={"center"} justify={"center"}>
          <Feature icon={<Icon as={FaCloud} w={10} h={10} />} title={"Cloud-Based"} text={"All your data is securely stored and accessible in the cloud. Work from anywhere, anytime."} />
          <Feature icon={<Icon as={FaLock} w={10} h={10} />} title={"Secure"} text={"We use the latest encryption and security practices to ensure your data is protected."} />
          <Feature icon={<Icon as={FaPlus} w={10} h={10} />} title={"Integrations"} text={"Integrate seamlessly with the tools and services you already use and love."} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
