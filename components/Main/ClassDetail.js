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
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class ClassDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "Piano Music Class",
      Fee: "Rp 400.000",
      classMentor: "Paulus Dian",
      classDesc:
        "All music, movement and mindfulness classes include various styles of music through sing-a-longs, chanting, large and small movement activities, dancing, marches, tonal and rhythm patterns, finger plays, instrument play, taking big breaths, and so much more. Embrace yourself for a fun, educational, and musical mindful experience.Each class is 45 minutes and includes a CD. For the first two years, there is a new CD for each session",
      date: "Thursday, 1 Nov 2019",
      time: "15:00 - 18:00",
      location: "Universitas Negri Yogyakarta"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.classDetails.openClass
          .filter(data => data._id == this.props.classId)
          .map(list => {
            return (
              <ScrollView>
                <View style={styles.bannerContainer} key={list._id}>
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
                    <Text style={detail.bannerFee}>{list.fee}</Text>
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
                  <TouchableOpacity onPress={() => Actions.signin()}>
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
  classDetails: state.homeReducer
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDetail);
