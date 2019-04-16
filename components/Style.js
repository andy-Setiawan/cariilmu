import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const textColor = "#000";
const fontType = "Lato";
const submitColor = "#00e640"
const cancelColor = "#f64747"

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
    fontWeight: "700",
    fontFamily: fontType
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
    fontFamily: fontType,
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
    paddingTop: 5,
    fontFamily: fontType
  },

  bannerText: {
    flex: 2,
    marginRight: 15,
    justifyContent: "space-evenly"
  },

  topText: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: fontType
  },

  midText: {
    fontSize: 12,
    textAlign: "justify",
    fontFamily: fontType
  },

  bannerImage: {
    width: width * 0.3,
    height: width * 0.3
  },

  category: {
    padding: 20
  },

  categoryText: {
    fontWeight: "500",
    fontFamily: fontType
  },

  categoryBox: {
    flexDirection:"column",
    flexWrap: "wrap",
    height: height * 0.4,
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
    width: width * 0.2,
    height: width * 0.2,
    borderRadius:10
  },

  categoryListText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: fontType
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
    fontSize: 15,
    fontFamily: fontType
  }
});

export const register = StyleSheet.create({
  topContainer: {
    padding: (20, 40),
    justifyContent: "flex-end",
    backgroundColor: styles.header.backgroundColor
  },

  bottomContainer: {
    paddingBottom: 20
  },

  roleText: {
    color: "#fafafa",
    fontSize: 30,
    fontWeight: "700",
    fontFamily: fontType
  },

  rolePick: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
    fontFamily: fontType
  },

  imagePosition: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  registerImage: {
    borderRadius: 100,
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: "center"
  },

  registerBox: {
    marginTop: 20,
    paddingHorizontal: 40,
    borderRadius: 5
  },

  error:{
    color:cancelColor
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
    fontSize: 20,
    fontFamily: fontType
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
    marginTop: height * 0.125,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: fontType
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
    color: "#fafafa",
    fontFamily: fontType
  },

  listIcon: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center"
  },

  listText: {
    marginLeft: 20,
    fontWeight: "500",
    fontFamily: fontType
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
    fontWeight: "400",
    fontFamily: fontType
  },

  bannerFee: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
    fontFamily: fontType
  },

  bannerMentor: {
    color: "#fafafa",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 30,
    fontFamily: fontType
  },

  description: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  descriptionText: {
    textAlign: "justify"
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
    color: textColor,
    marginTop: 50,
    fontFamily: fontType
  },

  descText: {
    fontSize: 15,
    textAlign: "center",
    color: textColor,
    marginTop: 20,
    marginHorizontal: 40,
    flexWrap: "wrap",
    fontFamily: fontType
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
    fontWeight: "500",
    fontFamily: fontType
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
    fontWeight: "bold",
    fontFamily: fontType
  },

  dateTimeBox: {
    flexDirection: "row",
    fontSize: 12,
    marginTop: 5,
    fontFamily: fontType
  },

  iconDateTime: {
    fontSize: 20
  },

  dateTimeText: {
    marginLeft: 10
  }
});

export const profile = StyleSheet.create({
  topProfile: {
    backgroundColor: styles.header.backgroundColor,
    height: height * 0.15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  imageProfile: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    width: width * 0.15,
    height: width * 0.15
  },

  nameBox: {
    marginLeft: 20,
    flexDirection: "column"
  },

  nameText: {
    color: styles.container.backgroundColor,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: fontType
  },

  statusText: {
    color: styles.container.backgroundColor,
    fontFamily: fontType
  },

  bottomProfile: {
    backgroundColor: styles.container.backgroundColor,
    padding: 20
  },

  accountText: {
    color: styles.header.backgroundColor,
    fontWeight: "700",
    fontFamily: fontType
  },

  profileBox: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE"
  },

  profileText: {
    color: textColor,
    fontFamily: fontType
  },

  editText: {
    marginTop: 5
  },

  modalBox:{
    backgroundColor:styles.container.backgroundColor,
    padding:20,
  },

  modalText: {
    fontSize:20,
    fontWeight:"700",
    fontFamily:fontType,
    color:styles.header.backgroundColor
  },

  modalInput:{
    marginTop:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#eee"
  },

  handleBox:{
    flexDirection:"row",
    justifyContent:"flex-end",
    marginTop:10
  },

  submit:{
    backgroundColor:submitColor,
    color:"#fafafa",
    borderRadius:10,
    borderColor:"#eee",
    textAlign:"center",
    fontWeight:"700",
    padding:10,
    marginLeft:5,
  },


  cancel:{
    backgroundColor:cancelColor,
    color:"#fafafa",
    borderRadius:10,
    borderColor:"#eee",
    textAlign:"center",
    fontWeight:"700",
    padding:10
  }
});

export const schedule = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },

  classBox: {
    flexDirection: "column",
    marginTop: 10
  },

  classList: {
    marginTop: 10,
    backgroundColor: styles.container.backgroundColor,
    width,
    height: height * 0.125,
    borderBottomWidth: 1,
    borderColor: "#EEE",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap"
  },

  classText: {
    marginLeft: 15
  },

  classnameText: {
    fontWeight: "800",
    fontSize: 15,
    color: textColor,
    fontFamily: fontType
  },

  dateTimeBox: {
    width,
    flexDirection: "row",
    fontSize: 12,
    marginTop: 15,
    fontFamily: fontType
  },

  locationBox: {
    flexDirection: "row",
    fontSize: 12,
    marginTop: 5,
    alignItems: "stretch",
    fontFamily: fontType
  },

  iconDateTime: {
    fontSize: 20,
    
  },

  dateTimeText: {
    marginLeft:20
  },
});

export const payment = StyleSheet.create({
  classBox: {
    flexDirection: "column",
  },

  classList: {
    padding : (10,20),
    backgroundColor: styles.container.backgroundColor,
    width,
    borderBottomWidth: 1,
    borderColor: "#EEE",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap"
  },

  classnameText: {
    fontWeight: "800",
    fontSize: 20,
    color: styles.header.backgroundColor,
    fontFamily: fontType
  },

  dataBox:{
    marginLeft:20,
  },

  dateTimeBox: {
    flexDirection: "row",
    marginTop: 10,
    fontFamily: fontType
  },

  iconDateTime: {
    fontSize: 20,
  },

  dateTimeText: {
    marginLeft:20
  },

  paidText: {
    backgroundColor: submitColor,
    color: styles.container.backgroundColor,
    borderRadius: 10,
    padding:(15,15),
    fontWeight: "800",
    fontFamily: fontType
  },

  unpaidText: {
    backgroundColor: cancelColor,
    color: styles.container.backgroundColor,
    borderRadius: 10,
    padding:(15,15),
    fontWeight: "800",
    fontFamily: fontType
  }
});

export const mntClassDetails = StyleSheet.create({
  bannerImage: {
    height: height * 0.3,
    backgroundColor: "black"
  },

  topContainer: {
    padding: 20,
  },

  name: {
    fontSize: 25,
    color: textColor,
    fontWeight: "700",
    fontFamily: fontType
  },

  categoryBox: {
    marginTop: 20,
    flexDirection: "row"
  },

  category: {
    backgroundColor: styles.header.backgroundColor,
    color: "#fafafa",
    fontFamily: fontType,
    fontWeight: "700",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 15
  },

  description: {
    marginTop: 20,
    fontFamily: fontType
  },

  ratingContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee"
  },

  ratingBox: {
    padding: 10,
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },

  rating: {
    fontFamily: fontType,
    fontSize: 18,
    color: textColor,
    fontWeight: "800"
  },

  bottomContainer:{
    flexDirection:"column",
    paddingHorizontal:20,
  },

  dateBox:{
    flexDirection:"row",
    marginTop:15
  },

  dateText:{
    fontFamily:fontType,
    marginLeft:15,
  }

});
