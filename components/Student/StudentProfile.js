import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { styles, profile } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";

export class StudentProfile extends Component {
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
          <Text style={styles.headerText}>PROFILE</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <View style={profile.topProfile}>
          <Image style={profile.imageProfile} />
          <View style={profile.nameBox}>
            <Text style={profile.nameText}>Andy Setiawan</Text>
            <Text style={profile.statusText}>Online</Text>
          </View>
        </View>
        <View style={profile.bottomProfile}>
          <Text style={profile.accountText}>Account</Text>
          <View style={profile.profileBox}>
            <Text style={profile.profileText}>+62 819 9142 3158</Text>
            <Text style={profile.editText}>Tap to change phonenumber</Text>
          </View>
          <View style={profile.profileBox}>
            <Text style={profile.profileText}>@AndySetiawan</Text>
            <Text style={profile.editText}>Tap to change your username</Text>
          </View>
          <View style={profile.profileBox}>
            <Text style={profile.profileText}>AndySetiawan@gmail.com</Text>
            <Text style={profile.editText}>Tap to change your email</Text>
          </View>
          <View style={profile.profileBox}>
            <Text style={profile.profileText}>Bio</Text>
            <Text style={profile.editText}>Add a few words about yourself</Text>
          </View>
          
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentProfile);
