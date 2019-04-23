import React, { Component } from "react";
import { Platform } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./components/Reducer/";
import thunk from "redux-thunk";
import SignUp from "./components/Login/SignUp";
import Home from "./components/Main/Home";
import ClassList from "./components/Main/ClassList";
import ClassDetail from "./components/Main/ClassDetail";
import OnBoarding from "./components/Intro/OnBoarding";
import StudentProfile from "./components/Student/StudentProfile";
import StudentSchedule from "./components/Student/StudentSchedule";
import StudentDrawer from "./components/Student/StudentDrawer";
import SignIn from "./components/Login/SignIn";
import MentorClassList from "./components/Mentor/MentorClassList";
import MentorClassDetails from "./components/Mentor/MentorClassDetails";
import StudentCart from "./components/Student/StudentCart";
import StudentPayment from "./components/Student/StudentPayment";
import Search from "./components/Main/Search";
import StudentClassDetail from "./components/Student/StudentClassDetail";
import MentorDetail from "./components/Main/MentorDetail";
import MentorProfile from "./components/Mentor/MentorProfile";
import MentorSchedule from "./components/Mentor/MentorSchedule";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="home" component={Home} initial />
            <Scene key="signin" component={SignIn} />
            <Scene key="signup" component={SignUp} />
            <Scene key="classList" component={ClassList} />
            <Scene key="classDetail" component={ClassDetail} />
            <Scene key="onboarding" component={OnBoarding} />
            <Scene key="studentPayment" component={StudentPayment} />
            <Scene key="studentSchedule" component={StudentSchedule} />
            <Scene key="studentProfile" component={StudentProfile} />
            <Scene key="studentDrawer" component={StudentDrawer} />
            <Scene key="studentCart" component={StudentCart} />
            <Scene key="studentClassDetail" component={StudentClassDetail} />
            <Scene key="mentorProfile" component={MentorProfile} />
            <Scene key="mentorClassList" component={MentorClassList} />
            <Scene key="mentorClassDetail" component={MentorClassDetails} />
            <Scene key="mentorDetail" component={MentorDetail} />
            <Scene key="mentorSchedule" component={MentorSchedule} />
            <Scene key="search" component={Search} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
