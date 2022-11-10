import Navbar from "../Components/Navbar";
import Imagebox from "../Pages/Imagebox";
import { Heading,Box  } from '@chakra-ui/react'
import Workoutbox from "../Components/WorkoutBox";
import Workoutboxlast from "../Components/WorkoutBoxlast"

export default  function Homepage(){
    return(
        <>
         <Navbar/>
        <Imagebox/>
        <Box  w="100%" h="200px"  paddingTop="80px"  >
        <Heading bg="BlackAlpha.100"  as='h3' size='xl'>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Heading>
         <Workoutbox   firsth="WORKOUT TRACKING" secondh="PERSONALIZE YOUR WORKOUT PLANS" 
                firsticon="1400+ exercises with instructions" secondicon="Pro-designed workout plans"
                thirdicon="Support custom exercises"  fourthicon="Flexible workout planning tool" 
                image="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png" />
         <Workoutboxlast/>
         <Workoutbox   firsth="PROGRESS TRACKING" secondh="VIEW PROGRESS & REACH NEW LIMITS" 
                firsticon="Track workout time and weightlifting" secondicon="Set target muscles and body measurements"
                thirdicon="Understand muscle recovery rate"  fourthicon="Set 1RM goals and refresh records" 
                image="https://www.jefit.com/wp/wp-content/uploads/2022/08/web3-1536x1536.png" />
        </Box>
        </>
    )
}