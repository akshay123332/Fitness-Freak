import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack } from '@chakra-ui/react'
import {Link} from "react-router-dom"


export default function FooterComponent(props){
    const{heading,firstpara,secpara,thirdpara,fourthpara}=props;
   
    return (
        <>
       <Box w="20%" h="150px" bgColor="#E2E8F0"  textAlign="left"  >
                 <Stack spacing={1} >
                 <Heading as='h5' size='sm'>{heading}</Heading>
                 <Text fontSize='sm'><Link>{firstpara}</Link></Text>
                 <Text fontSize='sm'><Link>{secpara}</Link></Text>
                  <Text fontSize='sm'><Link>{thirdpara}</Link></Text>
                  <Text fontSize='sm'><Link>{fourthpara}</Link></Text>
                 </Stack>
                 </Box>
        </>
    )
}