import * as React from 'react';
import { View, StyleSheet } from 'react-native';



// You can import from local files
import Homepage from './components/Homepage';
import Menu from './components/General/Menu';
// or any pure javascript modules available in npm
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function App() {
  return (

    <View  style={styles.container}>
      <View style={styles.wrapper}>
        <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Home" component={Homepage} />
              <Stack.Screen name="Menu" component={Menu} />

          </Stack.Navigator>        
        </NavigationContainer>
      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  wrapper: {
    flex: 1,
    justifyContent:'space-around'
  }
});
