import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles, onBoarding } from "../Style.js";
import { Actions } from "react-native-router-flux";
import SwiperFlatList from "react-native-swiper-flatlist";
import onBoarding01 from "../../assets/images/onBoarding01.png";
import onBoarding02 from "../../assets/images/onBoarding02.png";
import onBoarding03 from "../../assets/images/onBoarding03.png";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";

export default class OnBoarding extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }

  onBoarding = () => {
    AsyncStorage.setItem("board", "start"), Actions.home();
  };
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          showPagination
          paginationActiveColor="#f07b3f"
          paginationStyle={onBoarding.page}
        >
          <View style={onBoarding.child}>
            <View style={onBoarding.imageBox}>
              <Image source={onBoarding01} alt="" />
            </View>
            <Text style={onBoarding.title}>Kelas yang bervariasi</Text>
            <Text style={onBoarding.descText}>
              Temukan kelas yang kamu minati sesuai minat dan kebutuhanmu
            </Text>
          </View>
          <View style={onBoarding.child}>
            <View style={onBoarding.imageBox}>
              <Image source={onBoarding02} alt="" />
            </View>
            <Text style={onBoarding.title}>Tutor yang Terampil</Text>
            <Text style={onBoarding.descText}>
              Tutor terkurasi dari kampus - kampus terbaik
            </Text>
          </View>
          <View style={onBoarding.child}>
            <View style={onBoarding.imageBox}>
              <Image source={onBoarding03} alt="" />
            </View>
            <Text style={onBoarding.title}>Reward yang menarik</Text>
            <Text style={onBoarding.descText}>
              Jadilah bagian dari network cariilmu dan dapatkan sertifikasi atau
              pendapatan tambahan
            </Text>
            <TouchableOpacity
              style={onBoarding.startBox}
              onPress={this.onBoarding}
            >
              <Text style={styles.button}>START</Text>
            </TouchableOpacity>
          </View>
        </SwiperFlatList>
      </View>
    );
  }
}
