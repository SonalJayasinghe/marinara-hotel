import {
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Hero from "../components/HeroComponent/Hero";
import HeroCard from "../components/HeroComponent/HeroCard";
import Footer from "../components/Footer";
import PeopleSay from "../components/PeopleSay";
import ShowCaseGrid from "../components/ShowcaseComponent/ShowCaseGrid";

function Home() {

  const pgNo = 0;

  useEffect(() => {
    document.title = "Welcome to Marinara Hotel";
  }, []);


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <>
      <Flex minH={"100vh"}>
        <VStack width="100%">
          
        <Box w="100%" position={"fixed"} zIndex={2}>
          <NavBar pgNo={pgNo}/>
        </Box>

        <Box w="100%" marginTop={"95px"}>
            <Hero/>
            <Center marginY={-70}>
            <HeroCard/>
            </Center>
        </Box>

        <Box w="100%" marginTop={40} >
          <Center>
          <Heading> Our Speciality... </Heading>
          </Center>
        </Box>

        <Box w="90%" margin={6} 
         >
          <Center>
          <ShowCaseGrid/>
          </Center>
        </Box>


        <Box w="100%" marginTop={'60px'} >
          <Center>
          <Heading> What People Say...</Heading>
          </Center>
        </Box>


        <Box w="90%" marginTop={6}>
          <Center>
          <PeopleSay/>
          </Center>
        </Box>


        <Box w="100%" marginTop={"auto"} >
          <Footer/>
        </Box>


        </VStack>
      </Flex>
    </>
  );
}

export default Home;
