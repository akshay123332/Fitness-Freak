import { Box,Flex,Image,Select,Button,Spacer,Heading,Text } from '@chakra-ui/react'

export default function Imagebox(){
    return(
        <Box w="100%" h="700px" bg="#2C5282" paddingTop="90px" >
           <Box  w="85%" h="520px" bg="#2C5282" margin="auto"   >
           <Flex justifyContent="space-between"  >
            <Box w="50%" bg="#2C5282"   textAlign="left"  >
                <Heading  as='h2' size='2xl'  color="white" >MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE</Heading>
                <br/>
                <Heading as='i'  size='xl' color="white" >#1 Popular Workout Tracking Platform Stay Strong Together</Heading>
                
                <Flex w="100%"  justifyContent="space-between" >
                    <Box  >
                    <br/>
                      <Image   src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp" />
                      <br/>
                      <Image src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp" />
                    </Box>
                    <Box>
                    <br/>
                    <Image src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png.webp"  />
                    </Box>
                </Flex>
            </Box>
            <Box w="45%" paddingTop="60px"  bg="#2C5282"  >
                <Image src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-1536x1280.webp" />
            </Box>
           </Flex>
           </Box>
        </Box>
    )
}