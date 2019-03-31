import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "native-base";

export default class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "ABCZYX",
      email: "qwer@asd.com",
      phoneNumber: "0819-9876-5432"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.studentPic} />
        </View>
        <View style={styles.profileBox}>
          <View style={styles.studentProfile}>
            <Icon
              type="FontAwesome5"
              name="user-alt"
              style={styles.iconFront}
            />
            <View style={styles.nameBox}>
              <Text>Name</Text>
              <Text style={styles.studentName}>{this.state.fullname}</Text>
            </View>
            <Icon type="FontAwesome5" name="pen" style={styles.iconBehind} />
          </View>
          <View style={styles.studentProfile}>
            <Icon
              type="MaterialCommunityIcons"
              name="email"
              style={styles.iconFront}
            />
            <View style={styles.nameBox}>
              <Text>E-Mail</Text>
              <Text style={styles.studentName}>{this.state.email}</Text>
            </View>
            <Icon type="FontAwesome5" name="pen" style={styles.iconBehind} />
          </View>
          <View style={styles.studentProfile}>
            <Icon type="FontAwesome5" name="phone" style={styles.iconFront} />
            <View style={styles.nameBox}>
              <Text>Phone Number</Text>
              <Text style={styles.studentName}>{this.state.phoneNumber}</Text>
            </View>
            <Icon type="FontAwesome5" name="pen" style={styles.iconBehind} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20
  },

  topContainer: {
    alignItems: "center"
  },

  studentPic: {
    borderRadius: 60,
    width: 120,
    height: 120,
    backgroundColor: "#000000"
  },

  profileBox: {
    marginTop: 25
  },

  studentProfile: {
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e8ecf1"
  },

  studentName: {
    marginTop: 5,
    color: "#000000",
    fontWeight: "600"
  },

  nameBox: {
    flexDirection: "column",
    flex: 8,
    paddingLeft: 15
  },

  iconFront: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFA45C"
  },

  iconBehind: {
    flex: 1,
    fontSize: 20,
    color: "#EEEEEE",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
