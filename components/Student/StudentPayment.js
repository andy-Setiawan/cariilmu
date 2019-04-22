import React, { Component } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { styles, confirm } from "../Style.js";
import { Text, Icon } from "native-base";
import ImagePicker from "react-native-image-picker";
import { uploadImage, uploadFailed } from "../Action/studentActions";
import { closeAlert } from "../Action/pubActions";
import { Actions } from "react-native-router-flux";
import AwesomeAlert from "react-native-awesome-alerts";

class StudentPayment extends Component {
  state = {
    photo: null
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
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
                      BANK CODE
                    </Text>
                    <Text style={{ ...confirm.text, textAlign: "right" }}>
                      BANK CODE
                    </Text>
                  </View>
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
                      UPLOAD
                    </Text>
                    <TouchableOpacity onPress={this.handleChoosePhoto}>
                      <Text style={{ ...confirm.text, textAlign: "right" }}>
                        UPLOAD IMAGE
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
                    <Text style={{...styles.button, marginTop:10}}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView>
        <AwesomeAlert
          show={this.props.visible}
          message={this.props.message}
          messageStyle={styles.alertMessage}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
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
  payment: state.student.paymentStatus
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
