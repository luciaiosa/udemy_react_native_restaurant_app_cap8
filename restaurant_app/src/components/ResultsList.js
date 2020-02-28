import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// FlatList es un componente de react native que se utiliza cuando se necesita scrollable list de datos

const ResultsList = ({title, results}) => {
    console.log(results);
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal   // es lo mismo que horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {  // item es un objeto que contiene todos los datos de results
                return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList;