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
import Map from "../components/Map";
import CallNowCard from "../components/CallNowCard";

function Contact() {
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
          <Heading> Didn't you found the route? </Heading>
          </Center>
        </Box>


        <Box w="90%" marginTop={6}
         >
          <Center>
            <Map/>
          </Center>
        </Box>
        <Box w="90%" marginTop={6}
         >
          <Center>
            <CallNowCard/>
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

export default Contact;
