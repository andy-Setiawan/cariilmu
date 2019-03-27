import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import ClassBanner from "../../assets/images/languageClass.png";

export default class ClassDetail extends Component {
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
      <ScrollView style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={ClassBanner}
            alt=""
            style={{ width: wp("100%"), height: hp("40%") }}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.classNameBox}>
            <Text style={styles.classNameText}>{this.state.className}</Text>
            <Text style={styles.feeText}>{this.state.Fee}</Text>
            <Text style={styles.mentorText}>By: {this.state.classMentor}</Text>
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{this.state.classDesc}</Text>
          </View>
          <View style={styles.scheduleContainer}>
            <View style={styles.dateBox}>
              <Icon
                style={styles.scheduleIcon}
                type="FontAwesome"
                name="calendar"
              />
              <Text style={styles.scheduleText}>{this.state.date}</Text>
            </View>
            <View style={styles.dateBox}>
              <Icon
                style={styles.scheduleIcon}
                type="FontAwesome"
                name="clock-o"
              />
              <Text style={styles.scheduleText}>{this.state.time}</Text>
            </View>
            <View style={styles.dateBox}>
              <Icon
                style={styles.scheduleIcon}
                type="MaterialIcons"
                name="location-on"
              />
              <Text style={styles.scheduleText}>{this.state.location}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.enrollBox}>
            <Text style={styles.enrollButton}>ENROLL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  classNameBox: {
    marginTop: -125,
    marginLeft: 20
  },

  classNameText: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "400"
  },

  feeText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30
  },

  mentorText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 30
  },

  descriptionBox: {
    marginTop: 40,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#dadddf"
  },

  descriptionText: {
    marginHorizontal: 20
  },

  scheduleContainer: {
    marginTop: 20
  },

  dateBox: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 20
  },

  scheduleIcon: {
    fontSize: 20
  },

  scheduleText: {
    fontSize: 12,
    marginLeft: 15
  },

  enrollBox:{
      marginTop:40,
    paddingHorizontal:20,
  },

    enrollButton:{
    backgroundColor: "#FFA45C",
    borderRadius: 10,
    color: "#FFFFFF",
    height: 40,
    textAlign:"center",
    fontSize:15,
    fontWeight:"600",
    paddingTop:10,
  }
});
