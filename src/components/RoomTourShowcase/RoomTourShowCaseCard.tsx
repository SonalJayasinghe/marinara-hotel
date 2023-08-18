import {
  Box,
  Card,
  Image,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";

interface Props {
  cardUrl: string,
  title: string,

  bedAndBreackfast: {
      price: number,
      info: string
  },

  halfBoard: {
      price: number,
      info: string
  },

  fullBoard: {
      price: number,
      info: string
  },
}

function RoomTourShowCaseCard({ cardUrl, title, bedAndBreackfast, halfBoard, fullBoard }: Props) {
  return (
    <>
      <Box
        bgColor={useColorModeValue("gray.50", "teal.900")}
        padding={3}
        borderRadius={50}
        shadow={"xs"}
        _hover={{bgColor: useColorModeValue("gray.100", "teal.800")}}

      >
        <Box
          overflow={"hidden"}
          width={"350px"}
          height={"450px"}
          borderRadius={40}
        >
          <Box>
            <Image
              src={cardUrl}
              width={"full"}
              borderRadius={40}
            />
            <Card
              position={"absolute"}
              borderRadius={30}
              marginY={-220}
              marginX={2}
              padding={3}
              width={"max-content"}
              bgColor={useColorModeValue("whiteAlpha.600", "blackAlpha.600")}
              color={useColorModeValue("black", "whitesmoke")}
            >
              {title}
            </Card>
          </Box>

          <Box padding={4}>
            <Tabs variant="soft-rounded" colorScheme="teal">
              <TabList>
                <Tab color={useColorModeValue("gray.900", "gray.100")}>
                  BB
                </Tab>
                <Tab color={useColorModeValue("gray.900", "gray.100")}>
                  HF
                </Tab>
                <Tab color={useColorModeValue("gray.900", "gray.100")}>
                  FB
                </Tab>
              </TabList>
              <TabPanels>
                
                <TabPanel>
                  <Text as="b"> USD. {bedAndBreackfast.price} /Per Night Per Person</Text>
                  <Text> {bedAndBreackfast.info} </Text>
                </TabPanel>

                <TabPanel>
                  <Text as="b"> USD.  {halfBoard.price} /Per Night Per Person</Text>
                  <Text> {halfBoard.info} </Text>
                </TabPanel>

                <TabPanel>
                  <Text as="b"> USD.  {fullBoard.price} /Per Night Per Person</Text>
                  <Text> {fullBoard.info} </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default RoomTourShowCaseCard;
