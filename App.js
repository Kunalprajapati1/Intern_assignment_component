import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from './src/screen/Contact';  
import About from './src/screen/About';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      
     
      <Stack.Screen
      name="About"
      component={About}
      options={{ headerShown: false }}
    />
     <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
