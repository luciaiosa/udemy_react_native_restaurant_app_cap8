import {useEffect, useState} from 'react';
import yelp from '../apis/yelp';

export default () => {
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
    // CUANDO QUIERAMOS UN CONTENIDO INICIAL, NO PODEMOS LLAMAR UNA FUNCIÓN DIRECTAMENTE EN EL COMPONENTE!!

    // searchResults('pasta');

    // useEffect (WITH AN ARROW FUNCTION AND AN EMPTY ARRAY AS PARAMS) runs the arrow function that is passed as param ONLY THE FIRST TIME the component is rendered to the screen.
    // call searchResults when component is first rendered USING useEffect!! 
    useEffect(() => {
        searchResults('pasta');
    }, [])
    
    return [searchResults, results, errorMessge];
};