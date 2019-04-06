import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import {Get_Open_Class} from "../Action/pubActions"
import IconDesignClass from "../../assets/images/ic_designClass.png";
import { Icon, Drawer } from "native-base";
import StudentDrawer from "../Student/StudentDrawer";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        {
          name: "COMPUTER",
          image: require("../../assets/images/home_computer.png")
        },
        {
          name: "DESIGN",
          image: require("../../assets/images/home_design.png")
        },
        { name: "MUSIC", image: require("../../assets/images/home_music.png") },
        {
          name: "LANGUAGE",
          image: require("../../assets/images/home_language.png")
        },
        {
          name: "ECONOMY",
          image: require("../../assets/images/home_economy.png")
        },
        { name: "OTHER", image: require("../../assets/images/home_other.png") }
      ]
    };
  }

  openDrawer() {
    {!this.props.token.token && Actions.signin()}
    {this.props.token.token && this._drawer._root.open()};
  }

  componentDidMount(){
    this.props.Get_Open_Class()
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
                  {/* Join Us !! Find your passion in EduCity */}
                  Yuk bargabung dengan kita !!! Temukan Passionmu di cariilmu
                </Text>
                <Text style={home.midText}>
                  {/* Hone your skills by learning from the expert */}
                  Tingkatkan kemampuanmu dengan belajar bersama para ahli
                </Text>
                <TouchableOpacity onPress={() => Actions.signup()}>
                  <Text style={home.join}>JOIN US!!</Text>
                </TouchableOpacity>
              </View>
              <Image style={home.bannerImage} source={require("../../assets/images/home_banner.png")} />
            </View>
            <View style={home.category}>
              <Text style={home.categoryText}>CATEGORY</Text>
              <View style={home.categoryBox}>
                {this.state.category.map((list, i) => {
                  return (
                    <View style={home.categoryPosition} key={i}>
                      <Image
                        source={list.image}
                        alt=""
                        style={home.categoryIcon}
                      />
                      <Text style={home.categoryListText} onPress={()=> Actions.classList()}>{list.name}</Text>
                    </View>
                  );
                })}
              </View>
              <Text style={home.categoryText}>NEW CLASSES</Text>
              {(this.props.classData.openClass.slice(0,5)).map((list, i) => {
                return (
                  <TouchableOpacity
                    key={list._id}
                    onPress={() => Actions.classDetail()}
                  >
                    <View style={home.classBox}>
                      <Image
                        source={IconDesignClass}
                        style={styles.classIcon}
                      />
                      <View style={home.classText}>
                        <Text style={home.classnameText}>{list.name}</Text>
                        <Text>{list.status}</Text>
                        <Text>{list.fee}</Text>
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
  token:state.authReducer
});

const mapDispatchToProps = dispatch => {
  return {
    Get_Open_Class : () => {dispatch(Get_Open_Class())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
