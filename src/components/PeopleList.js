import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PeopleListItem from './src/components/PeopleListItem';

const PeopleList = props => {
    const { peoples } = props;

    const itens = peoples.map(people =>{
        return <PeopleListItem people={people}/>
    })

    return (
        <View style={styles.container}>
            {itens}
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;