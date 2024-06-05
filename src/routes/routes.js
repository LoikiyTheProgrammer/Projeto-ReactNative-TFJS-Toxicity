import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../app/(tabs)/index';

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Toxicity Chat'
        component={Chat}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}