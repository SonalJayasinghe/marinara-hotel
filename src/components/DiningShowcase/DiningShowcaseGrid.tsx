import { Box, Center, Flex } from "@chakra-ui/react";

import DiningShowCaseCard from "./DiningShowCaseCard";
import { Dining_Item } from "../../data/DiningItem";

function RoomTourShowCaseGrid() {
  return (
    <Center>
      <Flex gap={6} flexGrow={0} flexWrap={"wrap"} justifyContent={"center"}>
        {Dining_Item.map((item, index) => (
          <Box>
            <DiningShowCaseCard
              key={index}
              cardUrl={item.cardUrl}
              cuisine={item.cuisine}
              meat={item.meat}
              name={item.name}
              halal = {item.halal}

            />
          </Box>
        ))}
      </Flex>
    </Center>
  );
}

export default RoomTourShowCaseGrid;
