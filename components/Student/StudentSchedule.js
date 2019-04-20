import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles, schedule } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { getStudentClass } from "../Action/studentActions";

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
          <Text style={styles.headerText}>SCHEDULE</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView style={schedule.container}>
          {this.props.schedule.class ? (
            <View style={schedule.classBox}>
              {this.props.schedule.class.map((list, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      Actions.studentClassDetail({
                        classId: list._id,
                        mentorId: list.mentor
                      })
                    }
                  >
                    <View style={schedule.classList}>
                      <View style={schedule.classText}>
                        <Text style={schedule.classnameText}>{list.name}</Text>
                        <View style={schedule.dateTimeBox}>
                          <Icon
                            type="FontAwesome"
                            name="calendar"
                            style={schedule.iconDateTime}
                          />
                          <Text style={schedule.dateTimeText}>
                            {list.schedule}
                          </Text>
                        </View>
                      </View>
                      {list.status == "finished" ? (
                        <Text style={schedule.paidText}>FINISHED</Text>
                      ) : (
                        <Text style={schedule.notYetText}>ON PROGRESS</Text>
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
