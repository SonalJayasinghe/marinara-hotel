import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import OffersCard from "../components/OffersCard";

function Offers() {
  const pgNo = 3;

  useEffect(() => {
    document.title = "Offers";
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
            <Center>
             <OffersCard/>
            </Center>
          </Box>


          <Box w="100%" marginTop={"auto"}>
            <Footer />
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Offers;
