import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import styles from './styles';

import FOOD from '../../dummy-data/dummy';

const HelloWorld = (props) => {

    return (
        <View style={styles.container}>
            <Text>My First Component</Text>
            {/* {FOOD.map((food) => (<Text>{food.name}</Text>))} */}
            <FlatList data={FOOD} 
            renderItem={(itemData) => (<Text>{itemData.item.name}</Text>)} />
            <Button title="My First Button" onPress={() => alert('Hi')} />
        </View>
    );
}

export default HelloWorld;