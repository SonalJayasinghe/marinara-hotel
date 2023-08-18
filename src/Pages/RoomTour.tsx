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
import Accordation from "../components/Accordation";
import RoomTourShowCaseGrid from "../components/RoomTourShowcase/RoomTourShowCaseGrid";

function RoomTour() {
  useEffect(() => {
    document.title = "Room Tour";
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
          <Heading> Are you ready for a Room Tour ? </Heading>
          </Center>
        </Box>

        <Box w="90%" marginTop={6}
         >
          <Center>
          <RoomTourShowCaseGrid/>
          </Center>
        </Box>


        <Box w="100%" marginTop={'60px'} >
          <Center>
          <Heading> Would You Please Tell Me...</Heading>
          </Center>
        </Box>


        <Box w="80%" marginTop={6}>
          <Center>
          <Accordation/>
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

export default RoomTour;
