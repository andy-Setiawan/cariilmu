import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Get_HomeData } from "../Action/pubActions";
import { Set_Token, Set_Role } from "../Action/authActions";
import { getProfileStudent } from "../Action/studentActions";
import { getProfileMentor } from "../Action/mentorActions";
import { Icon, Drawer } from "native-base";
import StudentDrawer from "../Student/StudentDrawer";
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
import StarRating from "react-native-star-rating";
import MentorDrawer from "../Mentor/MentorDrawer.js";
import AwesomeAlert from "react-native-awesome-alerts";

class Home extends Component {
  componentDidMount() {
    AsyncStorage.getItem("board").then(value => {
      value == "start" ? console.log('ok') : Actions.onboarding();
    }),
    AsyncStorage.getItem("role").then(value => {
      value ? this.props.Set_Role(value) : console.log("no");
    }),
      AsyncStorage.getItem("token").then(value => {
        value
          ? (this.props.Set_Token(value),
            this.props.auth.role == "student"
              ? this.props.getProfileStudent(value)
              : this.props.getProfileMentor(value))
          : console.log("no");
      }),
      this.props.Get_HomeData()
  }
  openDrawer() {
    {
      !this.props.auth.token && Actions.signin();
    }
    {
      this.props.auth.token && this._drawer._root.open();
    }
  }

  closeDrawer = () => {
    this.props.auth.token && this._drawer._root.close();
  };

  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        content={
          this.props.auth.role == "student" ? (
            <StudentDrawer closeDrawer={this.closeDrawer} />
          ) : (
            <MentorDrawer closeDrawer={this.closeDrawer} />
          )
        }
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              type="Ionicons"
              name="md-menu"
              style={{ color: "#fafafa" }}
              onPress={() => this.openDrawer()}
            />
            <Image source={require("../../assets/images/home_logo.png")} />
            <Icon
              type="Ionicons"
              name="md-search"
              style={{ color: "#fafafa" }}
              onPress={() => Actions.search()}
            />
          </View>
          <ScrollView style={styles.container}>
            <View style={home.banner}>
              <View style={home.bannerText}>
                <Text style={home.topText}>
                  Yuk bargabung dengan kita !!! Temukan Passionmu di cariilmu
                </Text>
                <Text style={home.midText}>
                  Tingkatkan kemampuanmu dengan belajar bersama para ahli
                </Text>
                <TouchableOpacity onPress={() => Actions.signin()}>
                  <Text style={home.join}>JOIN US!!</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={home.bannerImage}
                source={require("../../assets/images/home_banner.png")}
              />
            </View>
            <View style={home.category}>
              <Text style={home.categoryText}>CATEGORIES</Text>
              <ScrollView horizontal>
                <View horizontal style={home.categoryBox}>
                  {this.props.classData.category.map((list, i) => {
                    return (
                      <TouchableOpacity
                        key={list._id}
                        onPress={() =>
                          Actions.classList({
                            className: list.name,
                            classId: list._id,
                            imageUrl: list.photo
                          })
                        }
                      >
                        <View style={home.categoryPosition}>
                          <Image
                            source={{ uri: list.photo }}
                            alt=""
                            style={home.categoryIcon}
                          />
                          <Text style={home.categoryListText}>
                            {list.name.toUpperCase()}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
              <Text style={home.categoryText}>MENTOR LIST</Text>
              <ScrollView horizontal>
                <View horizontal style={home.mentorBox}>
                  {this.props.classData.mentor
                    .filter(data => data.verified === true)
                    .map((list, i) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() =>
                            Actions.mentorDetail({
                              mentorId: list._id
                            })
                          }
                        >
                          <View style={home.ratingPosition}>
                            <Image
                              source={{ uri: list.photo }}
                              alt=""
                              style={home.ratingIcon}
                            />
                            <Text style={home.ratingListText}>
                              {list.name.toUpperCase()}
                            </Text>
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
                              starSize={15}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </ScrollView>
              <Text style={home.categoryText}>NEW CLASSES</Text>
              {this.props.classData.openClass.slice(0, 5).map(list => {
                return (
                  <TouchableOpacity
                    key={list._id}
                    onPress={() => Actions.classDetail({ classId: list._id })}
                  >
                    <View style={home.classBox}>
                      <Image
                        source={{ uri: list.image }}
                        style={{ ...home.categoryIcon, marginLeft: 10 }}
                      />
                      <View style={home.classText}>
                        <Text style={home.classnameText}>{list.name}</Text>
                        <Text style={home.text}>{list.mentor.name}</Text>
                        <Text style={home.text}>{list.city}</Text>
                        <Text style={home.text}>
                          {moment(list.schedule).format("dddd, MMMM Do YYYY")}
                        </Text>
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
        <AwesomeAlert
          show={this.props.visible}
          showProgress={this.props.progress}
          progressSize={100}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
        />
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  classData: state.public,
  auth: state.auth,
  progress: state.public.progressStatus,
  visible: state.public.alertStatus
});

const mapDispatchToProps = dispatch => {
  return {
    Get_HomeData: () => dispatch(Get_HomeData()),
    Set_Token: token => dispatch(Set_Token(token)),
    Set_Role: role => dispatch(Set_Role(role)),
    getProfileStudent: token => dispatch(getProfileStudent(token)),
    getProfileMentor: token => dispatch(getProfileMentor(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
