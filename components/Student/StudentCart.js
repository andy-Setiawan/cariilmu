import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { styles, payment, home } from "../Style.js";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { getPaymentStatus } from "../Action/studentActions";

class StudentCart extends Component {
  componentDidMount() {
    this.props.getPaymentStatus(this.props.token);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>Payment Status</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <ScrollView>
          <View style={payment.classBox}>
            {this.props.status.map((list, i) => {
              return list.class !== null ? (
                <View>
                  {this.props.class
                    .filter(id => id._id == list.class._id)
                    .map((data, index) => {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() =>
                            Actions.studentPayment({
                              paymentId: list._id,
                              classId: list.class._id,
                              imageId: data.image
                            })
                          }
                        >
                          <View style={payment.classList} key={index}>
                            <Image
                              style={{
                                ...home.categoryIcon,
                                backgroundColor: "black"
                              }}
                            />
                            <View style={payment.dataBox}>
                              <Text style={payment.classnameText}>
                                {data.name}
                              </Text>
                              <View style={payment.dateTimeBox}>
                                <Icon
                                  type="FontAwesome"
                                  name="calendar"
                                  style={payment.iconDateTime}
                                />
                                <Text style={payment.dateTimeText}>
                                  {data.schedule.substring(0, 15)}
                                </Text>
                              </View>
                              <View style={payment.dateTimeBox}>
                                <Icon
                                  type="MaterialIcons"
                                  name="payment"
                                  style={payment.iconDateTime}
                                />
                                <Text style={payment.dateTimeText}>
                                  Rp. {data.fee.toLocaleString("ar-EG")}
                                </Text>
                              </View>
                            </View>
                            <View style={{ position: "absolute", right: 20 }}>
                              {list.status == "pending" ? (
                                <Text style={payment.paidText}>PENDING</Text>
                              ) : list.status == "paid" ? (
                                <Text style={payment.paidText}>PAID</Text>
                              ) : (
                                <Text style={payment.unpaidText}>UNPAID</Text>
                              )}
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
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
    getPaymentStatus: token => {
      dispatch(getPaymentStatus(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentCart);
