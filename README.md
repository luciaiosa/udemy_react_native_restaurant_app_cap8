### udemy_react_native_restaurant_app_cap8

## Crear un nuevo proyecto con expo-cli:
```
npx expo-cli init restaurant_app
```

## Arrancar el proyecto:
```
cd restaurant_app
yarn start
```

## Instalar axios
```
yarn add axios
```

### Para la app, voy a usar yelp.com/fusion API para buscar restaurantes. Me tengo que registrar (Get started), crear nueva app

En Business Endpoints / Business Search tengo la info del endpoint para search.
En Business Endpoints / Business Details tengo la info del restaurante por id.

## 1. Instalar react-navigation
```
yarn add react-navigation
```

## 2. Install Dependencies
```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## 3. Install React Navigation Stack
```
npm install react-navigation-stack @react-native-community/masked-view
```

## 4. Start the app and clear cache with npm start -c

<!-- Errors?
If you are still seeing errors and complaints about packages, do the following: -->
```
1. rm -r node_modules

2. rm package-lock.json

3. expo upgrade

4. npm start -c -->
```

<!-- Client ID
eRFKvm3J22-_Upspugs6Bw

API Key
4QqNj5cnbJybUL9obMbJuMRCe6WKLCyUIEzZOdlKfgAMSIRsU5edEnUy4U24m-lsYzIF1ZZan21tdFHGquTN3czfGck0KyroXLsqpBBA0g_-URhLFXp5gYYUxJtXXnYx -->