import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles, register } from "../Style.js";
import { Icon } from "native-base";
import Reinput from "reinput";
import { Actions } from "react-native-router-flux";

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="FontAwesome"
            name="arrow-left"
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
            <Image
              source={require("../../assets/images/login_image.png")}
              style={register.registerImage}
            />
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
              />
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
              />
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
              />
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
                textSecureEntry
              />
              <Reinput
                label="Confirm Password"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="next"
                ref={input => (this.confirm = input)}
                onSubmitEditing={() => this.phone.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                textSecureEntry
              />
              <Reinput
                label="Phonenumber"
                labelActiveColor="#4f9da6"
                labelColor="#4f9da6"
                labelActiveScale={1}
                underlineActiveColor="#4f9da6"
                underlineColor="#4f9da6"
                returnKeyType="done"
                ref={input => (this.phone = input)}
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity onPress={() => Actions.login()}>
                <Text style={{ ...styles.button, marginTop: 30 }}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
