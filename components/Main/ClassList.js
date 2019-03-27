import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Icon } from "native-base";

import IcLanguage from "../../assets/images/ic_languageClass.png";
import IcMusic from "../../assets/images/ic_musicClass.png";
import IcDesign from "../../assets/images/ic_designClass.png";
import IcComputer from "../../assets/images/ic_computerClass.png";
import IcOther from "../../assets/images/ic_otherClass.png";

export default class ClassList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          className: "Kelas Desain Logo",
          mentorName: "Rama Soepang",
          date: "Wednesday, March 27, 2019",
          time: "15:00 - 18.00",
          image: IcDesign
        },
        {
          className: "Kelas Musisi",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcMusic
        },
        {
          className: "Kelas Microsoft word",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcComputer
        },
        {
          className: "Kelas Jual Beli Tanah",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcOther
        },
        {
          className: "Kelas Bahasa Jawa",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcLanguage
        }
      ]
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.categoryText}>CLASS</Text>
          <View style={styles.classBox}>
            {this.state.list.map((list, i) => {
              return (
                <View style={styles.classList} key={i}>
                  <Image
                    source={list.image}
                    style={{
                      width: wp("18%"),
                      height: hp("11%"),
                      borderRadius: 50,
                      marginLeft: 10
                    }}
                  />
                  <View style={styles.classText}>
                    <Text style={styles.classnameText}>{list.className}</Text>
                    <Text style={styles.nameText}>{list.mentorName}</Text>
                    <View style={styles.dateTimeBox}>
                      <Icon
                        type="FontAwesome"
                        name="calendar"
                        style={styles.iconDateTime}
                      />
                      <Text style={styles.dateTimeText}>{list.date}</Text>
                    </View>
                    <View style={styles.dateTimeBox}>
                      <Icon
                        type="FontAwesome"
                        name="clock-o"
                        style={styles.iconDateTime}
                      />
                      <Text style={styles.dateTimeText}>{list.time}</Text>
                    </View>
                  </View>
                  <View style={styles.arrow} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#FFFFFF"
  },

  navBar: {
    flex: 1,
    backgroundColor: "green"
  },

  categoryText: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal: 20,
    marginTop: 15
  },

  classBox: {
    flexDirection: "column",
  },

  classList: {
    marginTop: 1,
    backgroundColor: "#FFFFFF",
    width: wp("100%"),
    height: hp("15%"),
    borderBottomWidth:1,
    borderColor:"#dadddf",
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },

  classIcon: {
    width: wp("18%"),
    height: hp("11%"),
    backgroundColor: "black",
    borderRadius: 50,
    marginLeft: 10
  },

  classText: {
    marginLeft: 15
  },

  classnameText: {
    color: "#1cb3c8",
    fontWeight: "bold",
    fontSize: 15,
  },

  dateTimeBox: {
    flexDirection: "row",
    fontSize:12,
    marginTop:5,
  },

  iconDateTime: {
    fontSize: 20
  },

  dateTimeText: {
      marginLeft:10
  }
});
