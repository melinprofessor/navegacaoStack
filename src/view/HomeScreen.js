import React from 'react';
import {View, Button} from 'react-native';


export function navigationOptions({navigation}) {
    return {
        title: "Tela Home"
    }
}

const Home = props => {
    return (
        <View>
            <Button title="Tela 1" />
            <Button title="Tela 2" />
        </View>
    );
}

const HomeScreen = {
    screen: Home,
    navigationOptions
}

export default HomeScreen;