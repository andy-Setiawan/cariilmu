import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/Main/Home";
import ClassList from "./components/Main/ClassList";
import Schedule from "./components/Main/Schedule";
import ClassDetail from "./components/Main/ClassDetail";
import OnBoarding from "./components/Intro/OnBoarding";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="login"
        component={Login}
        navigationBarStyle={{ backgroundColor: "#2aa9d2" }}
      />
      <Scene
        key="register"
        component={Register}
        navigationBarStyle={{ backgroundColor: "#2aa9d2" }}
        title="Register"
      />
      <Scene
        key="home"
        component={Home}
        navigationBarStyle={{ backgroundColor: "#2aa9d2" }}
        hideNavBar
      />
      <Scene key="classList" component={ClassList} hideNavBar />
      <Scene key="schedule" component={Schedule} hideNavBar/>
      <Scene key="classdetail" component={ClassDetail} hideNavBar/>
      <Scene key="onboarding" component={OnBoarding} hideNavBar initial/>
    </Scene>
  </Router>
);
export default Routes;
