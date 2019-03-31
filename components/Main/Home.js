import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import IconDesignClass from "../../assets/images/ic_designClass.png";
import { Icon, Drawer } from "native-base";
import StudentDrawer from "../Student/StudentDrawer";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          className: "Kelas Desain",
          mentorName: "Rama Soepang",
          fee: "Rp 30.000",
          date: "Wednesday, March 27, 2019"
        },
        {
          className: "Kelas Desain",
          mentorName: "Rama Soepang",
          fee: "Rp 30.000",
          date: "Wednesday, March 27, 2019"
        }
      ],

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
    this._drawer._root.open();
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
                  Join Us !! Find your passion in EduCity
                </Text>
                <Text style={home.midText}>
                  Hone your skills by learning from the expert
                </Text>
                <TouchableOpacity onPress={() => Actions.signup()}>
                  <Text style={home.join}>JOIN US!!</Text>
                </TouchableOpacity>
              </View>
              <View style={home.bannerImage} />
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
                      <Text style={home.categoryListText}>{list.name}</Text>
                    </View>
                  );
                })}
              </View>
              <Text style={home.categoryText}>NEW CLASSES</Text>
              {this.state.list.map((list, i) => {
                return (
                  <TouchableOpacity key={i} onPress={() => Actions.classDetail()}>
                    <View style={home.classBox}>
                      <Image
                        source={IconDesignClass}
                        style={styles.classIcon}
                      />
                      <View style={home.classText}>
                        <Text style={home.classnameText}>{list.className}</Text>
                        <Text>{list.mentorName}</Text>
                        <Text>{list.fee}</Text>
                        <Text>{list.date}</Text>
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

