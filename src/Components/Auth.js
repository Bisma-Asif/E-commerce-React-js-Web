import React, { useState} from 'react';
import  { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
const Auth = () => {
    const [isSignup , setIsSignup] =  useState(false)
    const [input, setInputs] = useState({
      name: "",
      email: "",
      password:"",
  });
     const handleChange =(e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
      }))
     };
     const handleSubmit =(e) => {
      e.preventDefault();
      console.log(input);
     }
    const resetState = () =>{
      setIsSignup(!isSignup);
      setInputs({ name: "" , email: "" , password: ""});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box display="flex"
             flexDirection={"column"} 
             maxWidth={400}
             alignItems={"center"}
            justifyContent={"center"}
             margin="auto" marginTop={5}
              padding={3}
              borderRadius={5}
              boxShadow={"5px 5px 10px #ccc"}
              sx ={{
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                }
              }}>
                <Typography variant='h2' padding={3} textAlign="center">
                    {isSignup ? "Sign Up" : "Login"}
                </Typography>
                {isSignup && <TextField 
                onChange={handleChange}
                name="name"  value={input.name} type={"text"} margin="normal" id="standard-basic" label="Name" variant="standard" />}
                <TextField
                onChange={handleChange}
                 name="email" value={input.email} type={"email"} margin="normal" id="standard-basic" label="Email" variant="standard" />
                <TextField 
                onChange={handleChange}
                name="password" value={input.password} type={"password"} margin="normal" id="standard-basic" label="Password" variant="standard" />
                <Button
                  endIcon={isSignup ? <HowToRegIcon/> : <LoginIcon/>}
                 type='submit' sx={{ marginTop: 3, borderRadius:3}} variant='contained' color='warning'>
                {isSignup ? "Sign Up" : "Login"}
                </Button>
                <Button onClick={resetState} sx={{ marginTop: 3, borderRadius:3}} >
                     {isSignup ?"Already have account ?Login" : "Signup"}
                 </Button>
            </Box>
        </form>
    </div>
  )
}

export default Auth