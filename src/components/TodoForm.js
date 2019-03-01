import React from "react";
import {
  Container,
  Button,
  Text,
  Footer,
  FooterTab,
  Content
} from "native-base";
import { StyleSheet } from "react-native";

import Input from "./Input";

export default class TodoForm extends React.Component {
  render() {
    return (
      <Container style={styles.formContainer}>
        <Container style={styles.inputContanier}>
          <Input />
        </Container>
        <Container style={styles.button}>
          <Button bordered dark onPress={() => console.log("Pressionado")}>
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
