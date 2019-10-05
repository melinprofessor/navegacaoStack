import React from 'react';
import {View, Text, Button} from 'react-native';


export function navigationOptions({navigation}) {
    return {
        title:"Tela 1",
    }
}

const Tela1 = props => {
    console.log(props.navigation.getParam("nome"))
    const endereco = props.navigation.getParam("endereco")
    return (
        <View>
            <Text style={{fontSize: 50}}>rua: {endereco.rua}</Text>
            <Text style={{fontSize: 50}}>numero: {endereco.numero}</Text>
            <Button title="Voltar" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

const Tela1Screen = {
    screen: Tela1,
    navigationOptions
}

export default Tela1Screen;