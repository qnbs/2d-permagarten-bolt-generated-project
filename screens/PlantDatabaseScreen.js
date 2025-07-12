import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const PlantDatabaseScreen = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Plant Database</Text>
          {/* Add plant database components here */}
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

    export default PlantDatabaseScreen;
