import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect } from "react";
import Footer from "../components/Footer";

function Offers() {
  useEffect(() => {
    document.title = "Offers";
  }, []);

  return (
    <>
      <Flex minH={"100vh"}>
        <VStack width="100%">
          <Box w="100%" position={"fixed"} zIndex={2}>
            <NavBar />
          </Box>

          <Box w="100%" marginTop={"95px"}>
            <Center>
              <Heading textAlign={"center"} padding={3}>
                {" "}
                Sorry! No offers are available right now.{" "}
              </Heading>
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
