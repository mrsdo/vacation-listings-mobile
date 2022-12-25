/*
 * MainPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file provides an aggregate feature merging the Listings Directory Page with
 * the Listing Info or 'Details' Page.
 * ------------
 */
//import { useState } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

// Import Local Components
//import { LISTINGS } from '../shared/listings';
import ListingInfoPage from './ListingInfoPage';
import ListingDirectoryPage from './ListingDirectoryPage';

// Add Navigation


const MainListings = () => {
    const [listings, setListings] = useState(LISTINGS);
    const [selectedListingId, setSelectedListingId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <ListingDirectoryPage
                listings={listings}
                onPress={(listingId) => setSelectedListingId(listingId)}
            />
            <ListingInfoPage
                listing={
                    listings.filter(
                        (listing) => listing.id === selectedListingId
                    )[0]
                }
            />
        </View>
    );
};

export default MainListings;
