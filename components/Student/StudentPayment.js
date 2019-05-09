import React, { Component } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { styles, confirm, profile } from "../Style.js";
import { Text, Icon } from "native-base";
import ImagePicker from "react-native-image-picker";
import { uploadImage, uploadFailed } from "../Action/studentActions";
import { closeAlert } from "../Action/pubActions";
import { Actions } from "react-native-router-flux";
import AwesomeAlert from "react-native-awesome-alerts";
import Modal from "react-native-modal";

class StudentPayment extends Component {
  state = {
    isModalVisible: false,
    photo: null,
    title: ""
  };

  handleChoosePhoto = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      title: "Select a Photo"
    });
  };

  handleTakePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchCamera(options, response => {
      if (response.uri) {
        this.setState({
          photo: response,
          isModalVisible: !this.state.isModalVisible
        });
      }
    });
  };

  handleImageGallery = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({
          photo: response,
          isModalVisible: !this.state.isModalVisible
        });
      }
    });
  };

  confirmPayment = () => {
    this.state.photo === null
      ? this.props.uploadFailed()
      : this.props.uploadImage(
          this.props.token,
          this.props.paymentId,
          this.state.photo
        );
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>Payment Confirmation</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView>
          <Image style={confirm.image} source={{ uri: this.props.imageId }} />
          {this.props.payment
            .filter(data => data._id == this.props.paymentId)
            .map((pay, i) => {
              return (
                <View style={confirm.detailContainer} key={pay._id}>
                  <View style={confirm.detailBox}>
                    <Text style={{ ...confirm.text, fontWeight: "700" }}>
                      ID TRANSACTION
                    </Text>
                    <Text style={{ ...confirm.text, textAlign: "right" }}>
                      {pay._id}
                    </Text>
                  </View>
                  <View style={confirm.detailBox}>
                    <Text style={{ ...confirm.text, fontWeight: "700" }}>
                      CLASS NAME
                    </Text>
                    <Text style={{ ...confirm.text, textAlign: "right" }}>
                      {pay.class.name}
                    </Text>
                  </View>
                  <View style={confirm.detailBox}>
                    <Text style={{ ...confirm.text, fontWeight: "700" }}>
                      BANK
                    </Text>
                    <Text style={{ ...confirm.text, textAlign: "right" }}>
                      {pay.bank}
                    </Text>
                  </View>
                  <View style={confirm.detailBox}>
                    <Text style={{ ...confirm.text, fontWeight: "700" }}>
                      RECEIVER
                    </Text>
                    <Text style={{ ...confirm.text, textAlign: "right" }}>
                      {pay.beneficiaryBank}
                    </Text>
                  </View>
                  <View style={confirm.detailBox}>
                    <Text style={{ ...confirm.text, fontWeight: "700" }}>
                      ACCOUNT NUMBER
                    </Text>
                    <Text style={{ ...confirm.text, textAlign: "right" }}>
                      {pay.accountNumber}
                    </Text>
                  </View>

                  {pay.status == "paid" ? (
                    <View style={confirm.uploadBox}>
                      <Image
                        source={{ uri: pay.receipt }}
                        style={confirm.upload}
                      />
                    </View>
                  ) : (
                    <View>
                      <View style={confirm.detailBox}>
                        <Text style={{ ...confirm.text, fontWeight: "700" }}>
                          FEE
                        </Text>
                        <Text style={{ ...confirm.text, textAlign: "right" }}>
                          Rp.{" "}
                          {pay.class.fee
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Text>
                      </View>
                      <View style={confirm.detailBox}>
                        <Text style={{ ...confirm.text, fontWeight: "700" }}>
                          RECEIPT
                        </Text>
                        <TouchableOpacity onPress={this.handleChoosePhoto}>
                          <Text style={{ ...confirm.text, textAlign: "right" }}>
                            PICK IMAGE
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={confirm.uploadBox}>
                        {photo && (
                          <Image
                            source={{ uri: photo.uri }}
                            style={confirm.upload}
                          />
                        )}
                      </View>
                      <TouchableOpacity onPress={this.confirmPayment}>
                        <Text style={{ ...styles.button, marginTop: 10 }}>
                          CONFIRM
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
        </ScrollView>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={profile.modalBox}>
            <Text style={profile.modalText}>{this.state.title}</Text>
            <View style={profile.cameraContainer}>
              <TouchableOpacity onPress={() => this.handleTakePhoto()}>
                <View style={profile.cameraBox}>
                  <Icon
                    style={profile.cameraIcon}
                    type="Ionicons"
                    name="md-camera"
                  />
                  <Text style={profile.cameraText}>Take Photo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleImageGallery()}>
                <View style={profile.cameraBox}>
                  <Icon
                    style={profile.cameraIcon}
                    type="Ionicons"
                    name="md-images"
                  />
                  <Text style={profile.cameraText}>Upload from gallery</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <AwesomeAlert
          show={this.props.visible}
          message={this.props.message}
          showProgress={this.props.progress}
          messageStyle={styles.alertMessage}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={this.props.button}
          progressSize={50}
          confirmText="OK"
          onConfirmPressed={() => {
            this.props.closeAlert();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  data: state.public.openClass,
  message: state.public.alertMessage,
  visible: state.public.alertStatus,
  payment: state.student.paymentStatus,
  progress: state.public.progressStatus,
  button: state.public.buttonStatus
});

const mapDispatchToProps = dispatch => {
  return {
    uploadImage: (token, paymentId, photo) =>
      dispatch(uploadImage(token, paymentId, photo)),
    uploadFailed: () => dispatch(uploadFailed()),
    closeAlert: () => dispatch(closeAlert())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentPayment);
