/*
 * ListingInfoPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file serves as a Listing Details Page
 * ------------
 */
import RenderListing from "../features/listings/RenderListing";

const ListingInfoPage = (props) => {
    return <RenderListing listing={props.listing} />;
};

export default ListingInfoPage;