import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles, register } from "../Style.js";
import { Icon } from "native-base";
import Reinput from "reinput";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Sign_Up_Student, Sign_Up_Mentor } from "../Action/authActions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      role: "",

      checkName: false,
      checkUser: false,
      checkEmail: false,
      checkPassword: false,
      checkConfirm: false,

      errorName: "",
      errorUser: "",
      errorEmail: "",
      errorPassword: "",
      errorConfirm: ""
    };
  }

  signUp = () => {
    const { name, username, email, password } = this.state;
    this.validation();
    switch (this.state.role) {
      case "STUDENT": {
        this.props.Sign_Up_Student(name, username, email, password);
        break;
      }
      case "MENTOR": {
        this.props.Sign_Up_Mentor(name, username, email, password);
        break;
      }
      default: {
        console.log("CHOOSE YOUR ROLE");
        break;
      }
    }
  };

  validation = () => {
    const regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    this.state.name == ""
      ? this.setState({
          checkName: true,
          errorName: "Enter your fullname"
        })
      : this.setState({ checkName: false }),
      this.state.username == ""
        ? this.setState({
            checkUser: true,
            errorUser: "Enter your username"
          })
        : this.setState({ checkUser: false }),
      this.state.email == ""
        ? this.setState({
            checkEmail: true,
            errorEmail: "Enter your email"
          })
        : !regEmail.exec(String(this.state.email).toLowerCase())
        ? this.setState({
            checkEmail: true,
            errorEmail: "Invalid email address"
          })
        : this.setState({ checkEmail: false }),
      this.state.password == ""
        ? this.setState({
            checkPassword: true,
            errorPassword: "Password must not blank",
            checkConfirm: false
          })
        : this.state.password.length < 6
        ? this.setState({
            checkPassword: true,
            errorPassword: "Use 6 characters or more for your password",
            checkConfirm: false
          })
        : (this.setState({ checkPassword: false }),
          this.state.password != this.state.confirm
            ? this.setState({
                checkConfirm: true,
                errorConfirm: "Password didn't match. Try again"
              })
            : this.setState({ checkConfirm: false }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>SIGN UP</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="menu"
            style={{ color: "#4f9da6" }}
          />
        </View>
        <ScrollView>
          <View style={register.topContainer}>
            <Text style={register.roleText}>I Wanna Be {this.state.role}</Text>
            <View style={register.imagePosition}>
              <TouchableOpacity
                onPress={role => this.setState({ role: "STUDENT" })}
              >
                <Image
                  source={require("../../assets/images/role_student.png")}
                  style={register.registerImage}
                />
                <Text style={register.rolePick}>STUDENT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={role => this.setState({ role: "MENTOR" })}
              >
                <Image
                  source={require("../../assets/images/role_mentor.png")}
                  style={register.registerImage}
                />
                <Text style={register.rolePick}>MENTOR</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={register.bottomContainer}>
            <View style={register.registerBox}>
              <Reinput
                label="Fullname"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="next"
                onSubmitEditing={() => this.username.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={name => this.setState({ name })}
              />
              {this.state.checkName && (
                <Text style={register.error}>{this.state.errorName}</Text>
              )}
              <Reinput
                label="Username"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="next"
                ref={input => (this.username = input)}
                onSubmitEditing={() => this.email.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={username => this.setState({ username })}
              />
              {this.state.checkUser && (
                <Text style={register.error}>{this.state.errorUser}</Text>
              )}
              <Reinput
                label="E-Mail"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="next"
                ref={input => (this.email = input)}
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
              {this.state.checkEmail && (
                <Text style={register.error}>{this.state.errorEmail}</Text>
              )}
              <Reinput
                label="Password"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="next"
                ref={input => (this.password = input)}
                onSubmitEditing={() => this.confirm.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
              {this.state.checkPassword && (
                <Text style={register.error}>{this.state.errorPassword}</Text>
              )}
              <Reinput
                label="Confirm Password"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="done"
                ref={input => (this.confirm = input)}
                onSubmitEditing={this.signUp}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={confirm => this.setState({ confirm })}
              />
              {this.state.checkConfirm && (
                <Text style={register.error}>{this.state.errorConfirm}</Text>
              )}
              <TouchableOpacity onPress={this.signUp}>
                <Text style={{ ...styles.button, marginTop: 30 }}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Sign_Up_Student: (name, username, email, password) =>
      dispatch(Sign_Up_Student(name, username, email, password)),

    Sign_Up_Mentor: (name, username, email, password) =>
      dispatch(Sign_Up_Mentor(name, username, email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
