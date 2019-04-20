import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import StarRating from "react-native-star-rating";
import { rateMentor } from "../Action/studentActions";

class StudentClassDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating
    });
  }

  uploadRating = () => {
    this.props.rateMentor(this.props.token, this.props.classId, this.props.mentorId, this.state.starCount)
  }

  render() {
    return (
      <View>
        <Text>{this.state.starCount}</Text>
        <StarRating
          disabled={false}
          emptyStar={"ios-star-outline"}
          fullStar={"ios-star"}
          halfStar={"ios-star-half"}
          iconSet={"Ionicons"}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={rating => this.onStarRatingPress(rating)}
          fullStarColor={"red"}
        />
        <TouchableOpacity onPress={this.uploadRating}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => {
  return {
    rateMentor: (token, classId, mentorId, rating) => {
      dispatch(rateMentor(token, classId, mentorId, rating));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentClassDetail);
