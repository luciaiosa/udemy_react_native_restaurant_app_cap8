import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// importar Feather, FontAwesome o cualquier librería de iconos (la tercera columna de la página https://expo.github.io/vector-icons/; 
// la segunda columna es el nombre del icono que se usa dentro del componente: name="search" )
import { Feather, FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onTermEndEditing }) => {
    return (
        <View style={styles.containerStyle}>
            {/* Usar el icono de la lupa de search */}
            {/* <Feather name="search" size={30} /> */}
            {/* <FontAwesome name="search"/> */}
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                value={searchTerm}
                // onChangeText={newValue => onSearchTermChange(newValue)}
                // onEndEditing={() => onTermEndEditing()} // cuando se pulsa Enter, o el botón de OK
                onChangeText={onSearchTermChange}  // le paso solo una referencia a la función, en lugar de una function con params
                onEndEditing={onTermEndEditing}  // es decir: llama a esta función cuando ocurre uno de los dos eventos
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',  // es mejor poner alignSelf al hijo, que alignItems al padre, porque se puede clicar en todo el ancho y alto del input, no sólo en el centro!! 
        marginHorizontal: 15
    }
});

export default SearchBar;