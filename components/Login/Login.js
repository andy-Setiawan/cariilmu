import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles, login } from "../Style.js";
import Logo from "../../assets/images/cariilmu_light.png";
import Reinput from "reinput";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: "#eee" }}>
        <View style={login.topContainer}>
          <Icon
            type="FontAwesome"
            name="arrow-left"
            style={{ color: "#fafafa" }}
            onPress={()=>Actions.pop()}
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
            />
            <Reinput
              label="Password"
              labelActiveColor="#4f9da6"
              labelColor="#4f9da6"
              labelActiveScale={1}
              underlineActiveColor="#4f9da6"
              underlineColor="#4f9da6"
              returnKeyType="done"
              ref={input => (this.password = input)}
              autoCapitalize="none"
              autoCorrect={false}
              textSecureEntry
            />
            <TouchableOpacity>
              <Text style={{ ...styles.button, marginBottom: -20 }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
            <Text style={login.signupText} onPress={() => Actions.signup()}>SIGN UP</Text>
        </View>
      </View>
    );
  }
}
