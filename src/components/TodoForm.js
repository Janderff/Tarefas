import React from "react";
import { Button, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

import Inputs from "./Inputs";
import { addTodo } from "../actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onChangeText(text) {
    this.setState({
      text
    });
  }
  onPress() {
    this.props.dispatchAddTodo(this.state.text);
    this.setState({text: ''});
  }
  render() {
    const { text } = this.state;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContanier}>
          <Inputs onChangeText={text => this.onChangeText(text)} 
          value={text} />
        </View>
        <View style={styles.button}>
          <Button bordered dark onPress={() => this.onPress()}>
            <Text>ADD</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingEnd: 5,
    flexDirection: "row",
  },
  inputContanier: {
    flex: 4,
  },
  button: {
    flex: 1,
    paddingTop: 17,
    paddingLeft: 5
  }
});

export default connect(
  null,
 {dispatchAddTodo: addTodo}
)(TodoForm);
