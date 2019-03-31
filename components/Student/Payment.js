import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity
} from "react-native";

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "ABC Class",
      studentName: "Mutho",
      idTransaction: "2103 210039302",
      uniqueCode: "AM34",
      price: "Rp 450.000",
      total: "Rp 450.000",
      bank: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Course Name </Text>
            <Text>:</Text>
            <TextInput
              style={styles.inputField}
              editable={false}
              value={this.state.className}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Name </Text>
            <Text>:</Text>
            <TextInput
              style={styles.inputField}
              editable={false}
              value={this.state.studentName}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Transaction Id </Text>
            <Text>:</Text>
            <TextInput
              style={styles.inputField}
              editable={false}
              value={this.state.idTransaction}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Unique Code </Text>
            <Text>:</Text>
            <TextInput
              style={styles.inputField}
              editable={false}
              value={this.state.uniqueCode}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Price </Text>
            <Text>:</Text>
            <TextInput
              style={styles.inputField}
              editable={false}
              value={this.state.price}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Total </Text>
            <Text>:</Text>
            <TextInput
              style={styles.inputField}
              editable={false}
              value={this.state.total}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Choose BANK </Text>
            <Text>:</Text>
        
            <Picker
            selectedValue={this.state.bank}
            style={{ height: 50, width: 100, flex:6 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ bank: itemValue })
            }
          >
            <Picker.Item label="BRI" value="BRI" />
            <Picker.Item label="BCA" value="BCA" />
            <Picker.Item label="CIMB NIAGA" value="CIMB NIAGA" />
            <Picker.Item label="BNI" value="BNI" />
          </Picker>
          </View>
          <TouchableOpacity style={styles.checkoutBox}>
            <Text style={styles.checkoutButton}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#2b8aaa"
  },

  formContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 2
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },    

  inputText: {
    flex: 3
  },

  inputField: {
    flex: 6,
    marginLeft: 10,
    fontWeight: "500",
    color: "#000000"
  },

  total: {
    justifyContent: "flex-end"
  },

  checkoutBox: {
    alignItems: "center"
  },

  checkoutButton: {
    borderRadius: 10,
    backgroundColor: "#FFA45C",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "700",
    height: 40,
    paddingTop: 10,
    paddingHorizontal: 10
  }
});
