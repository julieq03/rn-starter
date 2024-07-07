import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

//function
const ListScreen = () => {
    //array of records that we want to turn into a list
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 45},
        {name: 'Friend #3', age: 32},
        {name: 'Friend #4', age: 27},
        {name: 'Friend #5', age: 53},
        {name: 'Friend #7', age: 30},
    ]

    return (
    <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => {
            //element === {item: {name: 'Friend #1'}, index:0}
            //item === {name: 'Friend #1'}

            //return shows how we want to display item element. 
            return <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
                </Text>
    }}
    />
);
}; 

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;