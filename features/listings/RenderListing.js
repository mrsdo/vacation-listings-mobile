/*
 * RenderListings.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * Serves as the 'layout presentation' for Listings
 * ------------
 */
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderListing = ({ listing }) => {
    if (listing) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={listing.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {listing.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{listing.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderListing;