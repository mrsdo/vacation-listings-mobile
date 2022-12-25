/**
 * Listing Information Screen
 */
import RenderListing from '../features/listings/RenderListing';

/**
 *
 * @constructor Listing Information
 // Set up the function component as an arrow function set equal to a const named ListingInfoScreen, passing one parameter of props to the arrow function.
 */
const ListingInfoScreen = (props) => {

    return (
        <RenderListing listing={props.listing} />
    );
};

export default ListingInfoScreen;