import React, {Component} from 'react';
import {LEADERS} from '../shared/leaders';
import {Card,ListItem} from 'react-native-elements';
import {View, FlatList, Text} from 'react-native';


class About extends Component{

    constructor(props){
        super(props);
        this.state={
            leaders:LEADERS
        }
    }
    static navigationOptions={
        title:'About'
    };
    
    render(){

        const renderLeaderItem=({item,index})=>{
            return(
                <ListItem 
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                rightAvatar={{ source:require('../shared/images/alberto.png')}}/>
            );
        }
        return(
            <Card>
                <Text>
                Our History
                </Text>
                <Text>
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                </Text>
                <Text>
                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                </Text>
            

            <FlatList  
            data={this.state.leaders}
            renderItem={renderLeaderItem}
            keyExtractor={item => item.id.toString()}
            />
</Card>


        );
        
        
    }
}

export default About;