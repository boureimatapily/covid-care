
import React from "react";

// import Paper from "@material-ui/core/Paper";
import { TextField, Button, Typography, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
// import {register} from "../redux/Actions/authActions"
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import LinkMUI from "@material-ui/core/Link";
  


const styles ={
  root:{
    display:"flex",
  },
  SignupSection: {
    paddingRight:30,
    paddingLeft: 30,
    marginTop: 20,
  },
 
  otheraccounts:{
    display:"flex",
    
},
btnotheraccounts:{
    fontWeight:"bold",
    marginRight:10,
    marginBottom:10
},
getStartButton: {
    color: "white",
    backgroundColor: "#2bd69a",
    fontWeight: "bolder",
    marginBottom: 20,
  },
 
};

class HospitalSignupModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:""
    };
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSignup = ()=>{
    this.props.history.push('/');
}
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.register(email, password, this.onSignup())
   
  };

  render(){
    const { classes } = this.props;
  return (
    <Container fixed className={classes.root}>
      <Grid container> 
     
      <Grid item xs={12} md={12} lg={12} > 
    <div className={classes.SignupSection}>
     
        <h2>Get Started for Free</h2>
        <form autoComplete={"false"} className={classes.formSection}onSubmit={this.handleSubmit}>
            <TextField
              id="standard-basic"
              label="Email Address *"
              placeholder="Email address for mail confirmation"
              fullWidth
              name="email"
              // value={this.state.email}
              autoFocus
              // value={values.email}
              onChange={this.handleChange}
            />
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id="password"
                  type="password"
                  label="Password *"
                  fullWidth
                  name="password"
                  onChange={this.handleChange}
                  // value={values.password}                //   onChange={handleChange}
                />
              </div>
            
            </div>
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id=" hospitalname"
                  label="Hospital Name"
                  placeholder="Hospital Name"
                  fullWidth
                  name="hospitalname"
                  type="text"
                //   value={values.firstname}
                //   onChange={handleChange}
                />
              </div>
              
            </div>
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id="handle"
                  label="Hospital ID"
                  fullWidth
                  name="handle"
                  type="text"
                  placeholder="Hospital ID"
              
                //   value={values.handle}
                //   onChange={handleChange}
                />
              </div>
             
            </div>

            <Typography
              variant="body2"
              style={{ marginTop: 20, marginBottom: 10, color: "#888" }}
            >
              By clicking Sign Up, you agree to our{" "}
              <LinkMUI href="#">
                Terms of Service
              </LinkMUI>{" "}
              and{" "}
              <LinkMUI href="#">
                Privacy Policy
              </LinkMUI>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.getStartButton}
            //   disabled={loginRequest}
            >
              Sign Up
             
            </Button>
            <Typography
              variant="body1"
              style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}
            >
              Already have an account? <Link to={"/login"}>Log in</Link>
            </Typography>
          </form>
          <h3>Sign up In with Another Account</h3>
        <div className={classes.otheraccounts}>
        <Button
            variant="contained"
            color="primary"
            className={classes.btnotheraccounts}
          >
            Google
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnotheraccounts}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            // color="primary"
            className={classes.btnotheraccounts}
          >
            Twitter
          </Button>
        </div>
    </div>
    </Grid>
    
    </Grid>
    </Container>
  );
}
}

export default  withStyles(styles)(connect(null)(HospitalSignupModal))
