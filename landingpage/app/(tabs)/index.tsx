import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.googleText}>Google</Text>
      
      <View style={styles.searchContainer}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#6e6e6e"
        />

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

      </View>
      
      <Text style={styles.footerText}>©2024 Google</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  
  googleText: {
    color: '#000000',
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  searchContainer: {
    borderColor: '#dfe1e5',
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },

  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1a73e8',
    borderRadius: 24,
  },

  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  footerText: {
    color: '#6e6e6e',
    position: 'absolute',
    bottom: 20,
  },
});