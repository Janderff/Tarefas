import React from "react";
import { Container, Button, Text } from "native-base";
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
  }
  render() {
    const { text } = this.state;
    return (
      <Container style={styles.formContainer}>
        <Container style={styles.inputContanier}>
          <Inputs onChangeText={text => this.onChangeText(text)} 
          value={text} />
        </Container>
        <Container style={styles.button}>
          <Button  dark onPress={() => this.onPress()}>
            <Text>ADD</Text>
          </Button>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingEnd: 15,
    flexDirection: "row"
  },
  inputContanier: {
    flex: 4
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
