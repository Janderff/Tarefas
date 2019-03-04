import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { View,Text } from "native-base";

const TodoListItem = ({todo, onPressTodo}) => (
        <TouchableOpacity onPress={() => {onPressTodo}}>
            <View  style={styles.line}>
                <Text style={styles.lineText}>
                    { todo.text }
                </Text>
            </View>
        </TouchableOpacity>
    );

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth:1,
        borderBottomColor:"#bbb",
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 15,
        flex: 7
        
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius:50
    }
});

export default TodoListItem;