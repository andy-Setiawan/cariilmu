import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { styles, list, home } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Get_Class_List } from "../Action/pubActions";

class ClassList extends Component {

  componentDidMount() {
    this.props.Get_Class_List(this.props.classId);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="FontAwesome"
            name="arrow-left"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>{this.props.className.toUpperCase()}</Text>
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
            {(this.props.classData.classList.filter(open => open.status=="opened")).map((data, i) => {
              return (
                <TouchableOpacity
                  key={data._id}
                  onPress={() => Actions.classDetail({classId:data._id})}
                >
                  <View style={list.classList}>
                    <Image source={{uri :this.props.imageUrl}} style={home.categoryIcon} />
                    <View style={list.classTextBox}>
                      <Text style={list.classname}>{data.name}</Text>
                      <Text style={list.mentorname}>{data.mentor.name}</Text>
                      <View style={list.dateTimeBox}>
                        <Icon
                          type="FontAwesome"
                          name="calendar"
                          style={list.iconDateTime}
                        />
                        <Text style={list.dateTimeText}>{data.schedule.substring(0,15)}</Text>
                      </View>
                      <View style={list.dateTimeBox}>
                        <Icon
                          type="FontAwesome"
                          name="clock-o"
                          style={list.iconDateTime}
                        />
                        <Text style={list.dateTimeText}>
                          {data.durationInMinutes} minutes
                        </Text>
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

const mapStateToProps = state => ({
  classData: state.public 
});

const mapDispatchToProps = dispatch => {
  return {
    Get_Class_List: classId => {
      dispatch(Get_Class_List(classId));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ClassList);

