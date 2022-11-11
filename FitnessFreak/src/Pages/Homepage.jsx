import Navbar from "../Components/Navbar";
import Imagebox from "../Pages/Imagebox";
import Workoutbox from "../Components/WorkoutBox";
import Workoutboxlast from "../Components/WorkoutBoxlast";
import {Link} from "react-router-dom"
import Freeplan from "../Components/Freeplan";
import Eliteplan from "../Components/ElitePlan"

import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack } from '@chakra-ui/react'
import { StarIcon,Icon } from '@chakra-ui/icons';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imageData=[
    {id:1,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/1members-150x150.png.webp"},
    {id:2,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/15members-150x150.png.webp"},
    {id:3,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/20members-150x150.png.webp"},
    {id:4,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/12members-150x150.png.webp"},
    {id:5,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/2members-150x150.png.webp"},
    {id:6,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/16members-150x150.png.webp"},
    {id:7,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png.webp"},
    {id:8,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/19members-150x150.png.webp"},
    {id:9,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/11members-150x150.png.webp"},
    {id:10,image:"https://www.jefit.com/wp/wp-content/uploads/2021/11/12members-150x150.png.webp"},
] 

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };

const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  ) 

export default  function Homepage(){
    return(
        <>
         <Navbar/>
        <Imagebox/>
        <Box w="100%" h="500px" bgColor="#CBD5E0" paddingTop="80px" >
        <Heading bg="BlackAlpha.100"  as='h3' size='xl'>CONNECT WITH OVER 10 MILLION JEFIT MEMBERS</Heading>
        <br/>
        <Text fontSize='2xl'>As the most active workout community, we invite you and your friends to join us and support each other.</Text>
        <br/>
        <Box width="100%" margin="auto" bgColor="#CBD5E0"  >
               <Slider {...settings} >
                 {
                        imageData.map((ele)=>(
                            
                                <div   key={ele.id} >
                                    <img width="150px"  src={ele.image} />
                                </div>
                            
                        ))
                    }   
                    </Slider>
               </Box>
         <Box width="30%" margin="auto"  bgColor="#CBD5E0"  >
            <br/>
        <Flex justifyContent="space-between" >
         <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" variant='solid'  size='md' colorScheme='twitter'><Link to="/signup" >TRENDING TOPICS</Link></Button>
         <Button paddingLeft="35px" paddingRight="35px"  borderRadius="13px" variant='solid'  size='md' colorScheme='twitter'><Link to="/signup" >JOIN NOW</Link></Button>
        </Flex>
         </Box>
        </Box>
        <Box  w="100%" h="200px"  paddingTop="80px"  >
        <Heading bg="BlackAlpha.100"  as='h3' size='xl'>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Heading>
        </Box>
         <Workoutbox   firsth="WORKOUT TRACKING" secondh="PERSONALIZE YOUR WORKOUT PLANS" 
                firsticon="1400+ exercises with instructions" secondicon="Pro-designed workout plans"
                thirdicon="Support custom exercises"  fourthicon="Flexible workout planning tool" 
                image="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png" />
         <Workoutboxlast/>
         <Workoutbox   firsth="PROGRESS TRACKING" secondh="VIEW PROGRESS & REACH NEW LIMITS" 
                firsticon="Track workout time and weightlifting" secondicon="Set target muscles and body measurements"
                thirdicon="Understand muscle recovery rate"  fourthicon="Set 1RM goals and refresh records" 
                image="https://www.jefit.com/wp/wp-content/uploads/2022/08/web3-1536x1536.png" />
             <Box  w="100%" h="150px" bgColor="#CBD5E0" paddingTop="60px"  >
             <Heading bg="BlackAlpha.100"  as='h3' size='xl'>PLANS THAT SUIT YOU BEST</Heading>
             </Box>
             <Box  w="100%" h="850px" bgColor="#CBD5E0"  >
              <Box w="75%" h="850px" bgColor="#CBD5E0"  margin="auto" >
                 <Flex justifyContent="space-between" >
                 <Freeplan/>
                 <Eliteplan   heading="Elite Monthly" firstpara="$12.99/month" 
                 secpara="All BASIC plan features" thirdpara="No ads"
    fourthpara="Comprehensive training" fifthpara="reports"  
    sixpara="Advanced tracking" sevenpara="features" 
    eightpara="Compare records with" ninethpara="friends"
    tenthpara="Exercise tips from JEFIT"  elevenpara="experts"
    twelthpara="Premium workout plans"  thirteenpara="More..."  
     btnText="LEARN MORE" />

<Eliteplan   heading="Elite Yearly" firstpara="$5.83/month" 
                 secpara="All BASIC plan features" thirdpara="No ads"
    fourthpara="Comprehensive training" fifthpara="reports"  
    sixpara="Advanced tracking" sevenpara="features" 
    eightpara="Compare records with" ninethpara="friends"
    tenthpara="Exercise tips from JEFIT"  elevenpara="experts"
    twelthpara="Premium workout plans"  thirteenpara="More..."  
     btnText="LEARN MORE" />
                 
                 
                 </Flex>
              </Box>
             </Box>
        </>
    )
}

       