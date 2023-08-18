import { Box, Center, Flex } from "@chakra-ui/react"
import { ShowCase_Item } from "../../data/ShowcaseItem"
import ShowCaseCard from "./ShowCaseCard"

function ShowCaseGrid() {
  return (
    <Center>
    <Flex 
    gap={6}
    flexGrow={0}
    flexWrap={"wrap"}
    justifyContent={"center"}
    >
        {ShowCase_Item.map((item, index) => (
            <Box key={index} ><ShowCaseCard cardUrl={item.cardUrl} info={item.info}/></Box>
        ))}
    </Flex>
    </Center>
  )
}

export default ShowCaseGrid