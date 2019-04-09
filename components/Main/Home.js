import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Get_Open_Class, Get_Category } from "../Action/pubActions";
import { Set_Token } from "../Action/authActions";
import { getProfile } from "../Action/studentActions";
import IconDesignClass from "../../assets/images/ic_designClass.png";
import { Icon, Drawer } from "native-base";
import StudentDrawer from "../Student/StudentDrawer";
import AsyncStorage from "@react-native-community/async-storage";

class Home extends Component {
  openDrawer() {
    {
      !this.props.token.token && Actions.signin();
    }
    {
      this.props.token.token && this._drawer._root.open();
    }
  }

  closeDrawer() {
    {
      this._drawer._root.close();
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("token").then(value => {
      value
        ? (this.props.Set_Token(value), this.props.getProfile(value))
        : console.log("no");
    }),
      this.props.Get_Open_Class(),
      this.props.Get_Category();
  }

  render() {
    return (
      <Drawer ref={ref => (this._drawer = ref)} content={<StudentDrawer />}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              type="MaterialCommunityIcons"
              name="menu"
              style={{ color: "#fafafa" }}
              onPress={() => this.openDrawer()}
            />
            <Image source={require("../../assets/images/home_logo.png")} />
            <Icon
              type="MaterialIcons"
              name="notifications"
              style={{ color: "#fafafa" }}
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
              <Text style={home.categoryText}>CATEGORY</Text>
              <View style={home.categoryBox}>
                {this.props.classData.category.map((list, i) => {
                  return (
                    <TouchableOpacity
                      key={list._id}
                      onPress={() =>
                        Actions.classList({
                          className: list.name,
                          classId: list._id
                        })
                      }
                    >
                      <View style={home.categoryPosition}>
                        {/* <Image
                        source={require(`../../assets/images/${image}.png`)}
                        alt=""
                        style={home.categoryIcon}
                      /> */}
                        <Text style={home.categoryListText}>{list.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text style={home.categoryText}>NEW CLASSES</Text>
              {this.props.classData.openClass.slice(0, 5).map((list, i) => {
                return (
                  <TouchableOpacity
                    key={list._id}
                    onPress={() => Actions.classDetail({ classId: list._id })}
                  >
                    <View style={home.classBox}>
                      <Image
                        source={IconDesignClass}
                        style={styles.classIcon}
                      />
                      <View style={home.classText}>
                        <Text style={home.classnameText}>{list.name}</Text>
                        <Text>{list.mentor.name}</Text>
                        <Text>{list.city}</Text>
                        <Text>{list.schedule}</Text>
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
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  classData: state.homeReducer,
  token: state.authReducer
});

const mapDispatchToProps = dispatch => {
  return {
    Get_Open_Class: () => {
      dispatch(Get_Open_Class());
    },
    Get_Category: () => {
      dispatch(Get_Category());
    },
    Set_Token: token => {
      dispatch(Set_Token(token));
    },
    getProfile: token => {
      dispatch(getProfile(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
