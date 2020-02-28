import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// FlatList es un componente de react native que se utiliza cuando se necesita scrollable list de datos
import ResultDetail from './ResultDetail';

const ResultsList = ({title, results}) => {
    console.log(results);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal   // es lo mismo que horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {  // item es un objeto que contiene todos los datos de results
                return <ResultDetail result={item}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default ResultsList;