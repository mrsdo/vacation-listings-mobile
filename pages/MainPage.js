/*
 * MainPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file provides an aggregate feature merging the Listings Directory Page with
 * the Listing Info or 'Details' Page.
 * ------------
 */


import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

// Import Local Components
import ListingInfoPage from './ListingInfoPage';
import ListingDirectoryPage from './ListingDirectoryPage';

// Add Navigation
const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff'
            }}
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
            <DirectoryNavigator />
        </View>
    );
};

export default Main;
