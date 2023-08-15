import { Box, Center, Flex } from "@chakra-ui/react"

import RoomTourShowCaseCard from "./RoomTourShowCaseCard";
import { RoomTour_Items } from "../../data/RommTourItem";

function RoomTourShowCaseGrid() {
  return (
    <Center>
    <Flex 
    gap={6}
    flexGrow={0}
    flexWrap={"wrap"}
    justifyContent={"center"}
    >
        {RoomTour_Items.map((item, index) => (
            <Box><RoomTourShowCaseCard 
            key={index} 
            cardUrl={item.cardUrl} 
            title={item.title} 
            bedAndBreackfast={item.bedAndBreackfast}
            halfBoard={item.halfBoard}
            fullBoard={item.fullBoard}
            /></Box>
        ))}
    </Flex>
    </Center>
  )
}

export default RoomTourShowCaseGrid;