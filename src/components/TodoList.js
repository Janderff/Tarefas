import React from "react";
import { Container, Text } from "native-base";
import { StyleSheet } from "react-native";

import { connect } from 'react-redux';

const TodoList= ({ todos }) => (
    <Container>
        {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
    </Container>
)

const styles = StyleSheet.create({

})
const mapStateToProps = state => {
    const { todos }= state;
    return { todos};
}

export default connect(mapStateToProps)(TodoList);