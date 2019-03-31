import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import {Actions} from 'react-native-router-flux';
import SwiperFlatList from "react-native-swiper-flatlist";
import onBoarding01 from "../../assets/images/onBoarding01.png";
import onBoarding02 from "../../assets/images/onBoarding02.png";
import onBoarding03 from "../../assets/images/onBoarding03.png";

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationActiveColor="#FFA45C"
        paginationStyle={styles.pageStyle}
      >
        <View style={styles.child}>
          <View style={styles.imageBox}>
            <Image source={onBoarding01} alt="" />
          </View>
          <Text style={styles.titleText}>Kelas yang bervariasi</Text>
          <Text style={styles.descText}>
            Temukan kelas yang kamu minati sesuai minat dan kebutuhanmu
          </Text>
        </View>
        <View style={styles.child}>
          <View style={styles.imageBox}>
            <Image source={onBoarding02} alt="" />
          </View>
          <Text style={styles.titleText}>Tutor yang Terampil</Text>
          <Text style={styles.descText}>
            Tutor terkurasi dari kampus - kampus terbaik
          </Text>
        </View>
        <View style={styles.child}>
          <View style={styles.imageBox}>
            <Image source={onBoarding03} alt="" />
          </View>
          <Text style={styles.titleText}>Reward yang menarik</Text>
          <Text style={styles.descText}>
            Jadilah bagian dari network cariilmu dan dapatkan sertifikasi atau
            pendapatan tambahan
          </Text>
          <TouchableOpacity onPress={()=> Actions.home()}>
            <Text style={styles.startButton}>START</Text>
          </TouchableOpacity>
        </View>
      </SwiperFlatList>
    </View>
  );
};

export default OnBoarding;

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  child: {
    padding: 20,
    height,
    width,
  },

  imageBox: {
    marginTop: 80,
    alignItems: "center"
  },

  titleText: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    color: "#000000",
    marginTop: 50
  },

  descText: {
    fontSize: 15,
    textAlign: "center",
    color: "#000000",
    marginTop: 20,
    marginHorizontal: 40,
    flexWrap: "wrap"
  },

  startButton: {
    backgroundColor: "#FFA45C",
    borderRadius: 10,
    height: 40,
    textAlign: "center",
    paddingTop: 5,
    marginTop: 75,
    marginHorizontal: 40,
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 20
  },

  pageStyle: {
    marginBottom: 150
  }
});
