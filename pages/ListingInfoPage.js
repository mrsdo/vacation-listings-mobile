/*
 * ListingInfoPage.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file serves as a Listing Details Page
 * ------------
 */
import RenderListing from "../features/listings/RenderListing";

const ListingInfoPage = ({route}) => {
    const { listing } = route.params;
    return <RenderListing listing={listing} />;
};

export default ListingInfoPage;