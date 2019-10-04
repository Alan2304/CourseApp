import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    todo: {
        flexDirection: 'row',
        elevation: 5,
        marginVertical: 16,
        backgroundColor: 'white',
        paddingVertical: 8,
        width: '90%',
        justifyContent: 'space-evenly'
    },
    todoText: {
        width: '70%'
    },
    todoIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '15%'
    }
});

export default styles;