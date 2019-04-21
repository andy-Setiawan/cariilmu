import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Icon } from "native-base";
import { styles, mentorDetail, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import StarRating from "react-native-star-rating";
import moment from "moment";

class MentorDetail extends Component {
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
          <Text style={styles.headerText}>Mentor Classes</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        {this.props.mentor
          .filter(data => data._id == this.props.mentorId)
          .map(list => {
            return (
              <ScrollView key={list._id}>
                <View style={mentorDetail.topContainer}>
                  <Image
                    source={{ uri: list.photo }}
                    alt=""
                    style={mentorDetail.image}
                  />
                  <Text style={mentorDetail.name}>
                    {list.name.toUpperCase()}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: 5,
                      alignItems: "center"
                    }}
                  >
                    <Icon
                      type="Ionicons"
                      name="ios-checkmark-circle"
                      style={mentorDetail.icon}
                    />
                    <Text style={mentorDetail.iconText}>Verified Mentor</Text>
                  </View>
                  <StarRating
                    disabled={true}
                    emptyStar={"ios-star-outline"}
                    fullStar={"ios-star"}
                    halfStar={"ios-star-half"}
                    iconSet={"Ionicons"}
                    maxStars={5}
                    rating={list.avgRating}
                    fullStarColor={"#4f9da6"}
                    halfStarColor={"#4f9da6"}
                    starSize={30}
                  />
                </View>
                <View style={mentorDetail.bioBox}>
                  <Icon type="Ionicons" name="md-quote" style={mentorDetail.iconQuote}/>
                  <Text style={mentorDetail.bioText}>{list.bio}</Text>
                </View>
                <View style={mentorDetail.classContainer}>
                  {list.class.map(list => {
                    return this.props.classData
                      .filter(data => data._id == list)
                      .map(value => {
                        return (
                          <TouchableOpacity
                            key={value._id}
                            onPress={() =>
                              Actions.classDetail({ classId: value._id })
                            }
                          >
                            <View style={mentorDetail.classList}>
                              <Image
                                source={{ uri: value.image }}
                                style={home.categoryIcon}
                              />
                              <View style={mentorDetail.classTextBox}>
                                <Text style={mentorDetail.classname}>
                                  {value.name}
                                </Text>
                                <View style={mentorDetail.dateTimeBox}>
                                  <Icon
                                    type="Ionicons"
                                    name="calendar"
                                    style={mentorDetail.iconDateTime}
                                  />
                                  <Text style={mentorDetail.dateTimeText}>
                                    {moment(value.schedule).format(
                                      "dddd, MMMM Do YYYY"
                                    )}
                                  </Text>
                                </View>
                                <View style={mentorDetail.dateTimeBox}>
                                  <Icon
                                    type="Ionicons"
                                    name="md-time"
                                    style={mentorDetail.iconDateTime}
                                  />
                                  <Text style={mentorDetail.dateTimeText}>
                                    {moment(Date(value.startTime)).format(
                                      "hh:mm"
                                    )}
                                    {" - "}
                                    {moment(Date(value.endTime)).format(
                                      "hh:mm"
                                    )}
                                  </Text>
                                </View>
                                <View style={mentorDetail.dateTimeBox}>
                                  <Icon
                                    type="Ionicons"
                                    name="md-map"
                                    style={mentorDetail.iconDateTime}
                                  />
                                  <Text style={mentorDetail.dateTimeText}>
                                    {value.city}
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
                      });
                  })}
                </View>
              </ScrollView>
            );
          })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mentor: state.public.mentor,
  classData: state.public.openClass
});
export default connect(mapStateToProps)(MentorDetail);
