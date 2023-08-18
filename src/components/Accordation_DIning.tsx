import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { AccordationDining_Item } from "../data/AccordationItem_Dining";

function AccordationDining() {
  return (
    <Accordion allowToggle width={"100%"}>
      {AccordationDining_Item.map((item, index) => (
        <AccordionItem borderRadius={30} margin={4} key={index}>
          <h2>
            <AccordionButton
              _expanded={{
                bg: useColorModeValue("teal", "teal.800"),
                color: "white",
                borderRadius: 30,
              }}
              _hover={{ borderRadius: 30 }}
            >
              <Box as="span" flex="1" textAlign="left">
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordationDining;
