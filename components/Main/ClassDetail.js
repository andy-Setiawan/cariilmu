import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { Icon } from "native-base";
import { styles, detail } from "../Style.js";
import { enrollclass } from "../Action/studentActions";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import moment from "moment";

class ClassDetail extends Component {
  handleEnrollClass = () => {
    {
      !this.props.token && Actions.signin();
    }
    {
      this.props.token &&
        this.props.enrollclass(this.props.token, this.props.classId);
      Actions.home();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.classDetails.openClass
          .filter(data => data._id == this.props.classId)
          .map(list => {
            return (
              <ScrollView key={list._id}>
                <View>
                  <ImageBackground
                    source={{ uri: list.image }}
                    alt=""
                    style={detail.bannerImage}
                  />
                  <View style={detail.bannerBox}>
                    <Icon
                      type="Ionicons"
                      name="md-arrow-back"
                      style={{ color: "#fafafa" }}
                      onPress={() => Actions.pop()}
                    />
                    <Text style={detail.bannerClass}>{list.name}</Text>
                    <Text style={detail.bannerFee}>
                      Rp.{" "}
                      {list.fee
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                    <Text style={detail.bannerMentor}>
                      By: {list.mentor.name}
                    </Text>
                  </View>
                </View>

                <View style={detail.description}>
                  <Text style={detail.descriptionText}>{list.info}</Text>
                </View>
                <View style={detail.dateContainer}>
                  <View style={detail.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="Ionicons"
                      name="calendar"
                    />
                    <Text style={detail.dateText}>
                      {moment(list.schedule).format("dddd, MMMM Do YYYY")}
                    </Text>
                  </View>
                  <View style={detail.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="Ionicons"
                      name="md-time"
                    />
                    <Text style={detail.dateText}>
                      {moment(Date(list.startTime)).format("hh:mm")}
                      {" - "}
                      {moment(Date(list.endTime)).format("hh:mm")}
                    </Text>
                  </View>
                  <View style={detail.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="Ionicons"
                      name="md-map"
                    />
                    <Text style={detail.dateText}>{list.city}</Text>
                  </View>
                </View>
              </ScrollView>
            );
          })}

        <TouchableOpacity
          style={detail.buttonPosition}
          onPress={this.handleEnrollClass}
        >
          <Text style={styles.button}>ENROLL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  classDetails: state.public,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => {
  return {
    enrollclass: (tokens, classId) => {
      dispatch(enrollclass(tokens, classId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDetail);
