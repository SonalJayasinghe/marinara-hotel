import {
  Box,
  Center,
  HStack,
  StackItem,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast
} from "@chakra-ui/react";

function CallNowCard() {
  const toast = useToast();
  return (
    <>
      <Center>
        <Flex
          w={{base:"90%", lg:"100%"}}
          borderRadius={45}
          bg={useColorModeValue("gray.50", "teal.900")}
          flexWrap={"wrap"}
          justify={"center"}
          gap={5}
          padding={4}
        >
            <Flex>
              <HStack>
                <StackItem>
                  <VStack w={"100%"} gap={3}>
                    <StackItem>
                      <Box
                        w={300}
                        borderRadius={30}
                        bg={useColorModeValue("gray.100", "teal.700")}
                        padding={8}
                        overflow={"hidden"}
                        verticalAlign={"center"}
                      >
                        <Text align={"center"}>
                          <b>Address</b>
                          <br />
                          Marinara Hotel,
                          <br />
                          Main Road, Negombo,
                          <br />
                          Western Province,
                          <br />
                          Sri Lanka
                        </Text>
                      </Box>
                    </StackItem>

                    <StackItem>
                      {" "}
                      <Box
                        w={300}
                        borderRadius={30}
                        bg={useColorModeValue("gray.100", "teal.700")}
                        padding={8}
                        overflow={"hidden"}
                        verticalAlign={"center"}
                      >
                        <Text align={"center"}>
                          <b>Hotline</b>
                          <br></br>
                          +947XXXXXXX
                        </Text>
                      </Box>
                    </StackItem>
                  </VStack>
                </StackItem>
              </HStack>
            </Flex>

            <Box>
              <StackItem>
                <Box
                  w={300}
                  borderRadius={30}
                  bg={useColorModeValue("gray.100", "teal.700")}
                  padding={8}
                  overflow={"hidden"}
                  verticalAlign={"center"}
                >
                  <FormControl isRequired marginBottom={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="name"
                      placeholder="Enter Your Name"
                      focusBorderColor={useColorModeValue("teal.700", "white")}
                      borderRadius={90}
                    />
                  </FormControl>

                  <FormControl isRequired marginBottom={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      focusBorderColor={useColorModeValue("teal.700", "white")}
                      borderRadius={90}
                    />
                  </FormControl>

                  <FormControl isRequired marginBottom={4}>
                    <FormLabel>Your Request</FormLabel>
                    <Textarea
                      focusBorderColor={useColorModeValue("teal.700", "white")}
                      borderRadius={90}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <Button
                      type="reset"
                      fontWeight={600}
                      color={useColorModeValue("white", "teal.900")}
                      bg={useColorModeValue("teal.600", "white")}
                      borderRadius={100}
                      _hover={{
                        bg: useColorModeValue("teal.800", "gray.200"),
                      }}
                      onClick={() =>
                        toast({
                          title: 'Your Request Was Sent',
                          description: "This is a Sample Toast For Your Request Submit",
                          status: 'success',
                          duration: 3000,
                          position:"top",
                          isClosable: false,
                        })}
                    >
                      Send
                    </Button>
                  </FormControl>
                </Box>
              </StackItem>
            </Box>
          </Flex>
      </Center>
    </>
  );
}

export default CallNowCard;
