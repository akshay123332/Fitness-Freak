
import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack } from '@chakra-ui/react'
import { StarIcon,Icon } from '@chakra-ui/icons';
import {Link} from "react-router-dom"

function Freeplan(){
    return(
        <>
          <Box w="30%" paddingLeft="20px" h="850px"  bgColor="black"  paddingTop="120px" borderRadius="8px" >
                  <Box width="20%" h="50px"  bgColor="white" paddingTop="5px" borderRadius="50%" >
                  <StarIcon  w={6} h={8}  />
                  </Box>
                  <br/>
                  <Box textAlign="left" >
                  <Stack spacing={3}>
                  <Heading color="white" bg="BlackAlpha.100"  as='h3' size='xl'>FREE</Heading>
                  <Heading color="white" as='h3' size='md'>Basic</Heading>
                  <Heading color="white" as='h3' size='md'>Ads supported</Heading>
                  <Heading color="white" as='h3' size='md'>Flexible workout planner</Heading>
                  <Heading color="white" as='h3' size='md'>Top-notch log tracker</Heading>
                  <Heading color="white" as='h3' size='md'>1400+ exercises library</Heading>
                  <Heading color="white" as='h3' size='md'>Body stats tracking</Heading>
                  <Heading color="white" as='h3' size='md'>tools</Heading>
                  <Heading color="white" as='h3' size='md'>Support interval training</Heading>
                  </Stack>
                  <br/>
                  <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" bgColor="black" variant='outline'  size='md' colorScheme='twitter'><Link to="/signup" >FREE DOWNLOAD</Link></Button>
                  </Box>
                 </Box>
        </>
    )
}
export default Freeplan