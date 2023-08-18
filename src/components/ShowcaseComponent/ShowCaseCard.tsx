import { Box,Card, useColorModeValue, Image } from "@chakra-ui/react"

interface Props{
  cardUrl: string,
  info: string
} 

function ShowCaseCard({cardUrl, info}: Props) {

  return (
    <>
    <Box bgColor={useColorModeValue('gray.50', 'teal.900')} padding={1} 
    borderRadius={50}
        _hover={{bgColor: useColorModeValue("gray.100", "teal.800")}}
>
    <Image
    overflow={"hidden"}
    padding={2}
    width={"350px"} 
    height={"450px"} 
    borderRadius={50}
    shadow={"sm"}
    backgroundPosition={"center"}
    backgroundSize={"cover"}
    src={cardUrl}/>

        <Card 
        position={"absolute"}
        borderRadius={30}
        marginY={-425}
        marginX={4}
        padding={3} 
        width={"max-content"} 
        bgColor={useColorModeValue("whiteAlpha.600", "blackAlpha.600")}
        color={useColorModeValue("black", 'whitesmoke')}>
          {info}
        </Card>

    </Box>
    </>
  )
}

export default ShowCaseCard