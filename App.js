import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainListings from './pages/MainPage';

export default function App() {
    return (
        <SafeAreaProvider>
            
                <MainListings />

        </SafeAreaProvider>
    );
}