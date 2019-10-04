import React from 'react';
import {View, Text} from 'react-native';


export function navigationOptions({navigation}) {
    return {
        title:"Tela 1"
    }
}

const Tela1 = props => {
    return (
        <View>
            <Text> TELA 1</Text>
        </View>
    );
}

const Tela1Screen = {
    screen: Tela1,
    navigationOptions
}

export default Tela1Screen;