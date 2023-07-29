import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStore, StoreProvider, useStore} from './stores';
import HomeScreen from './components/homeScreen';
import DetailsScreen from './components/detailsScreen';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isDouble} = useStore();

  return (
    <StoreProvider value={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Фото',
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
