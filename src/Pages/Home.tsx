import {
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    document.title = "Welcome to Castle Hotel";
  }, []);

  return (
    <>
      <Flex>
        <VStack width="100%">
          
        <Box w="100%">
          <NavBar/>
        </Box>

        <Box w="100%" marginTop={8}>
            <Hero/>
        </Box>

        <Box w="100%" marginY={20} bgColor={"red"} >
          <Center>
          <Heading> T</Heading>
          </Center>
        </Box>


        </VStack>
      </Flex>
    </>
  );
}

export default Home;
