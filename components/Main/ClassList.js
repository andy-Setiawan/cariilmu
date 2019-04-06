import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { styles, list } from "../Style.js";
import { Actions } from "react-native-router-flux";

import IcLanguage from "../../assets/images/ic_languageClass.png";
import IcMusic from "../../assets/images/ic_musicClass.png";
import IcDesign from "../../assets/images/ic_designClass.png";
import IcComputer from "../../assets/images/ic_computerClass.png";
import IcOther from "../../assets/images/ic_otherClass.png";

export default class ClassList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          className: "Kelas Desain Logo",
          mentorName: "Rama Soepang",
          date: "Wednesday, March 27, 2019",
          time: "15:00 - 18.00",
          image: IcDesign
        },
        {
          className: "Kelas Desain Banner",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcMusic
        },
        {
          className: "Kelas CSS",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcComputer
        },
        {
          className: "Kelas CorelDraw",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcOther
        },
        {
          className: "Kelas Adobe",
          mentorName: "Rama Soepang",
          time: "15:00 - 18.00",
          date: "Wednesday, March 27, 2019",
          image: IcLanguage
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="FontAwesome"
            name="arrow-left"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>DESIGN</Text>
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
            {this.state.list.map((data, i) => {
              return (
                <TouchableOpacity key={i} onPress={() => Actions.classDetail()}>
                  <View style={list.classList}>
                    <Image source={data.image} style={styles.classIcon} />
                    <View style={list.classTextBox}>
                      <Text style={list.classname}>{data.className}</Text>
                      <Text>{data.mentorName}</Text>
                      <View style={list.dateTimeBox}>
                        <Icon
                          type="FontAwesome"
                          name="calendar"
                          style={list.iconDateTime}
                        />
                        <Text style={list.dateTimeText}>{data.date}</Text>
                      </View>
                      <View style={list.dateTimeBox}>
                        <Icon
                          type="FontAwesome"
                          name="clock-o"
                          style={list.iconDateTime}
                        />
                        <Text style={list.dateTimeText}>{data.time}</Text>
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
