import { Box,Flex,Image,Select,Button,Spacer } from '@chakra-ui/react'
import {Link,Navigate} from "react-router-dom"

export default function Navbar(){

    function HandleSignup(){
        console.log("hi")
   return <Navigate to="/signup"  />
    }
    return(
        <Box w='100%' bg='#3182CE' textAlign="center" margin="auto"   >
        <Box bg='#3182CE' w='95%' p={4} color='white'  margin="auto" >
            <Flex alignItems="center" >
        <Image width="150px" height={7} src='https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-120x31.webp' alt='Dan Abramov' />
        <Spacer />
        <Select bg='#3182CE' color='#F6E05E' variant='filled' w='130px' placeholder='Get App'>
        <option  color='#3182CE' value='option2'>Workout App(iOS)</option>
         <option  color='#3182CE'  value='option3'>Workout App(Android)</option>
        </Select>
        <Spacer />
        <Select bg='#3182CE' color='#F6E05E' variant='filled' w='170px' placeholder='Workout Plans'>
        <option bg='##3182CE' value='option2'>Pro-designed Plans</option>
         <option bg='##3182CE' value='option3'>Create My Plan</option>
        </Select>
        <Spacer />
        <Link color='teal.500' href='#'>Exercises</Link>
        <Spacer />
        <Select bg='#3182CE' color='#F6E05E' variant='filled' w='150px' placeholder='Community'>
        <option bg='#3182CE' value='option2'>jefit community</option>
         <option bg='#3182CE' value='option3'>Blog</option>
        </Select>
        <Spacer />
        <Link color='teal.500' href='#'>Coach</Link>
        <Spacer />
        <Link color='teal.500' href='#'>Elite</Link>
        <Spacer />
        <Link color='teal.500' to="/login" >Login</Link>
        <Spacer />
        <Button  color="blue" bg='white' colorScheme='gray'><Link to="/signup" >Sign Up</Link></Button>
         
        </Flex>
         </Box>
         </Box>
    )
}