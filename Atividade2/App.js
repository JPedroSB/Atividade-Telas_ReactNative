import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';

import HomeIN from './src/pages/HomeIN';
import Facebook from './src/pages/Facebook';
import LoginFB from './src/pages/LoginFB';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"HomeIN"}>
        <Stack.Screen name="HomeIN"
                      component={HomeIN}
                      options={{headerShown: false}}/>
        <Stack.Screen name="LoginFB"
                      component={LoginFB}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Facebook" component={Facebook}
                      component={Facebook}
                      options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
