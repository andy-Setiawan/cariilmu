import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles, drawer, profile } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Sign_Out } from "../Action/authActions";

class MentorDrawer extends Component {
  signOutMentor = () => {
    this.props.closeDrawer();
    this.props.Sign_Out();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={drawer.topContainer}>
          {this.props.profileData.profile.image === undefined ? (
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
          {this.props.profileData.profile.verified ? (
            <Text style={profile.yesIconText}>Verified</Text>
          ) : (
            <Text style={profile.noIconText}>Not verified</Text>
          )}
        </View>
        <View style={drawer.middleContainer}>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="calendar" style={drawer.icon} />
            </View>
            <Text
              style={drawer.listText}
              onPress={() => Actions.mentorSchedule()}
            >
              Schedule
            </Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-bookmarks" style={drawer.icon} />
            </View>
            <Text
              style={drawer.listText}
              onPress={() => Actions.mentorClassList()}
            >
              Class List
            </Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="ios-card" style={drawer.icon} />
            </View>
            <Text
              style={drawer.listText}
              onPress={() => Actions.mentorWallet()}
            >
              Transaction
            </Text>
          </View>
        </View>
        <View style={drawer.middleContainer}>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-person" style={drawer.icon} />
            </View>
            <Text
              style={drawer.listText}
              onPress={() => Actions.mentorProfile()}
            >
              Account
            </Text>
          </View>
          <View style={drawer.listBox}>
            <View style={drawer.iconBox}>
              <Icon type="Ionicons" name="md-log-out" style={drawer.icon} />
            </View>
            <Text style={drawer.listText} onPress={this.signOutMentor}>
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
)(MentorDrawer);
