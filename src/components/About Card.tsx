"use client";

import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function AboutCard() {
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
        textAlign={"justify"}
        maxW={"3xl"}
      >
        Discover Marinara Hotel, an exquisite haven situated along the
        captivating shores of Negombo Beach since its establishment in 1985.
        Blending traditional elegance with modern comfort, our personalized
        service ensures a soothing and invigorating stay. From cozy
        accommodations to a rejuvenating spa and delightful dining options, we
        offer everything you need for an exceptional experience. As a proud
        member of the Negombo community, we are dedicated to preserving its
        beauty and enhancing the Marinara experience. Join us on a journey to
        create lasting memories amidst the charm of Negombo's coastline.
      </Text>
    </Stack>
  );
}
