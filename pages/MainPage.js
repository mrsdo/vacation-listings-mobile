/*
 * MainPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file provides an aggregate feature merging the Listings Directory Page with
 * the Listing Info or 'Details' Page.
 * ------------
 */


import {SafeAreaView, Text, FlatList, Platform, StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Local Components
import HomePage from './HomePage';
import ListingInfoPage from './ListingInfoPage';
import ListingDirectoryPage from './ListingDirectoryPage';

const Drawer = createDrawerNavigator();

const screenOptions = {

    headerStyle: {
        backgroundColor: '#E75B64',
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderTopColor: '#A9B2BD',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: '#FFA036'
    },
    headerTintColor: '#FFF'

};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomePage}
               options={{ title: 'Home' }}
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
                drawerStyle={{ backgroundColor: '#A9B2BD' }}
            >
                <Drawer.Screen
                    name='Welcome'
                    component={HomeNavigator}
                    options={{ title: 'Vacation Listings App'  }}
                />
                <Drawer.Screen
                    name='Listings Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'View Listings' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;
