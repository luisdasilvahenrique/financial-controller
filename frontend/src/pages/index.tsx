import {  Button, Flex, Stack  } from '@chakra-ui/react';
import { Input } from '../components/Input';
export default function Home() {
  return (
    
      <Flex
      w="100vw"
      h="100vh"
      align='center'
      justify="center"
    >
      <Flex
        flexDir='column'
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
      >
        <Stack spacing='4'>
        
        <Input name='email' type="email" id='email' label='E-mail'/>
        <Input name='password' type="password" id='password' label='Senha'/> 
        
        </Stack>

        <Button type='submit' mt='6' colorScheme="pink"> Entrar </Button>

      </Flex>
    </Flex>

  )
}
