import {
  Box,
  Center,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    document.title = "About us";
  }, []);

  return (
    <>
      <Flex>
        <VStack width="100%">
          
        <Box w="100%" position={"fixed"} zIndex={2}>
          <NavBar/>
        </Box>

        <Box w="100%" marginTop={'95px'} >
          <Center>
          <Heading> Sorry! No offers are available right now. </Heading>
          </Center>
        </Box>

      


        <Box w="100%" marginTop={"80vh"}>
          <Footer/>
        </Box>


        </VStack>
      </Flex>
    </>
  );
}

export default About;
