import {
  Box,
  Card,
  Center,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export interface Props {
  cardUrl: string;
  cuisine: string;
  meat: string;
  halal?: boolean;
  name: string;
}

function DiningShowCaseCard({ cardUrl, cuisine, meat, halal, name }: Props) {
  return (
    <>
      <Box
        bgColor={useColorModeValue("gray.50", "teal.900")}
        padding={3}
        borderRadius={50}
        shadow={"xs"}
        _hover={{ bgColor: useColorModeValue("gray.100", "teal.800") }}
      >
        <Box overflow={"hidden"} width={"350px"} borderRadius={40}>
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
              {cuisine}
            </Card>

            <Card
              position={"absolute"}
              borderRadius={30}
              marginY={-160}
              marginX={2}
              padding={3}
              width={"max-content"}
              bgColor={useColorModeValue("whiteAlpha.600", "blackAlpha.600")}
              color={useColorModeValue("black", "whitesmoke")}
            >
              {meat}
            </Card>

            {halal && (
              <Card
                position={"absolute"}
                borderRadius={30}
                marginY={-100}
                marginX={2}
                padding={3}
                width={"max-content"}
                bgColor={useColorModeValue("whiteAlpha.600", "blackAlpha.600")}
                color={useColorModeValue("black", "whitesmoke")}
              >
                Halal
              </Card>
            )}
          </Box>
          <Center marginTop={3}>
            <Heading as="h2" size={"sm"}>
              {" "}
              {name}{" "}
            </Heading>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default DiningShowCaseCard;
