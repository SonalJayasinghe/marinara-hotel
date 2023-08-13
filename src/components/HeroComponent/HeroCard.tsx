import { Divider, Flex, HStack, Square, VStack , Text, Tooltip, useColorModeValue} from "@chakra-ui/react"
import { BsSnow2 } from "react-icons/bs"
import { IoIosWifi } from "react-icons/io"
import { MdLocalParking, MdOutlineAttachMoney, MdOutlineRoomService } from "react-icons/md"
'use client'

function HeroCard() {
  return (
    <>
     <Flex
              bg={useColorModeValue('gray.50', 'teal.900')}
              minH={32}
              maxH={32}
              minW="80%"
              maxW="80%"
              zIndex={-2}
              borderRadius={90}
              overflowY={"scroll"}
              scrollBehavior={"auto"}
              shadow={"lg"}
              justify={"center"}
              padding={30}
              paddingStart={{base:"120", lg:"20"}}
              paddingEnd={{base:"12", lg:"20"}}
              sx={
                { 
               '::-webkit-scrollbar':{
                      display:'none'
                  }
               }
             }
            >
              <HStack gap={4} color={useColorModeValue('teal', 'gray.100')}>
                <Square padding={1} >
                  <VStack >
                  
                    <MdOutlineAttachMoney size={30} />
                    <Tooltip label='Room price starts from $25.00 Per Person Per Night' borderRadius={10}>
                    <Text as={"b"}> $25.00/ Night </Text>
                    </Tooltip>
                    
                  </VStack>
                </Square>
                <Divider orientation='vertical' zIndex={-1}/>

                <Square padding={1}>
                  <VStack>
                    <MdOutlineRoomService size={30} />
                    <Text as={"b"}> Room Service </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' zIndex={-1}/>

                <Square padding={1}>
                  <VStack>
                    <BsSnow2 size={30} />
                    <Text as={"b"}> Air Condition </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' zIndex={-1}/>

                <Square padding={1}>
                  <VStack>
                    <MdLocalParking size={30} />
                    <Text as={"b"}> Free Parking </Text>
                  </VStack>
                </Square>
                <Divider orientation='vertical' />

                <Square padding={1}>
                  <VStack>
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