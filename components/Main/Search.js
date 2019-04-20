import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { connect } from "react-redux";
import { styles, search } from "../Style.js";
import { Text, Icon } from "native-base";
import { Actions } from "react-native-router-flux";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "+"
    }
  }

  componentDidMount() {
    this.refs.searchBar.focus();
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
          <TextInput
            ref="searchBar"
            style={search.searchInput}
            placeholder="Search for classes"
            onChangeText={search => this.setState({ search })}
          />
        </View>
        <ScrollView style={search.listContainer}>
          {this.props.mentorData
            .filter(
              data =>
                data.name
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) &&
                data.verified === true
            )
            .map((list, i) => {
              return (
                <View style={search.listBox} key={i}>
                  <Icon
                    type="FontAwesome5"
                    name="user-circle"
                    style={search.listIcon}
                  />
                  <Text style={search.listText}>{list.name}</Text>
                </View>
              );
            })}
          {this.props.classData
            .filter(
              data =>
                data.name
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) 
            )
            .map((list, i) => {
              return (
                <View style={search.listBox} key={i}>
                  <Icon
                    type="Ionicons"
                    name="md-school"
                    style={search.listIcon}
                  />
                  <Text style={search.listText}>{list.name}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mentorData: state.public.mentor,
  classData: state.public.openClass
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
