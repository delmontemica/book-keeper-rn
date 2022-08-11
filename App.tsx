import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';

const Stack = createNativeStackNavigator();

function App() {
    StatusBar.setBarStyle('light-content', true);

    return (
        <SafeAreaProvider>
            <NavigationContainer
                // theme={DarkTheme}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor: 'white',
                        headerStyle: styles.header
                    }}
                >
                    <Stack.Screen name="Login" component={ Login } />
                    <Stack.Screen name="Dashboard" component={ Dashboard }
                                  options={{
                                      headerBackVisible: false
                                  }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#14213D'
    },
});

export default App;