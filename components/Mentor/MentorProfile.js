import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { connect } from "react-redux";
import { styles, profile } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import Modal from "react-native-modal";
import { updateProfile, setProfileImage } from "../Action/mentorActions";
import ImagePicker from "react-native-image-picker";
import AwesomeAlert from "react-native-awesome-alerts";

export class MentorProfile extends Component {
  state = {
    isModalVisible: false,
    title: "",
    bio: this.props.profileData.profile.bio
  };

  _toggleCancel = () =>
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      bio: this.props.profileData.profile.bio,
      image: this.props.profileData.profile.image
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

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.props.setProfileImage(this.props.token, response);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>Profile</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <View style={profile.topProfile}>
          <TouchableOpacity onPress={this.handleChoosePhoto}>
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
          </TouchableOpacity>
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
        <AwesomeAlert
          show={this.props.visible}
          showProgress={this.props.progress}
          progressSize={100}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.public,
  token: state.auth.token,
  progress: state.public.progressStatus,
  visible: state.public.alertStatus
});

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: (token, bio) => dispatch(updateProfile(token, bio)),
    setProfileImage: (token, image) => dispatch(setProfileImage(token, image))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorProfile);
