import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Name</Text>
      <Text style={styles.description}>This is a detailed description of the product.</Text>
      <Text style={styles.price}>$99.99</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProductDetailScreen;