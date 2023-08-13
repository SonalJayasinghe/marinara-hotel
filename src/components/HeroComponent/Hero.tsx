import {
  Box,
  Center,
  Heading,
  VStack,
} from "@chakra-ui/react";


export default function Hero() {
  return (
    <>
      <Center>
        <Box
          width="90%"
          minH={{ base: "80", md: "80", lg: "500" }}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"bottom"}
          backgroundSize={"cover"}
          borderRadius={40}
          shadow={"lg"}
          backgroundImage={"src/assets/heroImg.jpg"}
          zIndex={-1}
        >
          <Center>
            <Box  position="absolute" bottom={{lg:"52%", base:"52%"}} w="100%">
                <Center>
                    <VStack>
                <Heading
                  as="h2"
                  size={"4xl"}
                  color={"whitesmoke"}
                  textShadow={"1px 1px 30px #121212"}
                >
                  Welcome!
                </Heading>
                <Heading
                  marginTop={3}
                  as="h4"
                  size={"md"}
                  color={"whitesmoke"}
                  textShadow={"1px 1px 30px #121212"}
                >
                  The most luxury hotel in Negombo
                </Heading>
                </VStack>
                </Center>
            </Box>

           
            
          </Center>
        </Box>
      </Center>
    </>
  );
}
