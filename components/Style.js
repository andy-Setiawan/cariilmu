import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  header: {
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#4f9da6"
  },

  headerText: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "700"
  },

  classIcon: {
    height: width * 0.17,
    width: width * 0.17,
    borderRadius: 100,
    marginLeft: 10
  },

  button: {
    backgroundColor: "#f07b3f",
    color: "#fafafa",
    fontWeight: "500",
    height: 50,
    marginTop: 60,
    borderRadius: 10,
    paddingVertical: 15,
    textAlign: "center"
  }
});

export const home = StyleSheet.create({
  banner: {
    backgroundColor: "#deecff",
    padding: 20,
    flexDirection: "row",
    elevation: 2
  },

  join: {
    backgroundColor: "#f07b3f",
    textAlign: "center",
    color: "#fafafa",
    fontWeight: "500",
    height: 30,
    borderRadius: 20,
    paddingTop: 5
  },

  bannerText: {
    flex: 2,
    marginRight: 15,
    justifyContent: "space-evenly"
  },

  topText: {
    fontSize: 15,
    fontWeight: "600"
  },

  midText: {
    fontSize: 12,
    textAlign:"justify"
  },

  bannerImage: {
    backgroundColor: "#fafafa",
    width: width * 0.3,
    height: width * 0.3
  },

  category: {
    padding: 20
  },

  categoryText: {
    fontWeight: "500"
  },

  categoryBox: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  categoryPosition: {
    padding: 5,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    width: width * 0.25,
    height: width * 0.25,
    margin: (10, 10),
    alignItems: "center",
    justifyContent: "center",
    elevation: 4
  },

  categoryIcon: {
    width: width * 0.1,
    height: height * 0.05
  },

  categoryListText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "700"
  },

  classBox: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#fafafa",
    width: width * 0.9,
    height: height * 0.15,
    elevation: 6,
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },

  classText: {
    marginLeft: 15
  },

  classnameText: {
    color: styles.header.backgroundColor,
    fontWeight: "bold",
    fontSize: 15
  }
});

export const register = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: styles.header.backgroundColor
  },

  bottomContainer: {
    flex: 9,
    paddingBottom: 20
  },

  registerImage: {
    marginBottom: -70,
    width: width * 0.4,
    height: height * 0.2,
    justifyContent: "center"
  },

  registerBox: {
    marginTop: 40,
    paddingHorizontal: 40,
    borderRadius: 5
  }
});

export const login = StyleSheet.create({
  topContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: styles.header.backgroundColor
  },

  bottomContainer: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: -40
  },

  logoBox: {
    alignItems: "center"
  },

  logo: {
    width: width * 0.4,
    height: width * 0.4
  },

  loginText: {
    marginTop: 20,
    color: "#fafafa",
    fontWeight: "500",
    fontSize: 20
  },

  loginBox: {
    backgroundColor: "#fafafa",
    paddingHorizontal: 30,
    paddingTop: 20,
    height: height * 0.4,
    borderRadius: 5
  },

  loginButton: {
    position: "absolute",
    bottom: height * 0.125,
    width: width * 0.75,
    right: width * 0.125

  },

  signupText: {
    marginTop: height *0.125,
    textAlign: "center",
    fontWeight: "500"
  }
});

export const drawer = StyleSheet.create({
  topContainer: {
    height: height * 0.25,
    padding: 20,
    justifyContent: "center",
    backgroundColor: styles.header.backgroundColor
  },

  middleContainer: {
    paddingBottom: 15,
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  userText: {
    color: "#fafafa"
  },

  listIcon: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center"
  },

  listText: {
    marginLeft: 20,
    fontWeight: "500"
  }
});

export const detail = StyleSheet.create({
  bannerImage: {
    height: height * 0.4,
    width
  },

  bannerBox: {
    position: "absolute",
    padding: 20,
    zIndex: 1
  },

  bannerClass: {
    marginTop: height * 0.15,
    color: "#fafafa",
    fontSize: 35,
    fontWeight: "400"
  },

  bannerFee: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30
  },

  bannerMentor: {
    color: "#fafafa",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 30
  },

  description: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },


  descriptionText: {
    textAlign:"justify"
  },

  dateContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20
  },

  dateBox: {
    marginTop: 10,
    flexDirection: "row"
  },

  dateText: {
    marginLeft: 20
  }
});

export const onBoarding = StyleSheet.create({
  child: {
    padding: 20,
    height,
    width,
    alignItems: "center"
  },

  imageBox: {
    marginTop: height * 0.15
  },

  title: {
    fontSize: 20,
    fontWeight: "900",
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

  page: {
    marginBottom: height * 0.2
  },

  startBox: {
    position: "absolute",
    bottom: height * 0.1,
    width: width * 0.75
  }
});

export const list = StyleSheet.create({
  container: {
    padding: 20
  },

  class: {
    fontWeight: "500"
  },

  classBox: {
    paddingVertical: 20
  },

  classList: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  classTextBox: {
    marginLeft: 15
  },

  classname: {
    color: styles.header.backgroundColor,
    fontWeight: "bold"
  },

  dateTimeBox: {
    flexDirection: "row",
    fontSize: 12,
    marginTop: 5
  },

  iconDateTime: {
    fontSize: 20
  },

  dateTimeText: {
    marginLeft: 10
  }
});
