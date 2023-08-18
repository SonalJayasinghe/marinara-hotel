'use client'

import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopRadius={30}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}>
            <Center>
        <Text align={"center"}>© 2023 Developed by Sonal Jayasinghe. All rights reserved</Text>
        </Center>
      </Container>
    </Box>
  )
}