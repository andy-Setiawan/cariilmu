import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles, schedule } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { getStudentClass } from "../Action/studentActions";
import moment from "moment";

class StudentSchedule extends Component {
  componentDidMount() {
    this.props.getStudentClass(this.props.token);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>My Schedules</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView style={schedule.container}>
          {this.props.schedule.class ? (
            <View style={schedule.classContainer}>
              {this.props.schedule.class.map((list, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      Actions.studentClassDetail({
                        classId: list._id,
                        mentorId: list.mentor,
                        location: list.location,
                        rating: list.rating,
                        status: list.status
                      })
                    }
                  >
                    <View style={schedule.classBox}>
                      <View style={schedule.classList}>
                        <Text style={schedule.classnameText}>{list.name}</Text>
                        <View style={schedule.dateTimeBox}>
                          <Icon
                            type="Ionicons"
                            name="calendar"
                            style={schedule.iconDateTime}
                          />
                          <Text style={schedule.dateTimeText}>
                            {moment(list.schedule).format("dddd, MMMM Do YYYY")}
                          </Text>
                        </View>
                        <View style={schedule.dateTimeBox}>
                          <Icon
                            type="Ionicons"
                            name="md-time"
                            style={schedule.iconDateTime}
                          />
                          <Text style={schedule.dateTimeText}>
                            {moment(Date(list.startTime)).format("hh:mm")}
                            {" - "}
                            {moment(Date(list.endTime)).format("hh:mm")}
                          </Text>
                        </View>
                      </View>
                      {list.status == "opened" ? (
                        <Icon
                          type="Ionicons"
                          name="md-close-circle"
                          style={schedule.cancelIcon}
                        />
                      ) : (
                        <Icon
                          type="Ionicons"
                          name="ios-checkmark-circle"
                          style={schedule.okIcon}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            console.log("NONO")
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  schedule: state.student.class,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => {
  return {
    getStudentClass: token => {
      dispatch(getStudentClass(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentSchedule);
