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
import ClassBanner from "../../assets/images/languageClass.png";
import { enrollclass } from "../Action/studentActions";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class ClassDetail extends Component {
  handleEnrollClass = () => {
    {
      !this.props.token && Actions.signin();
    }
    {
      this.props.token &&
        this.props.enrollclass(this.props.token, this.props.classId);
        alert('ENROLL SUCCESS')
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
                <View style={styles.bannerContainer}>
                  <ImageBackground
                    source={ClassBanner}
                    alt=""
                    style={detail.bannerImage}
                  />
                  <View style={detail.bannerBox}>
                    <Icon
                      type="FontAwesome"
                      name="arrow-left"
                      style={{ color: "#fafafa" }}
                      onPress={() => Actions.pop()}
                    />
                    <Text style={detail.bannerClass}>{list.name}</Text>
                    <Text style={detail.bannerFee}>Rp. {list.fee}</Text>
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
                      type="FontAwesome"
                      name="calendar"
                    />
                    <Text style={detail.dateText}>{list.schedule}</Text>
                  </View>
                  <View style={detail.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="FontAwesome"
                      name="clock-o"
                    />
                    <Text style={detail.dateText}>
                      {list.durationInMinutes} Minutes
                    </Text>
                  </View>
                  <View style={detail.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="MaterialIcons"
                      name="location-on"
                    />
                    <Text style={detail.dateText}>{list.city}</Text>
                  </View>
                  <TouchableOpacity onPress={this.handleEnrollClass}>
                    <Text style={styles.button}>ENROLL</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            );
          })}
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
