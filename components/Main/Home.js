import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import IconLanguage from "../../assets/images/home_language.png";
import IconOther from "../../assets/images/home_other.png";
import IconComputer from "../../assets/images/home_computer.png";
import IconEconomy from "../../assets/images/home_economy.png";
import IconDesign from "../../assets/images/home_design.png";
import IconMusic from "../../assets/images/home_music.png";
import IconDesignClass from "../../assets/images/ic_designClass.png";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          className: "Kelas Desain",
          mentorName: "Rama Soepang",
          fee: "Rp 30.000",
          date: "Wednesday, March 27, 2019"
        },
        {
          className: "Kelas Desain",
          mentorName: "Rama Soepang",
          fee: "Rp 30.000",
          date: "Wednesday, March 27, 2019"
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.navBar} />
        <View style={styles.headerContainer}>
          <View style={styles.headerText}>
            <Text style={styles.topText}>
              Join Us !! Find your passion in EduCity
            </Text>
            <Text style={styles.midText}>
              Hone your skills by learning from the expert
            </Text>
            <Text style={styles.registerButton}>REGISTER NOW</Text>
          </View>
          <View style={styles.headerIcon} />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>CATEGORY</Text>
          <View style={styles.categoryBox}>
            <View style={styles.categoryPosition}>
              <Image
                source={IconComputer}
                alt=""
                style={{ width: wp("20%"), height: hp("10%") }}
              />
            </View>
            <View style={styles.categoryPosition}>
              <Image
                source={IconDesign}
                alt=""
                style={{ width: wp("20%"), height: hp("10%") }}
              />
            </View>
            <View style={styles.categoryPosition}>
              <Image
                source={IconEconomy}
                alt=""
                style={{ width: wp("20%"), height: hp("10%") }}
              />
            </View>
            <View style={styles.categoryPosition}>
              <Image
                source={IconLanguage}
                alt=""
                style={{ width: wp("20%"), height: hp("10%") }}
              />
            </View>
            <View style={styles.categoryPosition}>
              <Image
                source={IconMusic}
                alt=""
                style={{ width: wp("20%"), height: hp("10%") }}
              />
            </View>
            <View style={styles.categoryPosition}>
              <Image
                source={IconOther}
                alt=""
                style={{ width: wp("20%"), height: hp("10%") }}
              />
            </View>
          </View>
          <Text style={styles.categoryText}>NEW CLASSES</Text>
          <View style={styles.classBox}>
            {this.state.list.map((list, i) => {
              return (
                <View style={styles.classList} key={i}>
                  <Image
                    source={IconDesignClass}
                    style={{
                      width: wp("18%"),
                      height: hp("11%"),
                      borderRadius: 50,
                      marginLeft: 10
                    }}
                  />
                  <View style={styles.classText}>
                    <Text style={styles.classnameText}>{list.className}</Text>
                    <Text>{list.mentorName}</Text>
                    <Text>{list.fee}</Text>
                    <Text>{list.date}</Text>
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
    flexDirection: "column"
  },

  navBar: {
    flex: 1,
    backgroundColor: "green"
  },

  headerContainer: {
    backgroundColor: "#deecff",
    padding: 35,
    flexDirection: "row",
    elevation: 2
  },

  headerText: {
    flex: 2,
    marginRight: 15,
    justifyContent: "space-evenly"
  },

  topText: {
    fontSize: 15,
    fontWeight: "600"
  },

  midText: {
    fontSize: 12
  },

  registerButton: {
    backgroundColor: "#df4d19",
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "500",
    height: 30,
    borderRadius: 20,
    paddingTop: 5
  },

  headerIcon: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: wp("30%"),
    height: hp("20%")
  },

  categoryContainer: {
    backgroundColor: "#EEEEEE"
  },

  categoryBox: {
    paddingVertical: 15,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  categoryText: {
    fontSize: 20,
    fontWeight: "500",
    marginHorizontal: 15,
    marginTop: 15
  },

  categoryPosition: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: wp("25%"),
    height: hp("12.5%"),
    margin: (15, 15),
    alignItems: "center",
    justifyContent: "center",
    elevation: 4
  },

  classBox: {
    flexDirection: "column",
    padding: 25
  },

  classList: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    width: wp("89%"),
    height: hp("15%"),
    elevation: 6,
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
    color:"#1cb3c8",
    fontWeight:"bold",
    fontSize:15
  }
});

