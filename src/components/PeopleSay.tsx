import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
//import IMG from '../assets/GhostZen_Sonal.jpg';

export default function PeopleSay() {
  return (
    <Stack
      borderRadius={45}
      bg={useColorModeValue("gray.50", "teal.900")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
      zIndex={-1}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        I had a wonderful stay at this beachside hotel. The location was
        perfect, with stunning ocean views right from my room. The sound of the
        waves was incredibly soothing. The staff was friendly and the beach
        access was convenient. I thoroughly enjoyed my time here and would
        definitely come back. product concept so quickly.
      </Text>
      <Box textAlign={"center"}>
        <Avatar src={'./assets/GhostZen_Sonal.jpg'} mb={2} />

        <Text fontWeight={600}>Sonal Danindu Jayasinghe</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Hotel Reviewer
        </Text>
      </Box>
    </Stack>
  );
}
