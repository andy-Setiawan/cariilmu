import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Icon } from "native-base";
import { styles, mntClassDetails } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import moment from "moment";

class MentorClassDetails extends Component {
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
          <Text style={styles.headerText}>CLASSES HISTORY</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        {this.props.classData.allClass
          .filter(data => data._id == this.props.classId)
          .map(list => {
            return (
              <ScrollView key={list._id}>
                <Image
                  alt=""
                  source={{ uri: list.image }}
                  style={mntClassDetails.bannerImage}
                />
                <View style={mntClassDetails.topContainer}>
                  <View style={mntClassDetails.categoryBox}>
                    <Text style={mntClassDetails.name}>{list.name}</Text>
                    <Text style={mntClassDetails.category}>
                      {list.category.name.toUpperCase()}
                    </Text>
                  </View>
                  <View style={mntClassDetails.ratingContainer}>
                    <View
                      style={{
                        ...mntClassDetails.ratingBox,
                        borderRightWidth: 1,
                        borderColor: "#eee"
                      }}
                    >
                      <Text style={mntClassDetails.rating}>Total Students</Text>
                      <Text>{list.student.length}</Text>
                    </View>
                    <View style={mntClassDetails.ratingBox}>
                      <Text style={mntClassDetails.rating}>Rating</Text>
                      <Text>{list.rating.length} </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      ...mntClassDetails.description,
                      borderBottomWidth: 1,
                      borderBottomColor:"#eee",
                      paddingBottom: 20
                    }}
                  >
                    {list.info}
                  </Text>
                </View>
                <View style={mntClassDetails.bottomContainer}>
                  <View style={mntClassDetails.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="Ionicons"
                      name="calendar"
                    />
                    <Text style={mntClassDetails.dateText}>
                      {moment(list.schedule).format("dddd, MMMM Do YYYY")}
                    </Text>
                  </View>
                  <View style={mntClassDetails.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="Ionicons"
                      name="md-time"
                    />
                    <Text style={mntClassDetails.dateText}>
                      {moment(Date(list.startTime)).format("hh:mm")}
                      {" - "}
                      {moment(Date(list.endTime)).format("hh:mm")}
                    </Text>
                  </View>
                  <View style={mntClassDetails.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="Ionicons"
                      name="md-map"
                    />
                    <Text style={mntClassDetails.dateText}>
                      {list.location}, {list.city}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            );
          })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  classData: state.mentor,
  mentor: state.auth
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorClassDetails);
