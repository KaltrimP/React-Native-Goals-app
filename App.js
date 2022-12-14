import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/Home";
import ApiShowcase from "./screens/ApiShowcase"
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='ApiShowcase' component={ApiShowcase} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  
});
