"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NAV_ITEMS } from "../data/NavItem";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopRadius={30}
      marginTop={8}
    >
      <Container as={Stack} maxW={"6xl"} py={5}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={3} justify={"center"}>
            <Box>
              <Image src={"./assets/logo.png"} width={"150px"} />
            </Box>
            <Text fontSize={"sm"}>This is your second home</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={""}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"YouTube"} href={""}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={""}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Site Map</ListHeader>
            {NAV_ITEMS.map((item, index) => (
              <Box key={index} as="a" href={"#" + item.href} scrollBehavior={"smooth"}>
                {item.label}
              </Box>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={"#/terms"}>
              Terms and Conditions
            </Box>
            <Box as="a" href={"#/privacy"}>
              Privacy Policy
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Box>
              Marinara Hotel,
              <br />
              Main Road, Negombo,
              <br />
              Western Province,
              <br />
              Sri Lanka
            </Box>
            <Box>+947XXXXXXX</Box>
          </Stack>
        </SimpleGrid>
        <Divider orientation="horizontal" />

        <Center margin={1} color={"gray.400"}>
          <a
            href="https://www.linkedin.com/in/sonaljayasinghe/"
            target="_blank"
          >
            {" "}
            Developed by Sonal Jayasinghe
          </a>
        </Center>
      </Container>
    </Box>
  );
}
