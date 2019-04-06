import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles, drawer } from "../Style.js";
import { Icon } from "native-base";
import {Actions} from 'react-native-router-flux'
import {connect} from "react-redux"
import {getProfile} from "../Action/studentActions"

class StudentDrawer extends Component {
  componentDidMount(){
    this.props.getProfile()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={drawer.topContainer}>
          <Image
            source={this.props.profileData.image}
            style={styles.classIcon}
          />
          <Text
            style={{ ...drawer.userText, fontWeight: "500", marginTop: 20 }}
          >
            {this.props.profileData.profile.name}
          </Text>
          <Text style={{ ...drawer.userText }}>{this.props.profileData.profile.email}</Text>
        </View>
        <View style={drawer.middleContainer}>
          <View style={drawer.listIcon}>
            <Icon type="FontAwesome" name="calendar" />
            <Text style={drawer.listText} onPress={()=> Actions.studentSchedule()}> Schedule </Text>
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
            <Text style={drawer.listText} onPress={()=> Actions.studentProfile()}> Account </Text>
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

const mapStateToProps = state => ({
  profileData : state.profileReducer
})

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => {dispatch(getProfile())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDrawer)