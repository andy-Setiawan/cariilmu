import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { styles, payment } from "../Style.js";
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
        <ScrollView style={payment.container}>
          <View style={payment.classBox}>
            {this.props.status.map((list, i) => {
              return list.class !== null ? (
                <View style={payment.classList} key={i}>
                  <View style={payment.classText}>
                    <Text style={payment.classnameText}>
                      {list.class.name}
                    </Text>
                  </View>
                  {this.props.class
                    .filter(id => id._id == list.class._id)
                    .map((data,index )=> {
                      return (
                        <View key={index}>
                          <View style={payment.dateTimeBox}>
                            <Icon
                              type="FontAwesome"
                              name="calendar"
                              style={payment.iconDateTime}
                            />
                            <Text style={payment.dateTimeText}>
                              {data.schedule}
                            </Text>
                            <Text style={payment.dateTimeText} />
                          </View>
                          <View style={payment.locationBox}>
                            <Icon
                              type="MaterialIcons"
                              name="location-on"
                              style={payment.iconDateTime}
                            />
                            <Text style={payment.dateTimeText}>
                              {data.city}
                            </Text>
                            <Text style={payment.dateTimeText} />
                          </View>
                        </View>
                      );
                    })}
                  {list.status == "pending" ? (
                    <Text style={payment.paidText}>Paid</Text>
                  ) : (
                    <Text style={payment.notYetText}>Not Yet</Text>
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
