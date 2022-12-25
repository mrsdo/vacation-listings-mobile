/*
 * App.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * Port of entry for the application ::START HERE::
 * ------------
 */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

// Import Local Components
import MainListings from './pages/MainPage';


export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainListings />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}