import { Box, Collapse, Stack, Text, useDisclosure,useColorModeValue } from "@chakra-ui/react";
import { NavItem } from "../data/NavItem";

export const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      
      <Stack spacing={4} onClick={children && onToggle}>
        <Box
          py={2}
          as="a"
          href={href ?? "#"}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }} >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>       
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  