import {
  Box,
  HStack,
  StackItem,
  useColorModeValue,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";

function CallNowCard() {
  return (
    <>
      <Center>
        <Flex gap={6} flexGrow={0} flexWrap={"wrap"} justifyContent={"center"}>
          <Box
            borderRadius={45}
            bg={useColorModeValue("gray.50", "teal.900")}
            w={"250px"}
            h={"140px"}
            padding={5}
            overflow={"hidden"}
            verticalAlign={"center"}
            _hover={{ bgColor: useColorModeValue("gray.100", "teal.800") }}
          >
            <Text align={"justify"}>
              <Center>
                <b>Address: </b> <br />
              </Center>
              Hotel Marinara, No.54, <br />
              Main Road, Negombo,
              <br />
              Sri Lanka
            </Text>
          </Box>

          <Box
            borderRadius={45}
            bg={useColorModeValue("gray.50", "teal.900")}
            w={"250px"}
            h={"140px"}
            padding={5}
            overflow={"hidden"}
            verticalAlign={"center"}
            _hover={{ bgColor: useColorModeValue("gray.100", "teal.800") }}
          >
            <Text align={"justify"}>
              <Center>
                <b>Call Now: </b> <br/>
              </Center>
              <Center>
              +94766618710<br/>
              +97747472738 <br/>
              +8383448484<br/>
              </Center>
            </Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
}

export default CallNowCard;
