import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles, drawer } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Sign_Out } from "../Action/authActions";

class StudentDrawer extends Component {
  signOutStudent = () => {
    this.props.closeDrawer();
    this.props.Sign_Out();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={drawer.topContainer}>
          {this.props.profileData.profile.image === null ? (
            <Image
              source={this.props.profileData.image}
              style={styles.classIcon}
            />
          ) : (
            <Image
              source={{ uri: this.props.profileData.profile.image }}
              style={styles.classIcon}
            />
          )}

          <Text style={{ ...drawer.userText, fontWeight: "500" }}>
            {this.props.profileData.profile.name}
          </Text>
          <Text style={{ ...drawer.userText }}>
            {this.props.profileData.profile.email}
          </Text>
        </View>
        <View style={drawer.middleContainer}>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="calendar" style={drawer.icon} />
            </View>
            <Text
              style={drawer.listText}
              onPress={() => Actions.studentSchedule()}
            >
              Schedule
            </Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-cart" style={drawer.icon} />
            </View>
            <Text style={drawer.listText} onPress={() => Actions.studentCart()}>
              Cart
            </Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon
                type="Ionicons"
                name="md-notifications"
                style={drawer.icon}
              />
            </View>
            <Text style={drawer.listText}>Notification</Text>
          </View>
        </View>
        <View style={drawer.middleContainer}>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-person" style={drawer.icon} />
            </View>
            <Text
              style={drawer.listText}
              onPress={() => Actions.studentProfile()}
            >
              Account
            </Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-settings" style={drawer.icon} />
            </View>
            <Text style={drawer.listText}>Setting</Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-log-out" style={drawer.icon} />
            </View>
            <Text style={drawer.listText} onPress={this.signOutStudent}>
              Sign Out
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.public
});

const mapDispatchToProps = dispatch => {
  return {
    Sign_Out: () => {
      dispatch(Sign_Out());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDrawer);
