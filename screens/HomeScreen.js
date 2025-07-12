import React from 'react';
    import { View, Text, Button, StyleSheet } from 'react-native';

    const HomeScreen = ({ navigation }) => {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>2D Permaculture Garden Planner</Text>
          <Button title="Go to Garden Planner" onPress={() => navigation.navigate('Garden Planner')} />
          <Button title="Go to Plant Database" onPress={() => navigation.navigate('Plant Database')} />
          <Button title="Go to Task Manager" onPress={() => navigation.navigate('Task Manager')} />
          <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    });

    export default HomeScreen;
