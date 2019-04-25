import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles, login } from "../Style.js";
import Logo from "../../assets/images/cariilmu_light.png";
import Reinput from "reinput";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import {
  Sign_In_Student,
  Sign_In_Mentor,
  chooseRole
} from "../Action/authActions";
import { closeAlert } from "../Action/pubActions";
import AwesomeAlert from "react-native-awesome-alerts";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      role: ""
    };

    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.props.auth.token && Actions.pop();
  }

  signIn = () => {
    const { username, password } = this.state;
    switch (this.state.role) {
      case "STUDENT": {
        this.props.Sign_In_Student(username, password);
        break;
      }
      case "MENTOR": {
        this.props.Sign_In_Mentor(username, password);
        break;
      }
      default: {
        this.props.chooseRole();
        break;
      }
    }
  };

  closeMsg = () => {
    this.props.closeAlert();
  };

  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: "#eee" }}>
        <ScrollView>
          <View style={login.topContainer}>
            <Icon
              type="Ionicons"
              name="md-arrow-back"
              style={{ color: "#fafafa" }}
              onPress={() => Actions.pop()}
            />
            <View style={login.logoBox}>
              <Image style={login.logo} source={Logo} alt={Logo} />
              <Text style={login.loginText}>Login to continue</Text>
            </View>
          </View>
          <View style={login.bottomContainer}>
            <View style={login.loginBox}>
              <Reinput
                label="Email"
                labelActiveColor={styles.header.backgroundColor}
                labelColor={styles.header.backgroundColor}
                labelActiveScale={1}
                underlineActiveColor={styles.header.backgroundColor}
                underlineColor={styles.header.backgroundColor}
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={username => this.setState({ username })}
              />
              <Reinput
                label="Password"
                labelActiveColor={styles.header.backgroundColor}
                labelColor={styles.header.backgroundColor}
                labelActiveScale={1}
                underlineActiveColor={styles.header.backgroundColor}
                underlineColor={styles.header.backgroundColor}
                returnKeyType="done"
                onSubmitEditing={this.signIn}
                ref={input => (this.password = input)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
              <View style={login.roleBox}>
                <Text style={login.roleText}>
                  {"SIGN IN AS "}
                  {this.state.role}
                </Text>
                <TouchableOpacity
                  onPress={role => this.setState({ role: "STUDENT" })}
                >
                  <Image
                    source={require("../../assets/images/role_student.png")}
                    style={login.role}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={role => this.setState({ role: "MENTOR" })}
                >
                  <Image
                    source={require("../../assets/images/role_mentor.png")}
                    style={login.role}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={login.loginButton} onPress={this.signIn}>
              <Text style={{ ...styles.button }}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
              <Text style={login.signupText} onPress={() => Actions.signup()}>{"Doesn't have an account? "}</Text>
              <Text
                style={{
                  ...login.signupText,
                  color: styles.header.backgroundColor
                }}>{"SIGN UP"}</Text>
            </View>
          </View>
        </ScrollView>
        <AwesomeAlert
          show={this.props.visible}
          showProgress={this.props.progress}
          message={this.props.message}
          messageStyle={styles.alertMessage}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={this.props.button}
          progressSize={100}
          confirmText="OK"
          onConfirmPressed={this.closeMsg}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  message: state.public.alertMessage,
  progress: state.public.progressStatus,
  visible: state.public.alertStatus,
  button: state.public.buttonStatus
});

const mapDispatchToProps = dispatch => {
  return {
    Sign_In_Student: (username, password) =>
      dispatch(Sign_In_Student(username, password)),
    Sign_In_Mentor: (username, password) =>
      dispatch(Sign_In_Mentor(username, password)),
    closeAlert: () => dispatch(closeAlert()),
    chooseRole: () => dispatch(chooseRole())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
