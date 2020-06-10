import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';


class Main extends Component{
constructor(props){
    super(props);

    this.state={
        dishes:DISHES
    }
}
render(){
    return(
        
            // <Text>Hiii</Text>
        
        <Menu dishes={this.state.dishes}/>
    );
}
}


export default Main;