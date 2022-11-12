import { Box,Flex,Image,Select,Button,Spacer,Heading,Text,Stack,Input, Checkbox } from '@chakra-ui/react'
import {NavLink} from "react-router-dom"
import {useState} from "react";
import {Navigate} from "react-router-dom"

export default  function Login(){
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[token,settoken]=useState(null);
    const[loading,setloading]=useState(false)

   async function HandleLogin(){
   try{
    console.log("hi");
    console.log(email,password)
    setloading(true)
       let res=await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email,password})
       });
       let data= await res.json();
       console.log(data)
       settoken(data.token)
       setloading(false)
   }catch(err){
    console.log("err")
    setloading(false)
    alert(`Something Wrong`)
   }
   
   if(token){
    return <Navigate to="/" />
     }else{
      alert(`something Wrong`)
     }
}
  


 console.log(email,password)
    return(
        <Box w="100%"  paddingTop="100px"  backgroundImage="https://t3.ftcdn.net/jpg/03/20/45/94/360_F_320459471_0PMbOAM3ahJJdUeMvbuvg3uDmsh2ye1o.jpg" h="800px" >
             <Heading bg="BlackAlpha.100"  as='h3' size='xl' color="white" paddingBottom="10px" >JEFIT</Heading>
        <Box w="40%"   paddingTop="100px"  bgColor="white"  h="600px" margin="auto" borderRadius="13px" >
      
    <Heading bg="BlackAlpha.100"  as='h3' size='xl'>LOG IN</Heading>
     <Box w="95%"   margin="auto" textAlign="left" paddingLeft="15px" >
     <Stack spacing={4}>
     <label> 
     Username or Email
       </label>
     <Input variant='outline' value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Username or Email'  />
     <label  >
     Password
     </label>
      <Input variant='outline' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
      <Flex w="100%" justifyContent="space-between">
      <Box display="flex" >
      <h2 >Remember Me</h2>
      <Checkbox />
      </Box>
    <Box>
    <NavLink>Forgot Password?</NavLink>
   </Box>
 </Flex>
 <Button paddingLeft="35px" isLoading={loading} paddingRight="35px"  borderRadius="13px" bgColor="black" 
 variant='outline'  size='md' colorScheme='twitter' onClick={()=>HandleLogin()} >LOG IN</Button>
 
 </Stack>
     </Box>
    <Box w="95%" bgColor="white" margin="auto" paddingTop="10px" >
    <Stack spacing={4}></Stack>
    <Text>Or continue with</Text>
    <br/>
    <Flex w="40%"  margin="auto" justifyContent="space-between" >
       <Image src="https://www.jefit.com/images/rg_google.svg"  /> 
       <Image src="https://www.jefit.com/images/rg_fb.svg"  /> 
       <Image src="https://www.jefit.com/images/rg_apple.svg"  />  
    </Flex>
    <br/>
    <Flex margin="auto" w="50%"  >
        <Text>New to JEFIT?</Text>
        <NavLink>Create an account.</NavLink>
    </Flex>
    </Box>
        </Box>
        </Box>
        
        
    )
    
    
}

{/* <label >
Username or Email
</label>
 <Input variant='outline' placeholder='Outline'  />
 <label  >
 Password
</label>
 <Input variant='outline' placeholder='Outline' />
 <Flex w="100%" justifyContent="space-between">
 <Box display="flex" >
 <h2 >Remember Me</h2>
 <Checkbox />
 </Box>
 <Box>
<NavLink>Forgot Password?</NavLink>
 </Box>
 </Flex> */}