import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Icon } from "native-base";
import { styles, list, wallet } from "../Style.js";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { getMentorWallet } from "../Action/mentorActions";

class MentorWallet extends Component {
  componentDidMount() {
    this.props.getMentorWallet(this.props.mentor.token);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="Ionicons"
            name="md-arrow-back"
            style={{ color: "#fafafa" }}
            onPress={() => Actions.pop()}
          />
          <Text style={styles.headerText}>TRANSACTION DETAILS</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{ color: styles.header.backgroundColor }}
          />
        </View>
        <View style={wallet.box}>
          <View style={wallet.titleBox}>
            <Icon type="Ionicons" name="ios-cash" style={wallet.icon} />
            <Text style={wallet.title}>MY BALANCE</Text>
          </View>
          <Text style={wallet.text}>{this.props.balance.paid}</Text>
        </View>
        {this.props.history.length == 0 ? (
          <View style={styles.none}>
            <Text style={styles.noneText}>
              You don't have any transaction yet
            </Text>
          </View>
        ) : (
          this.props.history.map((data, i) => {
            return (
              <ScrollView style={list.container} key={i}>
                <View style={wallet.box}>
                  <View style={wallet.titleBox}>
                    <Icon type="Ionicons" name="ios-cash" style={wallet.icon} />
                    <Text style={wallet.title}>MY BALANCE</Text>
                  </View>
                  <Text style={wallet.text}>{data}</Text>
                </View>
              </ScrollView>
            );
          })
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.mentor.wallet,
  history: state.mentor.history,
  mentor: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getMentorWallet: token => dispatch(getMentorWallet(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorWallet);
