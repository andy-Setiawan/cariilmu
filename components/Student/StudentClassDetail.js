import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import StarRating from "react-native-star-rating";
import { rateMentor } from "../Action/studentActions";
import { styles, studentDetail } from "../Style.js";
import { Icon, Item, Input } from "native-base";
import moment from "moment";
import { Actions } from "react-native-router-flux";
import Modal from "react-native-modal";

class StudentClassDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      isModalVisible: false,
      feedback: ""
    };
  }

  onStarRatingPress = rating => {
    this.setState({
      starCount: rating
    });
  };

  uploadRating = () => {
    this.props.rateMentor(
      this.props.token,
      this.props.classId,
      this.props.mentorId,
      this.state.starCount,
      this.state.feedback
    );
    this.setState({ isModalVisible: false });
  };

  componentDidMount() {
    this.props.rating.length == 0
      ? this.setState({ starCount: 0 })
      : this.setState({ starCount: this.props.rating[0].rating });
    this.props.status == "finished" && this.props.rating.length == 0
      ? this.setState({ isModalVisible: true })
      : this.setState({ isModalVisible: false });

    console.log(this.props.status, this.props.rating);
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
          <Text style={styles.headerText}>Schedule Details</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        {this.props.classData
          .filter(data => data._id == this.props.classId)
          .map(list => {
            return (
              <ScrollView key={list._id}>
                <View style={studentDetail.topContainer}>
                  <Image
                    source={{ uri: list.image }}
                    alt=""
                    style={studentDetail.bannerImage}
                  />
                </View>
                <View style={studentDetail.bannerBox}>
                  <View style={studentDetail.classBox}>
                    <Text style={studentDetail.bannerClass}>{list.name}</Text>
                    <Text style={studentDetail.category}>
                      {list.category.name.toUpperCase()}
                    </Text>
                  </View>
                  <Text style={studentDetail.bannerMentor}>
                    By: {list.mentor.name}
                  </Text>
                  <View style={studentDetail.star}>
                    <StarRating
                      disabled={true}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"#4f9da6"}
                      halfStarColor={"#4f9da6"}
                      starSize={20}
                    />
                  </View>
                </View>
                <View style={studentDetail.dateContainer}>
                  <View style={studentDetail.dateBox}>
                    <Icon
                      style={studentDetail.icon}
                      type="Ionicons"
                      name="calendar"
                    />
                    <Text style={studentDetail.dateText}>
                      {moment(list.schedule).format("dddd, MMMM Do YYYY")}
                    </Text>
                  </View>
                  <View style={studentDetail.dateBox}>
                    <Icon
                      style={studentDetail.icon}
                      type="Ionicons"
                      name="md-time"
                    />
                    <Text style={studentDetail.dateText}>
                      {moment(Date(list.startTime)).format("hh:mm")}
                      {" - "}
                      {moment(Date(list.endTime)).format("hh:mm")}
                    </Text>
                  </View>
                  <View style={studentDetail.dateBox}>
                    <Icon
                      style={studentDetail.icon}
                      type="Ionicons"
                      name="md-map"
                    />
                    <Text style={studentDetail.dateText}>
                      {this.props.location}
                      {", "}
                      {list.city}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            );
          })}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={studentDetail.ratingBox}>
            <Text style={studentDetail.rateText}>Rate the class</Text>
            <View style={studentDetail.starBox}>
              <StarRating
                disabled={false}
                emptyStar={"ios-star-outline"}
                fullStar={"ios-star"}
                halfStar={"ios-star-half"}
                iconSet={"Ionicons"}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={rating => this.onStarRatingPress(rating)}
                fullStarColor={"#4f9da6"}
                halfStarColor={"#4f9da6"}
              />
            </View>
            <Item style={studentDetail.feedbackBox}>
              <Icon type="Ionicons" name="md-clipboard" />
              <Input
                placeholder="Give Your Feedback ..."
                onChangeText={feedback => this.setState({ feedback })}
              />
            </Item>
          </View>
          <TouchableOpacity onPress={this.uploadRating}>
            <Text style={{ ...styles.button, marginTop: 10 }}>
              Submit Feedback
            </Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  classData: state.public.allClass
});

const mapDispatchToProps = dispatch => {
  return {
    rateMentor: (token, classId, mentorId, rating, feedback) => {
      dispatch(rateMentor(token, classId, mentorId, rating, feedback));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentClassDetail);
