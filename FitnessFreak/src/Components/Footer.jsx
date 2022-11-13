import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack } from '@chakra-ui/react'
import {NavLink} from "react-router-dom"
import FooterComponent from "./FooterComponent"

export default  function Footer(){
    return(
        <>
         <Box bgColor="#E2E8F0"  w="100%" h="200px"  paddingTop="20px"  >
                 <Box w="80%" h="150px" bgColor="#E2E8F0"  margin="auto" >
               <Flex justifyContent="space-between" >
                <FooterComponent  
                heading="Products" firstpara="Elite Membership"
              secpara="Coach" thirdpara="Signup"   fourthpara="Login"/>
                
                <FooterComponent  
                heading="Resource" firstpara="Workout Plans"
              secpara="Exercises Database" thirdpara="Community"  
               fourthpara="Help Center"/>

         <FooterComponent  
                heading="Legal Press" firstpara="Privacy Policy"
              secpara="Terms of Use" thirdpara="IP / DMCA Notices"  
               fourthpara="Press & Media"/>

          <FooterComponent  
                heading="Follow US" firstpara="Blog"
              secpara="Facebook" thirdpara="Twitter"  
               fourthpara="Instagram"/>

              </Flex>
                 </Box>
             </Box>
        </>
    )
}