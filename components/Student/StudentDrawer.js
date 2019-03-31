import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles, drawer } from "../Style.js";
import { Icon } from "native-base";

export default class StudentDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Andy Setiawan",
      email: "andy@setiawan.com"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={drawer.topContainer}>
          <Image
            source={require("../../assets/images/ic_otherClass.png")}
            style={styles.classIcon}
          />
          <Text
            style={{ ...drawer.userText, fontWeight: "500", marginTop: 20 }}
          >
            {this.state.name}
          </Text>
          <Text style={{ ...drawer.userText }}>{this.state.email}</Text>
        </View>
        <View style={drawer.middleContainer}>
          <View style={drawer.listIcon}>
            <Icon type="FontAwesome" name="calendar" />
            <Text style={drawer.listText}> Schedule </Text>
          </View>
          <View style={drawer.listIcon}>
            <Icon type="MaterialCommunityIcons" name="certificate" />
            <Text style={drawer.listText}> Certificate </Text>
          </View>
          <View style={drawer.listIcon}>
            <Icon type="MaterialIcons" name="notifications" />
            <Text style={drawer.listText}> Notification </Text>
          </View>
        </View>
        <View style={drawer.middleContainer}>
        <View style={drawer.listIcon}>
            <Icon type="MaterialCommunityIcons" name="account-box" />
            <Text style={drawer.listText}> Account </Text>
          </View>
          <View style={drawer.listIcon}>
            <Icon type="MaterialCommunityIcons" name="settings" />
            <Text style={drawer.listText}> Setting </Text>
          </View>
          <View style={drawer.listIcon}>
            <Icon type="MaterialCommunityIcons" name="logout" />
            <Text style={drawer.listText}> Sign Out </Text>
          </View>
        </View>
      </View>
    );
  }
}

