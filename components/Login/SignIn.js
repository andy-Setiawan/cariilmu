import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles, login } from "../Style.js";
import Logo from "../../assets/images/cariilmu_light.png";
import Reinput from "reinput";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { Sign_In_Student, Sign_In_Mentor } from "../Action/authActions";
import { closeAlert } from "../Action/pubActions";
import AwesomeAlert from "react-native-awesome-alerts";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      role: "STUDENT"
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
        console.log("CHOOSE YOUR ROLE");
        break;
      }
    }
  };

  closeMsg = () => {
    this.props.auth.token
      ? (Actions.pop(), this.props.closeAlert())
      : this.props.closeAlert();
  };
  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: "#eee" }}>
        <ScrollView>
          <View style={login.topContainer}>
            <Icon
              type="FontAwesome"
              name="arrow-left"
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
                label="Username"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="next"
                onSubmitEditing={() => this.password.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={username => this.setState({ username })}
              />
              <Reinput
                label="Password"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="done"
                onSubmitEditing={this.signIn}
                ref={input => (this.password = input)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity style={login.loginButton} onPress={this.signIn}>
              <Text style={{ ...styles.button }}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={login.signupText} onPress={() => Actions.signup()}>
              SIGN UP
            </Text>
          </View>
        </ScrollView>
        <AwesomeAlert
          show={this.props.visible}
          showProgress={this.props.progress}
          message={this.props.message}
          messageStyle={styles.alertMessage}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
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
  visible: state.public.alertStatus
});

const mapDispatchToProps = dispatch => {
  return {
    Sign_In_Student: (username, password) =>
      dispatch(Sign_In_Student(username, password)),
    closeAlert: () => dispatch(closeAlert())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
