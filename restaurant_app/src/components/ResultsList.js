import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// FlatList es un componente de react native que se utiliza cuando se necesita scrollable list de datos
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

// el componente va a tener la prop navigation, al haber envuelto el componente en withNavigation, sin tener que pasarlo el padre!!!
const ResultsList = ({title, results, navigation}) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal   // es lo mismo que horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {  // item es un objeto que contiene todos los datos de results
                return (
                    // Uso TouchableOpacity que se desvanece cuando se hace click en ResultDetail, y va a ResultsShowDetail
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShowDetail', {id: item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
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
// Usaré withNavigation para envolver el componente para devolver una nueva versión del componente que tendrá el acceso de navigacion agregado automaticamente
export default withNavigation(ResultsList);