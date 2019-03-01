import React from 'react';
import {Form, Item, Label,FooterTab} from 'native-base';
import {StyleSheet} from 'react-native';
const Input = ({onChangeText,value}) => (
    <Form>
        <Item regular
        floatingLabel  
        style={StyleSheet.input}
        onChangeText={onChangeText}
        value={value}
        >
            <Label>Digite sua Tarefa</Label>
        </Item>
    </Form>
);

const style = StyleSheet.create({
    input:{

    } 
});

export default Input;