import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const ProfileScreen = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          {/* Add profile components here */}
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

    export default ProfileScreen;
