import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet,TouchableOpacity, Image} from "react-native";
import Logo from '../../assets/images/cariilmu_light.png'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
        <Image style={styles.logoIcon} source={Logo} alt={Logo} />
          <Text style={styles.loginText}>Login to continue</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.loginBox}>
            <TextInput style={styles.loginInput} placeholder="Username" 
            placeholderTextColor="#2aa9d2"/>
            <TextInput style={styles.loginInput}placeholder="Password" 
            placeholderTextColor="#2aa9d2"/>
            <TouchableOpacity>
            <Text style={styles.loginButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.registerText}>Register</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  topContainer: {
    flex: 8,
    backgroundColor: "#2aa9d2",
    alignItems:"center",
  },

  logoIcon:{
    height:150,
    width:150
  },

  loginText:{
    marginTop:20,
    color:"#FFFFFF",
    fontWeight:"500",
    fontSize:20
  },

  bottomContainer: {
    flex: 12,
    paddingHorizontal:25,
    marginTop:-40
  },

  loginBox:{
    backgroundColor:"#FFFFFF",
    paddingHorizontal:30,
    paddingTop:20,
    borderRadius:5,
    
  },
  
  loginInput:{
    color:"#2aa9d2",
    borderBottomWidth:1,
    borderColor:"#e8ecf1",
    marginTop:20,
  },

  loginButton:{
    backgroundColor:"#FFA45C",
    color:"#FFFFFF",
    height:60,
    marginTop:60,
    marginBottom:-20,
    borderRadius:10,
    paddingVertical:20,
    fontWeight:"500",
    textAlign:"center",
  },

  registerText:{
    marginTop:60,
    textAlign:"center",
    fontSize:17,
    fontWeight:"500"
  }
});

