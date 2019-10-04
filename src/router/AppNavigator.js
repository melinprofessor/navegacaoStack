import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Tela1Screen from '../view/Tela1Screen';
import HomeScreen from '../view/HomeScreen';
const stackNavigation = createStackNavigator({
    Home: HomeScreen,
    Tela1: Tela1Screen
});

export default createAppContainer(stackNavigation);