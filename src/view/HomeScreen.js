import React from 'react';
import {View, Button} from 'react-native';


export function navigationOptions({navigation}) {
    return {
        title: "Tela Home",
        headerStyle: {
            backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
    }
}

const Home = props => {
   const {navigate} = props.navigation;
   console.log(props)
    return (
        <View>
            <Button title="Tela 1" onPress={()=>{navigate('Tela1', { endereco: {
                rua: 'tesste',
                numero: 221
            }})}} />
            <Button title="Tela 2" />
        </View>
    );
}

const HomeScreen = {
    screen: Home,
    navigationOptions
}

export default HomeScreen;