import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { styles, schedule } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { getPaymentStatus } from "../Action/studentActions";

class StudentCart extends Component {
  componentDidMount() {
    this.props.getPaymentStatus(this.props.token);
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
          <Text style={styles.headerText}>PAYMENT STATUS</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView style={schedule.container}>
          <View style={schedule.classBox}>
            {this.props.status.map((list, i) => {
              return list.class !== null ? (
                <View style={schedule.classList} key={i}>
                  <View style={schedule.classText}>
                    <Text style={schedule.classnameText}>
                      {list.class.name}
                    </Text>
                  </View>
                  {this.props.class
                    .filter(id => id._id == list.class._id)
                    .map((data,index )=> {
                      return (
                        <View key={index}>
                          <View style={schedule.dateTimeBox}>
                            <Icon
                              type="FontAwesome"
                              name="calendar"
                              style={schedule.iconDateTime}
                            />
                            <Text style={schedule.dateTimeText}>
                              {data.schedule}
                            </Text>
                            <Text style={schedule.dateTimeText} />
                          </View>
                          <View style={schedule.locationBox}>
                            <Icon
                              type="MaterialIcons"
                              name="location-on"
                              style={schedule.iconDateTime}
                            />
                            <Text style={schedule.dateTimeText}>
                              {data.city}
                            </Text>
                            <Text style={schedule.dateTimeText} />
                          </View>
                        </View>
                      );
                    })}
                  {list.status == "pending" ? (
                    <Text style={schedule.paidText}>Paid</Text>
                  ) : (
                    <Text style={schedule.notYetText}>Not Yet</Text>
                  )}
                </View>
              ) : (
                <View key={i} />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.student.paymentStatus,
  class: state.public.allClass,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => {
  return {
    getPaymentStatus: (token) => {
      dispatch(getPaymentStatus(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCart);
