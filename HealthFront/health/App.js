import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import CreateAccount from './src/CreateAccount';
import Home from './src/Home';
import File from './src/File';
import Account from './src/Account';
import CalculImc from './src/CalculImc';
import DrinkScreen from './src/DrinkScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen name="Login" options={{headerShow: false}} component={Login}/> 
      <Stack.Screen name="Home" options={{ headerShown: false,}} component={Home} />
      <Stack.Screen name="CreateAccount" options={{headerShow: false}} component={CreateAccount}/>
      <Stack.Screen name="File" options={{headerShow: false}} component={File}/>
      <Stack.Screen name="Account" options={{headerShow: false}} component={Account}/>
      <Stack.Screen name="CalculImc" options={{headerShow: false}} component={CalculImc}/>
      <Stack.Screen name="DrinkScreen" options={{headerShow: false}} component={DrinkScreen}/>



      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
