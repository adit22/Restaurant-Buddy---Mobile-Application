import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import { Text} from 'react-native';


class Contact extends Component{

    static navigationOptions={
        title:'Contact'
    };


    render(){
        return(

            <Card>
                <Text>
                Our Address
                </Text>

                <Text>
                121, Clear Water Bay Road

                </Text>
                <Text>
                Clear Water Bay, Kowloon
HONG KONG

                </Text>

                <Text>
                Tel: +852 1234 5678
                Fax: +852 8765 4321
                Email:confusion@food.net
                </Text>

            </Card>
        )
    }
    
}

export default Contact;