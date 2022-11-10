import { Box,Flex,Image,Select,Button,Spacer,Heading,Text  } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'


export default function Workoutboxlast(){
    return(
        <Box w="100%" h="650px" bgColor="white" paddingTop="100px"  >
          
          <Box w="75%" h="600px" bgColor="white"  margin="auto"  >
          <Flex justifyContent="space-between" >
          <Box  w="45%" h="100%"  textAlign="left"  >
                <br/>
                <br/>
              <Heading color="#E2E8F0" as='h4' size='md' >SMART WATCH INTEGRATION</Heading>
              <br/>
              <Heading  as='h2' size='xl' >TRAIN & LOG SEAMLESSLY IN GYM AND HOME</Heading>
              <br/>
              <CheckCircleIcon color="blue" /> <Text fontSize='18px' as='samp'   >Log training with one-click</Text>
              <br/>
              <CheckCircleIcon color="blue" /> <Text  as='samp' fontSize='18px'  >Control rest time easily</Text>
              <br/>
              <CheckCircleIcon color="blue" /> <Text  as='samp' fontSize='18px'  >Available on mobile and watch</Text>
              <br/>
              <CheckCircleIcon color="blue" /> <Text  as='samp' fontSize='18px'  >Audio and video instructions</Text>
              <br/>
              <br/>
              <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" variant='solid'  size='md' colorScheme='twitter'>JOIN NOW</Button>
            </Box>
            <Box  w="50%" h="550px"  >
              <Image   src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web2-1536x1536.png" />
            </Box >
           
            </Flex>
          </Box>
        </Box>
    )
}