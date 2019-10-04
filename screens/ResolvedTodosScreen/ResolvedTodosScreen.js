import React from 'react';
import styles from './styles';
import {View, Text, Button} from 'react-native';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

const ResolvedTodosScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Hi From Resolved Todos Screen</Text>
            {/* <Button title="navigate" onPress={() => props.navigation.navigate('HelloWorld')} /> */}
        </View>
    )
};

export default ResolvedTodosScreen;