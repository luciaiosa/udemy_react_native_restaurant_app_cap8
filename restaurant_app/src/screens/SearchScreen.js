import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../apis/yelp';

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    // para que se vuelva a renderizar el contenido de la página cuando hay un API error, hay que añadir al estado un mensaje de error
    const [errorMessge, setErrorMessage] = useState('');

    // al cargarse el componente, no hay nada visible en la pantalla!!

    // const searchResults = async () => {
    //     try {
    //         const response = await yelp.get('/search', {
    //             params: {
    //                 limit: 50,
    //                 term: searchTerm,
    //                 location: 'madrid'
    //             }
    //         });
    //         setResults(response.data.businesses);
    //         setErrorMessage('');
    //     } catch (err) {
    //         console.log(err);
    //         setErrorMessage('Something went wrong');
    //     }

    // }


    // cuando se renderiza por primera vez, se hace una llamada API, para cargar contenido en la pantalla
    const searchResults = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'madrid'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }

    }

    // BAD!!! LA LLAMADA A LA API SE HACE INFINITAMENTE, PORQUE AL HACER LA PRIMERA LLAMADA, EL ESTADO SE MODIFICA, LO QUE HACE QUE EL COMPONENTE SE VUELVA A RENDERIZAR. 
    // AL RENDERIZARSE, SE HACE OTRA LLAMADA A LA API, EL ESTADO SE MODIFICA, EL COMPONENTE SE VUELVE A RENDERIZAR, Y ASÍ INFINITAMENTE!!
    // call searchResults when component is first rendered
    // searchResults('pasta');

    // CUANDO QUIERAMOS UN CONTENIDO INICIAL, NO PODEMOS LLAMAR UNA FUNCIÓN DIRECTAMENTE EN EL COMPONENTE!!

    return (
        <View style={styles.container}>
            <SearchBar
                searchTerm={searchTerm}
                // onSearchTermChange={(newValue) => setSearchTerm(newValue)}
                // onTermEndEditing={() => searchResults()} // cuando se pulsa Enter, o el botón de OK
                onSearchTermChange={setSearchTerm}  // le paso solo una referencia a la función, en lugar de una function con params
                onTermEndEditing={() => searchResults(searchTerm)}  // es decir: llama a esta función cuando ocurre uno de los dos eventos
            />
            <Text>{searchTerm}</Text>
            <Text>{results.length}</Text>
            {errorMessge ? <Text>{errorMessge}</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default SearchScreen;