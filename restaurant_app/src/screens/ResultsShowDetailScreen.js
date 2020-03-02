import React, { useState, useEffect } from 'react';
// uso useEffect con el segundo param un array vacío, para que la pantalla se renderice solo la primera vez!!
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import yelp from '../apis/yelp';

// SIEMPRE QUE NECESITO QUE EL COMPONENTE SE VUELVA A RENDERIZAR, LE CREO EL ESTADO!!!

const ResultsShowDetailScreen = ({ navigation }) => {

    // cuando el estado sea un objeto, por defecto se pone null, no objeto vacío!!!
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResultById = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    // useEffect (WITH AN ARROW FUNCTION AND AN EMPTY ARRAY AS PARAMS) runs the arrow function that is passed as param ONLY THE FIRST TIME the component is rendered to the screen.
    // call getResultById when component is first rendered USING useEffect!! 
    useEffect(() => {
        getResultById(id);
    }, [])

    // esta comprobación dentro del componente directamente, es para que no se devuelva nada si no hay ningun resultado!!
    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList data={result.photos} keyExtractor={(photo) => photo}
             renderItem={({item}) => {
                 return <Image style={styles.image} source={{uri: item}}/>
             }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 300, // siempre poner width y height a Image!!
        height: 200,
        borderRadius: 4,
        marginBottom: 5
    }
});

export default ResultsShowDetailScreen;