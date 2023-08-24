import {
  Box,
  Center,
  Heading,
  StackItem,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Offer_Item } from "../data/OfferItem";

function OffersCard() {
  return (
    <>
      {Offer_Item.map((item, index) => (
        <Box
          borderRadius={45}
          bg={useColorModeValue("gray.50", "teal.900")}
          width={"90%"}
          padding={10}
          overflow={"hidden"}
          verticalAlign={"center"}
          key={index}
        >
          <Center>
            <VStack>
              <StackItem>
                <Heading as={"h3"} size={"lg"} textAlign={"center"}>
                  {item.title}{" "}
                </Heading>
                <StackItem textAlign={"center"}> {item.info}</StackItem>{" "}
                <br></br>
              </StackItem>

              <StackItem>
                <b> USD. {item.price}</b>
              </StackItem>
              <StackItem>{item.valid}</StackItem>
            </VStack>
          </Center>
        </Box>
      ))}
    </>
  );
}

export default OffersCard;
