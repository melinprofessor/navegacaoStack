import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Tela1Screen from '../view/Tela1Screen';
import HomeScreen from '../view/HomeScreen';

const drawerNavigation = createDrawerNavigator({
    Inicial: HomeScreen,
    Tela1: Tela1Screen
})

const stackNavigation = createStackNavigator({
   
    drawer: drawerNavigation,
    Home: HomeScreen,
    Tela1: Tela1Screen
});

export default createAppContainer(stackNavigation);