import React from 'react';
import {Container,Text, View} from 'native-base';

import TodoForm from './components/TodoForm';

export default class TodoApp extends React.Component {
   render(){
       return (
        <Container>
            <TodoForm />
        </Container>
       );
   } 
}