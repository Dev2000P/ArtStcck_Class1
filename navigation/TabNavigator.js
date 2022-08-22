import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buy from "../screens/Buy";
import Upload from "../screens/Upload";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Buy') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Upload') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Buy" component={Buy} options={{headerShown:false}}/>
        <Tab.Screen name="Upload" component={Upload} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;