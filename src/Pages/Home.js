import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import covid from "../Images/covid.jpg";
import covidO from "../Images/covidO.jpg";

import PropTypes from "prop-types";
import ServicesSection from "../Components/Home/ServicesSection";
import { Link } from "react-router-dom";

// Making styles
const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  note: {
    marginTop: 50,
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems: "center",
  },
  firstContainerFirstDiv: {
    width: "40%",
  },
  getStartButton: {
    color: "white",
    backgroundColor: "#2bd69a",
    width: 400,
    fontWeight: "bolder",
  },
  getStartButtonTwo: {
    color: "white",
    backgroundColor: "#2bd69a",
    width: 400,
    fontWeight: "bolder",
    marginTop:20
  },
  covidImage: {
    width: "300",
    height: 300,
  },
  secondContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  secondContainerFirstDiv: {
    width: "40%",
  },
  thirdContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#ebebeb",
    marginBottom:20,
    marginTop:20
  },
  thirdContainerFirstDiv: {
    width: "40%",
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container fixed>
        {/* first Container */}
        <Grid container style={{ marginTop: 10 }} className={classes.root}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={0} className={classes.firstContainer}>
              <div className={classes.firstContainerFirstDiv}>
                <h2> Fight COVID-19 With Codetrain and Covid Care Platform </h2>
                <h4> Are you Doctor, health professional or Hospital Managwer</h4>
                <Link to="/hospital">
                <Button className={classes.getStartButton}
                
                variant="contained"
                color="primary"
                > Get Start as Hospital
                </Button>
                  </Link>
                  <Link to="/health">
                <Button className={classes.getStartButtonTwo}
                
                variant="contained"
                color="primary"
                >Get Start as health professionals
                </Button>
                  </Link>
              </div>

              <div>
                <img
                  src={covid}
                  alt="covid-care"
                  className={classes.covidImage}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
        {/* second Container  */}
        <Grid container style={{ marginTop: 5 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={0} className={classes.secondContainer}>
              <div className={classes.secondContainerFirstDiv}>
                <h1> Covid Care & Codetrain </h1>
                <h5 style={{ marginTop: 0 }}>
                  {" "}
                  Covid care is helping Hospitals and health professionals to
                  the COVID 19 crisis with a modern Technology, collaborate work
                  and sharing informations{" "}
                </h5>
              </div>
              <div>
                <ServicesSection />
              </div>
            </Paper>
          </Grid>
        </Grid>
        {/* sthird Container  */}
        <Grid container style={{ marginTop: 5 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={0} className={classes.thirdContainer}>
              <div className={classes.thirdContainerFirstDiv}>
                <h1> Covid Care & Codetrain </h1>
                <h2>
                  Modern Communcation Between Doctors, Patient and health
                  professionals
                </h2>
                <Link to="/login">
                <Button className={classes.getStartButton}>Get Start</Button>
                  </Link>

              </div>
              <div> 
                <img src={covidO} 
                alt="covid" 
                style={{width:350, height:300, margin:20, borderRadius:30}} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
Home.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withStyles(styles)(Home);
