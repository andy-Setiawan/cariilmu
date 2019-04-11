import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { styles, list } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { getClassListMentor } from "../Action/mentorActions";

import IcLanguage from "../../assets/images/ic_languageClass.png";

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
            type="FontAwesome"
            name="arrow-left"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>{this.props.className}</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.signup()}
          />
        </View>
        <ScrollView style={list.container}>
          <Text style={list.class}>CLASS</Text>
          <View style={list.classBox}>
            {this.props.classData.allClass.map((data, i) => {
                return (
                  <TouchableOpacity
                    key={data._id}
                    onPress={() => Actions.classDetail({ classId: data._id })}
                  >
                    <View style={list.classList}>
                      <Image source={IcLanguage} style={styles.classIcon} />
                      <View style={list.classTextBox}>
                        <Text style={list.classname}>{data.name}</Text>
                        <View style={list.dateTimeBox}>
                          <Icon
                            type="FontAwesome"
                            name="calendar"
                            style={list.iconDateTime}
                          />
                          <Text style={list.dateTimeText}>{data.schedule}</Text>
                        </View>
                        <View style={list.dateTimeBox}>
                          <Icon
                            type="FontAwesome"
                            name="clock-o"
                            style={list.iconDateTime}
                          />
                          <Text style={list.dateTimeText}>
                            {data.durationInMinutes} minutes
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  classData: state.mentor,
  mentor: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    getClassListMentor: token => {
      dispatch(getClassListMentor(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorClassList);
