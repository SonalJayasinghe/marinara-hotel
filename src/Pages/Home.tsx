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
import Footer from "../components/Footer";
import PeopleSay from "../components/PeopleSay";

function Home() {
  useEffect(() => {
    document.title = "Welcome to Castle Hotel";
  }, []);

  return (
    <>
      <Flex>
        <VStack width="100%">
          
        <Box w="100%" position={"fixed"}>
          <NavBar/>
        </Box>

        <Box w="100%" marginTop={"95px"}>
            <Hero/>
            <Center marginY={-70}>
            <HeroCard/>
            </Center>
        </Box>

        <Box w="100%" marginTop={40} >
          <Center>
          <Heading> What People Say...</Heading>
          </Center>
        </Box>


        <Box w="90%" marginTop={6}>
          <Center>
          <PeopleSay/>
          </Center>
        </Box>

        <Box w="100%" marginTop={"5vh"}>
          <Footer/>
        </Box>


        </VStack>
      </Flex>
    </>
  );
}

export default Home;
