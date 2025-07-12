import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import HomeScreen from './screens/HomeScreen';
    import GardenPlannerScreen from './screens/GardenPlannerScreen';
    import PlantDatabaseScreen from './screens/PlantDatabaseScreen';
    import TaskManagerScreen from './screens/TaskManagerScreen';
    import ProfileScreen from './screens/ProfileScreen';

    const Stack = createStackNavigator();

    const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Garden Planner" component={GardenPlannerScreen} />
            <Stack.Screen name="Plant Database" component={PlantDatabaseScreen} />
            <Stack.Screen name="Task Manager" component={TaskManagerScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };

    export default App;
