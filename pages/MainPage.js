/*
 * MainPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file provides an aggregate feature merging the Listings Directory Page with
 * the Listing Info or 'Details' Page.
 * ------------
 */


import {Platform, View} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Local Components
import HomePage from './HomePage';
import ListingInfoPage from './ListingInfoPage';
import ListingDirectoryPage from './ListingDirectoryPage';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};


const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomePage}
                options={{ title: 'Welcome' }}
            />
        </Stack.Navigator>
    );
};

// Add Navigation
const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={ListingDirectoryPage}
                options={{ title: 'Listing Directory' }}
            />
            <Stack.Screen
                name='ListingInfo'
                component={ListingInfoPage}
                options={({ route }) => ({
                    title: route.params.listing.name
                })}
            />
        </Stack.Navigator>
    );
};


const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Lists Info'
                    component={HomeNavigator}
                    options={{ title: 'Vacation Listing App'  }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Listing Directory' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;
