// useState = hook that adds state to a function component
// useEffect = hook (function) that allows us to execute some code ONLY the first time that our component renders to the screen

import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// ScrollView detecta que tiene demasiado contenido dentro para que quepa en la
// pantalla al mismo tiempo, y habilitará automáticamente el scroll (desplazamiento).
import SearchBar from '../components/SearchBar';
// importar el hook creado por nosotros. Se ha sacado en otro archivo la lógica del componente, para que se pueda usar en más de un componente, y para dejar en el componente sólo el renderizado
import useSearchResults from '../hooks/useSearchResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    // usar nuestro hook!!
    const [searchResults, results, errorMessge] = useSearchResults();

    const filterResultsByPrice = (price) => {
        // price === '€' || '€€' || '€€€'
        return results.filter(result => {
            if (result.price) {
                return result.price === price;
            }
            return;
        });
    }

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
            {errorMessge ? <Text>{errorMessge}</Text> : null}
            {/* Meter los ResultsList dentro de ScrollView para habilitar las barras de desplazamiento vertical en caso de que haya más contenido verticalmente */}
            <ScrollView> 
                <ResultsList title="Cost effective" results={filterResultsByPrice("€")} />
                <ResultsList title="Bit pricier" results={filterResultsByPrice("€€")} />
                <ResultsList title="Big spender" results={filterResultsByPrice("€€€")} />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // marginLeft: 10    // Mejor poner margin left al ResultDetail, sino el contenido se ve un poco cortado!!
    }
});

export default SearchScreen;