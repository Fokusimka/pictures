import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStore, StoreProvider, useStore} from './stores';
import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailsScreen';
import {TouchableOpacity, Text} from 'react-native';
import AuthonticationScreen from './screens/authonticationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isDouble} = useStore();

  return (
    <StoreProvider value={rootStore}>
      <AuthonticationScreen />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Лента изображений',
              headerRight: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => isDouble.updateCountColumns()}>
                  <Text>Вид</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: 'Детали',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
