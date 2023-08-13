import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  MdOutlineAttachMoney,
  MdLocalParking,
  MdOutlineRoomService,
} from "react-icons/md";
import { BsSnow2 } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";

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
            <Box position={"absolute"} top="50%">
              <Heading
                as="h2"
                size={"4xl"}
                color={"whitesmoke"}
                textShadow={"1px 1px 30px #121212"}
              >
                Welcome!
              </Heading>
              <Center>
                <Heading
                  marginTop={3}
                  as="h4"
                  size={"md"}
                  color={"whitesmoke"}
                  textShadow={"1px 1px 30px #121212"}
                >
                  The most luxury hotel in Negombo
                </Heading>
              </Center>
            </Box>

            <Flex
              backgroundColor={"white"}
              minH={{ base: "32", md: "32", lg: "40" }}
              maxH={{ base: "32", md: "32", lg: "40" }}
              minW="80%"
              maxW="80%"
              position={"absolute"}
              bottom={{ lg: "-70px", base: "-65px" }}
              borderRadius={90}
              overflowY={"scroll"}
              scrollBehavior={"auto"}
              shadow={"lg"}
              justify={"center"}
              padding={10}
              
            >
              <HStack gap={6}>
                <Square padding={1} >
                  <VStack color={"teal"}>
                    <MdOutlineAttachMoney size={30} />
                    <Text as={"b"}> $25.00/ Night </Text>
                  </VStack>
                </Square>

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <MdOutlineRoomService size={30} />
                    <Text as={"b"}> Room Service </Text>
                  </VStack>
                </Square>

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <BsSnow2 size={30} />
                    <Text as={"b"}> Air Condition </Text>
                  </VStack>
                </Square>

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <MdLocalParking size={30} />
                    <Text as={"b"}> Free Parking </Text>
                  </VStack>
                </Square>

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <IoIosWifi size={30} />
                    <Text as={"b"}> Free WiFi </Text>
                  </VStack>
                </Square>


              </HStack>
            </Flex>
          </Center>
        </Box>
      </Center>
    </>
  );
}
