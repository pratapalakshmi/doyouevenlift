import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext'; // ✅ import context

export default function HomeScreen() {
  const { logout } = useContext(AuthContext); // ✅ grab logout from context

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏋️ Welcome to Do You Even Lift?</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 20, fontWeight: 'bold'
  }
});