import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Image,
  Square,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "../../data/NavItem";
import { MobileNavItem } from "./mobNavBar";
import { Link } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box justifyContent={"space-between"}>
      <Flex
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderBottomRadius={25}
        borderColor={useColorModeValue("white", "gray.900")}
        align={"center"}
        shadow={"sm"}
        
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          mr={{base:-150}}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src= {colorMode === "light" ? " ./assets/Logo.png": "./assets/Logo_dark.png"} w="100px" />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Square>
              <DesktopNav />
            </Square>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button onClick={toggleColorMode} borderRadius={100}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"teal.600"}
            href={"#"}
            borderRadius={100}
            _hover={{
              bg: "teal.500",
            }}
          >
            Reservation
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={index}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"sm"}
                outline={0}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Link
                  id={navItem.label}
                  to={navItem.href}
                  onClick={() => console.log("Hi")}
                >
                  {" "}
                  {navItem.label}{" "}
                </Link>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      //bg={useColorModeValue("white", "gray.800")}
      backdropFilter="auto"
      zIndex={1}
      backdropBlur="10px"
      backgroundColor={useColorModeValue("whiteAlpha.700", "blackAlpha.600")}
      p={4}
      display={{ md: "none" }}
      position={"absolute"}
      width="100%"
      height="100vh"
    >
      {NAV_ITEMS.map((navItem, index) => (
        <Center key={index}>
          <MobileNavItem {...navItem} />
        </Center>
        
      ))}
    </Stack>
  );
};
