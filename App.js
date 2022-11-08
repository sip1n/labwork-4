import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Button } from 'react-native';
import { auth } from './firebase';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            ({ navigation, route }) => ({
              title: auth.currentUser.email,
              headerRight: () => (
                <Button title="Log Out" onPress={() => {
                  auth
                    .signOut()
                    .then(() => {
                      navigation.replace("Login")
                    })
                }} />
              ),
            })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;