import { Box,Flex,Image,Select,Button,Spacer,Heading,Text  } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {Link,Navigate} from "react-router-dom"


export default function Workoutbox(props){
    const{firsth,secondh,firsticon,secondicon,thirdicon,fourthicon,image}=props
    return(
        <Box w="100%" h="650px" bgColor="white" paddingTop="50px"  >
          
          <Box w="75%" h="600px" bgColor="white"  margin="auto"  >
          <Flex justifyContent="space-between" >
            <Box  w="50%" h="550px"  >
              <Image   src={image} />
            </Box >
            <Box  w="45%" h="100%"  textAlign="left"  >
                <br/>
                <br/>
              <Heading color="#E2E8F0" as='h4' size='md' >{firsth}</Heading>
              <br/>
              <Heading  as='h2' size='xl' >{secondh}</Heading>
              <br/>
              <CheckCircleIcon color="blue" /> <Text fontSize='18px' as='samp'   >{firsticon}</Text>
              <br/>
              <CheckCircleIcon color="blue" /> <Text  as='samp' fontSize='18px'  >{secondicon}</Text>
              <br/>
              <CheckCircleIcon color="blue" /> <Text  as='samp' fontSize='18px'  >{thirdicon}</Text>
              <br/>
              <CheckCircleIcon color="blue" /> <Text  as='samp' fontSize='18px'  >{fourthicon}</Text>
              <br/>
              <br/>
              <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" variant='solid'  size='md' colorScheme='twitter'><Link to="/signup" >JOIN NOW</Link></Button>
            </Box>
            </Flex>
          </Box>
        </Box>
    )
}