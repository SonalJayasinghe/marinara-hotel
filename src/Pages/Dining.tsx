import {
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import DiningShowcaseGrid from "../components/DiningShowcase/DiningShowcaseGrid";
import AccordationDining from "../components/Accordation_DIning";

function Dining() {
  useEffect(() => {
    document.title = "Dining";
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <>
      <Flex minH={"100vh"}>
        <VStack width="100%">
          
        <Box w="100%" position={"fixed"} zIndex={2}>
          <NavBar/>
        </Box>

        <Box w="100%" marginTop={'95px'} >
          <Center>
          <Heading> Let's Taste... </Heading>
          </Center>
        </Box>

        <Box w="90%" marginTop={6}
         >
          <Center>
          <DiningShowcaseGrid/>
          </Center>
        </Box>


        <Box w="100%" marginTop={'60px'} padding={2}>
          <Center>
          <Heading textAlign={"center"}> Would You Please Tell Me...</Heading>
          </Center>
        </Box>


        <Box w={{base: "98%" , lg:"80%"}} marginTop={6}> 
          <Center>
          <AccordationDining/>
          </Center>
        </Box>


        <Box w="100%" marginTop={"auto"}>
          <Footer/>
        </Box>


        </VStack>
      </Flex>
    </>
  );
}

export default Dining;
