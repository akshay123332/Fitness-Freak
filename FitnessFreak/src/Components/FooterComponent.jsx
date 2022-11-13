import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack } from '@chakra-ui/react'
import {NavLink} from "react-router-dom"


export default function FooterComponent(props){
    const{heading,firstpara,secpara,thirdpara,fourthpara}=props;
   
    return (
        <>
       <Box w="20%" h="150px" bgColor="#E2E8F0"  textAlign="left"  >
                 <Stack spacing={1} >
                 <Heading as='h5' size='sm'>{heading}</Heading>
                 <Text fontSize='sm'><NavLink style={{color:"#718096"}} >{firstpara}</NavLink></Text>
                 <Text fontSize='sm'><NavLink style={{color:"#718096"}} >{secpara}</NavLink></Text>
                  <Text fontSize='sm'><NavLink style={{color:"#718096"}} >{thirdpara}</NavLink></Text>
                  <Text fontSize='sm'><NavLink style={{color:"#718096"}} >{fourthpara}</NavLink></Text>
                 </Stack>
                 </Box>
        </>
    )
}