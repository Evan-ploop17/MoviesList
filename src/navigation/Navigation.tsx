import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screen/DetailScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { Movie } from '../interfaces/movideDB';

export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
}