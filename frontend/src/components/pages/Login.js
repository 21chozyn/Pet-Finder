import { Button, TextField, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";
import { useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";


function Login() {
  const [hasAccount, setHasAccount] = useState(true);

  const handleSignLogBtn = () => {
    const curState = hasAccount;
    setHasAccount(!curState);
  };

  const [fields, errors, form ] = useFormInputValidation({
    user_name:"",
    password:""
    
  },{
    user_name:"required",
    password:"required"
  })

  return (
    <div id="login--main">
      <Typography variant="h3" gutterBottom textAlign="center">
        {hasAccount ? "Log in to" : "Join"} DOGSANDCATS to favorite pets
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        {hasAccount ? "Log in to your" : "Create an"} account
      </Typography>
      <br />
      <TextField
        label="Username"
        variant="outlined"
        helperText={
          hasAccount
            ? "Please enter your Username"
            : "Please enter your desired Username"
        }
      ></TextField>
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type={"password"}
        helperText={
          hasAccount
            ? "Please enter your Password"
            : "Please enter your desired Password"
        }
      ></TextField>
      <br />
      {!hasAccount && (
        <>
          <TextField
            label="Password"
            variant="outlined"
            type={"password"}
            helperText="Please enter your Password again"
          ></TextField>
          <br />
        </>
      )}
      <br />
      <Button variant="contained">{hasAccount ? "Login" : "Create"}</Button>
      <br />
      <div id="signup--login">
        <Typography variant="body2" gutterBottom>
          {hasAccount ? "Don't have an account? " : "Already have an account? "}
        </Typography>
        <div id="signup--login--btn" onClick={handleSignLogBtn}>
          {hasAccount ? " Sign up" : " Login"}
        </div>
      </div>
    </div>
  );
}

export default Login;
