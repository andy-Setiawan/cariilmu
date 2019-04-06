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
import Payment from "./components/Student/Payment";
import StudentProfile from "./components/Student/StudentProfile";
import StudentSchedule from "./components/Student/StudentSchedule";
import StudentDrawer from "./components/Student/StudentDrawer";
import SignIn from "./components/Login/SignIn";

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
            <Scene key="signin" component={SignIn} />
            <Scene key="signup" component={SignUp} />
            <Scene key="home" component={Home} />
            <Scene key="classList" component={ClassList} />
            <Scene key="classDetail" component={ClassDetail} />
            <Scene key="onboarding" component={OnBoarding} />
            <Scene key="payment" component={Payment} />
            <Scene key="studentSchedule" component={StudentSchedule} />
            <Scene key="studentProfile" component={StudentProfile} initial />
            <Scene key="studentDrawer" component={StudentDrawer} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
