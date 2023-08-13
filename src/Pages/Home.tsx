import {
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";
import Hero from "../components/HeroComponent/Hero";
import HeroCard from "../components/HeroComponent/HeroCard";

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
            <Center marginY={-70}>
            <HeroCard/>
            </Center>
        </Box>

        <Box w="100%" marginTop={40} >
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
