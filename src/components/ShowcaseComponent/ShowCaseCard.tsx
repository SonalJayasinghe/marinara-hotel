import { Box,Card, useColorModeValue } from "@chakra-ui/react"

interface Props{
  cardUrl: string,
  info: string
} 

function ShowCaseCard({cardUrl, info}: Props) {

  return (
    <>
    <Box bgColor={useColorModeValue('gray.50', 'teal.900')} 
    padding={0.1}
    borderRadius={50}
        _hover={{bgColor: useColorModeValue("gray.100", "teal.800")}}
>
    <Box
    overflow={"hidden"}
    padding={3}
    width={"350px"} 
    height={"450px"} 
    borderRadius={40}
    shadow={"sm"}
    backgroundPosition={"center"}
    backgroundSize={"cover"}
    backgroundImage={cardUrl}
    margin={3}

   >
        <Card 
        position={"absolute"}
        borderRadius={30}
        marginY={3}
        padding={3} 
        width={"max-content"} 
        bgColor={useColorModeValue("whiteAlpha.600", "blackAlpha.600")}
        color={useColorModeValue("black", 'whitesmoke')}>
          {info}
        </Card>
    </Box>
    </Box>
    </>
  )
}

export default ShowCaseCard