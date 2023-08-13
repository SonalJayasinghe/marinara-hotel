import { Divider, Flex, HStack, Square, VStack , Text} from "@chakra-ui/react"
import { BsSnow2 } from "react-icons/bs"
import { IoIosWifi } from "react-icons/io"
import { MdLocalParking, MdOutlineAttachMoney, MdOutlineRoomService } from "react-icons/md"

function HeroCard() {
  return (
    <>
     <Flex
              backgroundColor={"white"}
              minH={32}
              maxH={32}
              minW="80%"
              maxW="80%"
              borderRadius={90}
              overflowY={"scroll"}
              scrollBehavior={"auto"}
              shadow={"lg"}
              justify={"center"}
              padding={30}
              paddingStart={20}
              sx={
                { 
               '::-webkit-scrollbar':{
                      display:'none'
                  }
               }
             }
            >
              <HStack gap={4}>
                <Square padding={1}>
                  <VStack color={"teal"}>
                    <MdOutlineAttachMoney size={30} />
                    <Text as={"b"}> $25.00/ Night </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' />

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <MdOutlineRoomService size={30} />
                    <Text as={"b"}> Room Service </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' />

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <BsSnow2 size={30} />
                    <Text as={"b"}> Air Condition </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' />

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <MdLocalParking size={30} />
                    <Text as={"b"}> Free Parking </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' />

                <Square padding={1}>
                  <VStack color={"teal"}>
                    <IoIosWifi size={30} />
                    <Text as={"b"}> Free WiFi </Text>
                  </VStack>
                </Square>
              </HStack>
            </Flex>
    </>
  )
}

export default HeroCard