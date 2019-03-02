import React from 'react';
import {Form, Item, Label,Input} from 'native-base';
import {StyleSheet} from 'react-native';

const Inputs = ({onChangeText,value}) => (
    <Form>
        <Item regular
        floatingLabel  
        style={styles.input}
       
        >
            <Label>Digite sua Tarefa</Label>
            <Input  onChangeText={onChangeText}
        value={value}/>
        </Item>
    </Form>
);

const styles = StyleSheet.create({
    input:{

    } 
});

export default Inputs;