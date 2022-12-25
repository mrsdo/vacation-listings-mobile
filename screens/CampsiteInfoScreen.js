/*
 * PageName.* | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * ------------
 */
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = (props) => {
    return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfoScreen;
