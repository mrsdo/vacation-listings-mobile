/*
 * ListingDirectoryPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * Creates a readable List of resources pulled from the listings.json file
 * ------------
 */
import React, { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { Avatar, ListItem, Card } from 'react-native-elements';
import { LISTINGS } from '../shared/listings'

const ListingDirectoryPage = (props) => {

    const [listings, setListings] = useState(LISTINGS);
    const renderDirectoryItem = ({ item: listing }) => {
        return (


            <ListItem onPress={() =>
                (listing.id)
              }>

                <Avatar source={{uri: listing.avatar_url}}  />
                <ListItem.Content>
                    <ListItem.Title>{listing.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {listing.description}
                    </ListItem.Subtitle>

                </ListItem.Content>


            </ListItem>



        );
    };
    return (
        <Card title="Film Catalogue">
        <FlatList
            data={listings}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
        </Card>
    );
};

export default ListingDirectoryPage;
