import { Box,Flex,Image,Select,Button,Spacer,Heading,
    Text,Stack,Input, Checkbox,Alert,AlertIcon } from '@chakra-ui/react'
    import {NavLink} from "react-router-dom"

export default  function SignUp(){
    return(
        <Box w="100%"  paddingTop="100px"  bgColor="#CBD5E0" h="1150px" >
             <Heading bg="BlackAlpha.100"  as='h3' size='xl' color="white" paddingBottom="10px" >JEFIT</Heading>
        <Box w="40%"   paddingTop="100px"  bgColor="white"  h="950px" margin="auto" borderRadius="13px" >
      
    <Heading bg="BlackAlpha.100"  as='h3' size='xl'>CREATE ACCOUNT</Heading>
    <Box w="95%" bgColor="white" margin="auto" paddingTop="10px" >
    <Text>continue with</Text>
    <br/>
    <Flex w="40%"  margin="auto" justifyContent="space-between" >
       <Image src="https://www.jefit.com/images/rg_google.svg"  /> 
       <Image src="https://www.jefit.com/images/rg_fb.svg"  /> 
       <Image src="https://www.jefit.com/images/rg_apple.svg"  />  
    </Flex>
    <br/>
        <Text>Or</Text>
    </Box>
     <Box w="95%"   margin="auto" textAlign="left" paddingLeft="15px" >
     <Stack spacing={4}>
     <label> 
     Username
       </label>
     <Input variant='outline'    placeholder='Enter a Username'  />
     <label> 
     Email Address
       </label>
     <Input variant='outline'    placeholder='Enter a  Email'  />
     <label  >
     Password
     </label>
      <Input variant='outline'  placeholder='Enter a Password' />
      <Flex w="70%" justifyContent="space-between" >
      <Text color="red" >Minimum 8 characters</Text>
      <Text color="red">1 number (0-9)</Text>
      </Flex>

      <Flex w="82%" justifyContent="space-between" >
      <Text color="red" >1 lowercase letter (a-z)</Text>
      <Text color="red">1 uppercase letter (A-Z)</Text>
      </Flex>

      <Flex w="70%" justifyContent="space-between" >
      <Text color="red" >1 special character (from standard US keyboard)</Text>
      </Flex>
         
      <Input variant='outline'  placeholder='Conform Password' />


   
 <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" bgColor="black" 
 variant='outline'  size='md' colorScheme='twitter'  >CREATE ACCOUNT</Button>
   <Box w="100%" margin="auto"  >
 <Flex  w="100%" justifyContent="center" >
        <Text>Already a member?</Text>
        <NavLink style={{color:"blue"}} to="/login" >Sign in</NavLink>
    </Flex>
    </Box>
    <Text>By signing up, you agree to the JEFIT 
        <NavLink style={{color:"blue"}} to="/https://www.jefit.com/terms-of-use" > Terms of Use </NavLink>and 
        <NavLink style={{color:"blue"}} to="/https://www.jefit.com/privacy-policy" > Privacy Policy.</NavLink>
        We respect and protect your information and privacy. </Text>
 </Stack>
     </Box>
   
        </Box>
        </Box>
        
        
    )
}