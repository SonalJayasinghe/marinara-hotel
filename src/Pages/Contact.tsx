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
import Map from "../components/Map";
import CallNowCard from "../components/CallNowCard";

function Contact() {
  useEffect(() => {
    document.title = "Contact us";
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

        <Box w="100%" marginTop={'95px'} padding={3}>
          <Center>
          <Heading textAlign={"center"}> Didn't you found the route? </Heading>
          </Center>
        </Box>


        <Box w="90%" marginTop={6}
         >
          <Center>
            <Map/>
          </Center>
        </Box>

        <Box w="100%" marginTop={10} padding={3}>
          <Center>
          <Heading textAlign={"center"}> Need more help? </Heading>
          </Center>
        </Box>


        <Box w="90%" marginTop={6}
        marginBottom={10}
         >
          <Center>
            <CallNowCard/>
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

export default Contact;
