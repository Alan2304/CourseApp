import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ResolvedTodosScreen from '../screens/ResolvedTodosScreen/ResolvedTodosScreen'
import HelloWorld from '../components/HelloWorld/HelloWorld'
import TodosScreen from '../screens/TodosScreen/TodosScreen';

const TabNavigator = createBottomTabNavigator({
    TodosList: {
        screen: TodosScreen,
        navigationOptions: {
            title: 'List'
        }
    },
    Resolved: {
        screen: ResolvedTodosScreen,
        navigationOptions: {
            title: 'Resolved'
        }
    }
});

export default createAppContainer(TabNavigator);