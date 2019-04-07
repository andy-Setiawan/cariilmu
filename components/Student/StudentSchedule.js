import React, { Component } from "react";
import { Text, View, ScrollView} from "react-native";
import { styles, schedule } from "../Style.js";
import { Icon } from "native-base";
import {Actions} from "react-native-router-flux"

export default class StudentSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: [
        {
          className: "Kelas Adobe",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: true
        },
        {
          className: "Kelas CorelDraw",
          date: "Kamis, 8 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: false
        },
        {
          className: "Kelas Microsoft Office",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: true
        },
        {
          className: "Kelas Javascript",
          date: "Kamis, 1 Nov 2019",
          time: "15:00 - 18:00",
          location: "Rusun BPJS Kabil",
          paymentStatus: false
        },
        {
          className: "Kelas SQL",
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="FontAwesome"
            name="arrow-left"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>SCHEDULE</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView style={schedule.container}>
          <View style={schedule.classBox}>
            {this.state.schedule.map((list, i) => {
              return (
                <View style={schedule.classList} key={i}>
                  <View style={schedule.classText}>
                    <Text style={schedule.classnameText}>{list.className}</Text>
                    <View style={schedule.dateTimeBox}>
                      <Icon
                        type="FontAwesome"
                        name="calendar"
                        style={schedule.iconDateTime}
                      />
                      <Text style={schedule.dateTimeText}>{list.date}</Text>

                      <Text style={schedule.dateTimeText}>{list.time}</Text>
                    </View>
                    <View style={schedule.locationBox}>
                      <Icon
                        type="MaterialIcons"
                        name="location-on"
                        style={schedule.iconDateTime}
                      />
                      <Text style={schedule.dateTimeText}>{list.location}</Text>
                      <Text style={schedule.dateTimeText} />
                    </View>
                  </View>
                  {list.paymentStatus ? (
                    <Text style={schedule.paidText}>Paid</Text>
                  ) : (
                    <Text style={schedule.notYetText}>Not Yet</Text>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
