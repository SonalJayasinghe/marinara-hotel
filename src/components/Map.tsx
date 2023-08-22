import { Box, useColorModeValue } from "@chakra-ui/react";

function Map() {
  return (
    <Box
      w={"100%"}
      borderRadius={45}
      bg={useColorModeValue("gray.50", "teal.900")}
      padding={"0.5px"}
      overflow={"hidden"}
      verticalAlign={"center"}
      _hover={{ bgColor: useColorModeValue("gray.100", "teal.800") }}
      
      
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1201.4344706194038!2d79.84086894496728!3d7.245120940374729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e94e1ff72b8f%3A0x701643d0aec2d650!2sNegombo%20Beach!5e0!3m2!1sen!2slk!4v1692333672439!5m2!1sen!2slk"
        width={"100%"}
        height={"500"}
        allowFullScreen
        
        style={{ padding: 15,
           borderRadius: 45,
           
           }}
      />
    </Box>
  );
}

export default Map;
