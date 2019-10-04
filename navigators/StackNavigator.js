import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ResolvedTodosScreen from '../screens/ResolvedTodosScreen/ResolvedTodosScreen';
import HelloWorld from '../components/HelloWorld/HelloWorld'
import MainScreen from '../screens/MainScreen/MainScreen';

const StackNavigator = createStackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions: {
            headerTitle: 'Home'
        }
    },
    HelloWorld: {
        screen: HelloWorld
    }    
});

export default createAppContainer(StackNavigator);
