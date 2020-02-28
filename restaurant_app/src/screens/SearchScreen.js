// useState = hook that adds state to a function component
// useEffect = hook (function) that allows us to execute some code ONLY the first time that our component renders to the screen

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../apis/yelp';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    // 

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