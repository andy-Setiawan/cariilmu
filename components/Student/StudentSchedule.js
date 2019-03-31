import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Icon } from "native-base";

export default class StudentSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: [
        {
          className: "Kelas memasak",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: true
        },
        {
          className: "Kelas breakdance",
          date: "Kamis, 8 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: false
        },
        {
          className: "Kelas e-sport",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: true
        },
        {
          className: "Kelas libur",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: false
        },
        {
          className: "Kelas rusuh",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: true
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.classBox}>
            {this.state.schedule.map((list, i) => {
              return (
                <View style={styles.classList} key={i}>
                  <View style={styles.classText}>
                    <Text style={styles.classnameText}>{list.className}</Text>
                    <View style={styles.dateTimeBox}>
                      <Icon
                        type="FontAwesome"
                        name="calendar"
                        style={styles.iconDateTime}
                      />
                      <Text style={styles.dateTimeText}>{list.date}</Text>

                      <Text style={styles.dateTimeText}>{list.time}</Text>
                    </View>
                    <View style={styles.locationBox}>
                      <Icon
                        type="MaterialIcons"
                        name="location-on"
                        style={styles.iconDateTime}
                      />
                      <Text style={styles.dateTimeText}>{list.location}</Text>
                      <Text style={styles.dateTimeText} />
                    </View>
                  </View>
                  {list.paymentStatus ? (
                    <Text style={styles.paidText}>Paid</Text>
                  ) : (
                    <Text style={styles.notYetText}>Not Yet</Text>
                  )}
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
    backgroundColor: "#FFFFFF"
  },

  classBox: {
    flexDirection: "column",
    marginTop: 10
  },

  classList: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    width: wp("100%"),
    height: hp("20%"),
    borderBottomWidth: 1,
    borderColor: "#dadddf",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap"
  },

  classText: {
    marginLeft: 15
  },

  classnameText: {
    fontWeight: "800",
    fontSize: 15,
    color: "#000000"
  },

  dateTimeBox: {
    width: wp("100%"),
    flexDirection: "row",
    fontSize: 12,
    marginTop: 15
  },

  locationBox: {
    flexDirection: "row",
    fontSize: 12,
    marginTop: 5,
    alignItems: "stretch"
  },

  iconDateTime: {
    fontSize: 20,
    flex: 1
  },

  dateTimeText: {
    flex: 6
  },

  paidText: {
    backgroundColor: "#00bd56",
    color: "#FFFFFF",
    borderRadius: 10,
    height: 30,
    paddingHorizontal: 15,
    paddingTop: 5,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "800"
  },

  notYetText: {
    backgroundColor: "#cf000f",
    color: "#FFFFFF",
    borderRadius: 10,
    height: 30,
    paddingHorizontal: 15,
    paddingTop: 5,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "800",
  }
});

