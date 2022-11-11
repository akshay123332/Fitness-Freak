
import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack } from '@chakra-ui/react'
import { StarIcon,Icon } from '@chakra-ui/icons';
import {Link} from "react-router-dom"


function Eliteplan(props){
    const{heading,firstpara,secpara,thirdpara,fourthpara,
        fifthpara,sixpara,sevenpara,eightpara,ninethpara,
        tenthpara,elevenpara,twelthpara,thirteenpara,btnText}=props
    return(
        <>
          <Box w="30%" paddingLeft="20px" h="850px"  bgColor="black"  paddingTop="120px" borderRadius="8px"  >
                  <Box width="20%" h="50px"  bgColor="white" paddingTop="5px" borderRadius="50%" >
                  <StarIcon  w={6} h={8}  />
                  </Box>
                  <br/>
                  <Box textAlign="left" >
                  <Stack spacing={3}>
                  <Heading color="white" bg="BlackAlpha.100"  as='h3' size='xl'>{heading}</Heading>
                  <Heading color="white" as='h3' size='md'>{firstpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{secpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{thirdpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{fourthpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{fifthpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{sixpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{sevenpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{eightpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{ninethpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{tenthpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{elevenpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{twelthpara}</Heading>
                  <Heading color="white" as='h3' size='md'>{thirteenpara}</Heading>
                  </Stack>
                  <br/>
                  <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" bgColor="black" variant='outline'  
                  size='md' colorScheme='twitter'><Link to="/signup" >{btnText}</Link></Button>
                  </Box>
                 </Box>
        </>
    )
}
export default Eliteplan