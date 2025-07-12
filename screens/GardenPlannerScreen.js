import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const GardenPlannerScreen = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Garden Planner</Text>
          {/* Add garden planning components here */}
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

    export default GardenPlannerScreen;
