import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addTask } from '../Action/index'

export class Payment extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       task:""
    }
  }
  
onADD(){
  const task = this.state;
  this.props.addTask(task)
}

  render() {
    console.log(this.props)
    return (
      <View>
        <TextInput onChangeText={(task)=>this.setState({task})}/>
        <Text onPress={()=> this.onADD()}>TEXT</Text>
        <Text>{this.props.classData.task.task}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  classData: state.homeReducer
})

const mapDispatchToProps = dispatch => {
  return{
    addTask : payload => dispatch(addTask(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)



// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
// import { connect } from 'react-redux'

// export class Payment extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <View>
//         {this.props.list.list.map(el => {return (<View><Text>{el.className}</Text><Text>{el.mentorName}</Text><Text>{el.fee}</Text><Text>{el.date}</Text></View>)})}
//       </View>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   list:state.homeReducer
// })

// export default connect(mapStateToProps)(Payment)


// import React, { Component } from "react";
// import {connect} from 'react-redux'
// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   Picker,
//   TouchableOpacity
// } from "react-native";

// const mapStateToProps = state => ({
//   list:state.list
// })

// class Payment extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       className: "ABC Class",
//       studentName: "Mutho",
//       idTransaction: "2103 210039302",
//       uniqueCode: "AM34",
//       price: "Rp 450.000",
//       total: "Rp 450.000",
//       bank: ""
//     };
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <View style={styles.container}>
//         <View style={styles.formContainer}>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Course Name </Text>
//             <Text>:</Text>
//             <TextInput
//               style={styles.inputField}
//               editable={false}
//               value={this.state.className}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Name </Text>
//             <Text>:</Text>
//             <TextInput
//               style={styles.inputField}
//               editable={false}
//               value={this.state.studentName}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Transaction Id </Text>
//             <Text>:</Text>
//             <TextInput
//               style={styles.inputField}
//               editable={false}
//               value={this.state.idTransaction}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Unique Code </Text>
//             <Text>:</Text>
//             <TextInput
//               style={styles.inputField}
//               editable={false}
//               value={this.state.uniqueCode}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Price </Text>
//             <Text>:</Text>
//             <TextInput
//               style={styles.inputField}
//               editable={false}
//               value={this.state.price}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Total </Text>
//             <Text>:</Text>
//             <TextInput
//               style={styles.inputField}
//               editable={false}
//               value={this.state.total}
//             />
//           </View>
//           <View style={styles.inputBox}>
//             <Text style={styles.inputText}>Choose BANK </Text>
//             <Text>:</Text>

//             <Picker
//             selectedValue={this.state.bank}
//             style={{ height: 50, width: 100, flex:6 }}
//             onValueChange={(itemValue, itemIndex) =>
//               this.setState({ bank: itemValue })
//             }
//           >
//             <Picker.Item label="BRI" value="BRI" />
//             <Picker.Item label="BCA" value="BCA" />
//             <Picker.Item label="CIMB NIAGA" value="CIMB NIAGA" />
//             <Picker.Item label="BNI" value="BNI" />
//           </Picker>
//           </View>
//           <TouchableOpacity style={styles.checkoutBox}>
//             <Text style={styles.checkoutButton}>CHECKOUT</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// export default connect (mapStateToProps)(Payment)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#2b8aaa"
//   },

//   formContainer: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "#FFFFFF",
//     elevation: 2
//   },

//   inputBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10
//   },

//   inputText: {
//     flex: 3
//   },

//   inputField: {
//     flex: 6,
//     marginLeft: 10,
//     fontWeight: "500",
//     color: "#000000"
//   },

//   total: {
//     justifyContent: "flex-end"
//   },

//   checkoutBox: {
//     alignItems: "center"
//   },

//   checkoutButton: {
//     borderRadius: 10,
//     backgroundColor: "#FFA45C",
//     color: "#FFFFFF",
//     textAlign: "center",
//     marginTop: 10,
//     fontWeight: "700",
//     height: 40,
//     paddingTop: 10,
//     paddingHorizontal: 10
//   }
// });
