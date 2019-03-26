import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer} />
        <View style={styles.bottomContainer}>
          <View style={styles.registerBox}>
            <View style={styles.regLogoPosition}>
              <Text style={styles.regLogo} />
            </View>
            <TextInput
              style={styles.registerInput}
              placeholder="Username"
              placeholderTextColor="#2aa9d2"
            />
            <TextInput
              style={styles.registerInput}
              placeholder="Fullname"
              placeholderTextColor="#2aa9d2"
            />
            <TextInput
              style={styles.registerInput}
              placeholder="Email"
              placeholderTextColor="#2aa9d2"
            />
            <TextInput
              style={styles.registerInput}
              placeholder="Phone Number"
              placeholderTextColor="#2aa9d2"
            />
            <TextInput
              style={styles.registerInput}
              placeholder="Password"
              placeholderTextColor="#2aa9d2"
            />
            <TextInput
              style={styles.registerInput}
              placeholder="Confirm Password"
              placeholderTextColor="#2aa9d2"
            />
            <TouchableOpacity>
              <Text style={styles.registerButton}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAFAFA"
  },

  topContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2aa9d2"
  },

  bottomContainer: {
    flex: 9
  },

  registerBox: {
    paddingHorizontal: 40,
    paddingTop: 20,
    borderRadius: 5
  },

  regLogoPosition: {
    alignItems: "center"
  },

  regLogo: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    marginTop: -60,
    marginBottom: 10,
    textAlign: "center"
  },

  registerInput: {
    color: "#2aa9d2",
    borderBottomWidth: 1,
    borderColor: "#e8ecf1"
  },

  registerText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "500",
    marginTop: 10
  },

  registerButton: {
    backgroundColor: "#FFA45C",
    color: "#FFFFFF",
    fontWeight: "500",
    height: 60,
    marginTop: 60,
    marginBottom: -20,
    borderRadius: 10,
    paddingVertical: 20,
    textAlign: "center"
  }
});

