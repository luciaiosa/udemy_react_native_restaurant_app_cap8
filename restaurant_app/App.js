// Add navigation library (only the methods that we need)
// stackNavigator shows automaticaly different screens, and a header at the top of each screen with a back arrow (used to go to previous screen)
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowDetailScreen from './src/screens/ResultsShowDetailScreen';

const navigator = createStackNavigator(
  // el primer param es un objeto con todos los screens que se van a usar luego al quierer navegar
  {
    SearchScreen: SearchScreen,
    ResultsShowDetail: ResultsShowDetailScreen
  }, 
  // el segundo param es un objeto que contiene: 
  // - initialRouteName = the default route that we want to show any time our app start up!! (optional when we have only one screen)
  // - defaultNavigationOptions = options that we are going to use for every different screen; customize the header that's displayed on the top of every screen
  // 
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Business search' // el titulo que aparece en la parte superior de la pantalla, que puede ser diferente en cada screen
    }
  }
);

// createAppContainer creates a default app component (react component) and displayes whatever content that navigator produces inside of that component
// createAppContainer(navigator) se asegura que exporta un react app component, ya que lo que se exporta tiene que ser un componente
export default createAppContainer(navigator);