import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { styles, list, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Get_Class_List } from "../Action/pubActions";
import moment from "moment";
import AwesomeAlert from "react-native-awesome-alerts";

class ClassList extends Component {
  componentDidMount() {
    this.props.Get_Class_List(this.props.classId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>{this.props.className}</Text>
          <Icon
            type="Ionicons"
            name="md-search"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.search()}
          />
        </View>
        {this.props.classData.classList === undefined ||
        this.props.classData.classList === null ||
        this.props.classData.classList.length == 0 ? (
          <View
            style={{
              ...styles.container,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={list.class}>No Class Available</Text>
          </View>
        ) : (
          <ScrollView style={list.container}>
            <Text style={list.class}>CLASS</Text>
            <View style={list.classBox}>
              {this.props.classData.classList
                .filter(open => open.status == "opened")
                .map((data, i) => {
                  return (
                    <TouchableOpacity
                      key={data._id}
                      onPress={() => Actions.classDetail({ classId: data._id })}
                    >
                      <View style={list.classList}>
                        <Image
                          source={{ uri: this.props.imageUrl }}
                          style={home.categoryIcon}
                        />
                        <View style={list.classTextBox}>
                          <Text style={list.classname}>{data.name}</Text>
                          <Text style={list.mentorname}>
                            {data.mentor.name}
                          </Text>
                          <View style={list.dateTimeBox}>
                            <Icon
                              type="Ionicons"
                              name="calendar"
                              style={list.iconDateTime}
                            />
                            <Text style={list.dateTimeText}>
                              {moment(data.schedule).format(
                                "dddd, MMMM Do YYYY"
                              )}
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
                        <Icon
                          type="MaterialIcons"
                          name="navigate-next"
                          style={{ position: "absolute", right: 0 }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
        )}
        <AwesomeAlert
          show={this.props.visible}
          showProgress={this.props.progress}
          progressSize={50}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  classData: state.public,
  progress: state.public.progressStatus,
  visible: state.public.alertStatus
});

const mapDispatchToProps = dispatch => {
  return {
    Get_Class_List: classId => {
      dispatch(Get_Class_List(classId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassList);
