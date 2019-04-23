import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { styles, list, schedule, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { getClassListMentor } from "../Action/mentorActions";
import moment from "moment";

class MentorClassList extends Component {
  componentDidMount() {
    this.props.getClassListMentor(this.props.mentor.token);
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
          <Text style={styles.headerText}>CLASSES HISTORY</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView style={list.container}>
          <Text style={list.class}>CLASSES</Text>
          <View style={list.classBox}>
            {this.props.classData.allClass.map((data, i) => {
              return (
                <TouchableOpacity
                  key={data._id}
                  onPress={() =>
                    Actions.mentorClassDetail({ classId: data._id })
                  }
                >
                  <View style={list.classList}>
                    <Image
                      source={{ uri: data.image }}
                      style={home.categoryIcon}
                    />
                    <View style={list.classTextBox}>
                      <Text style={list.classname}>{data.name}</Text>
                      <View style={list.dateTimeBox}>
                        <Icon
                          type="Ionicons"
                          name="calendar"
                          style={list.iconDateTime}
                        />
                        <Text style={list.dateTimeText}>
                          {moment(data.schedule).format("dddd, MMMM Do YYYY")}
                        </Text>
                      </View>
                      <View style={list.dateTimeBox}>
                        <Icon
                          type="Ionicons"
                          name="md-time"
                          style={list.iconDateTime}
                        />
                        <Text style={list.dateTimeText}>
                          {moment(Date(data.startTime)).format("hh:mm")}
                          {" - "}
                          {moment(Date(data.endTime)).format("hh:mm")}
                        </Text>
                      </View>
                    </View>
                    {data.status == "opened" ? (
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
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  classData: state.mentor,
  mentor: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getClassListMentor: token => dispatch(getClassListMentor(token))  
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorClassList);
