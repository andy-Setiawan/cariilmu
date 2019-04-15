import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { connect } from "react-redux";
import { styles, profile } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import Modal from "react-native-modal";
import { updateProfile } from "../Action/studentActions";

export class StudentProfile extends Component {
  state = {
    isModalVisible: false,
    title: "",
    bio: this.props.profileData.profile.bio
  };

  _toggleCancel = () =>
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      bio: this.props.profileData.profile.bio
    });

  _toggleSubmit = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
    this.props.updateProfile(this.props.token, this.state.bio);
  };

  _toggleBio = () =>
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      title: "BIO"
    });

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
          <Image
            style={profile.imageProfile}
            source={this.props.profileData.image}
          />
          <View style={profile.nameBox}>
            <Text style={profile.nameText}>
              {this.props.profileData.profile.name}
            </Text>
            <Text style={profile.statusText}>Online</Text>
          </View>
        </View>
        <View style={profile.bottomProfile}>
          <Text style={profile.accountText}>Account</Text>
          <View style={profile.profileBox}>
            <Text style={profile.profileText}>
              @{this.props.profileData.profile.username}
            </Text>
            <Text style={profile.editText}>Username</Text>
          </View>
          <View style={profile.profileBox}>
            <Text style={profile.profileText}>
              {this.props.profileData.profile.email}
            </Text>
            <Text style={profile.editText}>Email</Text>
          </View>
          <TouchableOpacity onPress={this._toggleBio}>
            <View style={profile.profileBox}>
              <Text style={profile.profileText}>
                {this.props.profileData.profile.bio}
              </Text>
              <Text style={profile.editText}>
                Add a few words about yourself
              </Text>
            </View>
          </TouchableOpacity>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={profile.modalBox}>
              <Text style={profile.modalText}>{this.state.title}</Text>
              {this.state.title == "BIO" ? (
                <TextInput
                  style={profile.modalInput}
                  onChangeText={bio => this.setState({ bio })}
                  placeholder="Bio"
                >
                  {this.state.bio}
                </TextInput>
              ) : (
                <Text />
              )}

              <View style={profile.handleBox}>
                <TouchableOpacity onPress={this._toggleCancel}>
                  <Text style={profile.cancel}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._toggleSubmit}>
                  <Text style={profile.submit}>DONE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.public,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: (token, bio) => {
      dispatch(updateProfile(token, bio));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentProfile);
