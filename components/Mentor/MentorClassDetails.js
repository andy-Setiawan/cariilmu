import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { Icon } from "native-base";
import { styles, mntClassDetails } from "../Style.js";
import ClassBanner from "../../assets/images/languageClass.png";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class MentorClassDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.classData.allClass
          .filter(data => data._id == this.props.classId)
          .map(list => {
            return (
              <ScrollView key={list._id}>
                <View style={mntClassDetails.bannerBox}>
                  <ImageBackground alt="" style={mntClassDetails.bannerImage} />
                  <Icon
                    type="Ionicons"
                    name="md-arrow-back"
                    style={{ color: "#fafafa" }}
                    onPress={() => Actions.pop()}
                  />
                </View>
                <View style={mntClassDetails.topContainer}>
                  <Text style={mntClassDetails.name}>{list.name}</Text>
                  <View style={mntClassDetails.categoryBox}>
                    <Text style={mntClassDetails.category}>
                      {list.category.name.toUpperCase()}
                    </Text>
                    <Text style={mntClassDetails.category}>
                      {list.durationInMinutes} MINUTES
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
                      <Text>Star</Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      ...mntClassDetails.description,
                      borderBottomWidth: 1,
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
                      type="FontAwesome"
                      name="calendar"
                    />
                    <Text style={mntClassDetails.dateText}>
                      {list.schedule}
                    </Text>
                  </View>
                  <View style={mntClassDetails.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="FontAwesome"
                      name="clock-o"
                    />
                    <Text style={mntClassDetails.dateText}>
                      {list.durationInMinutes} Minutes
                    </Text>
                  </View>
                  <View style={mntClassDetails.dateBox}>
                    <Icon
                      style={{ fontSize: 20 }}
                      type="MaterialIcons"
                      name="location-on"
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
