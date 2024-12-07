import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentConfirmation = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>paytm</Text>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileInitials}>MD</Text>
        </View>
        <Text style={styles.userName}>Manish Dang</Text>
        <Text style={styles.upiId}>UPI ID: 8860707456@paytm</Text>
      </View>

      {/* Amount */}
      <Text style={styles.amount}>₹ 3,100</Text>
      <Text style={styles.date}>23 Aug, 05:24 PM</Text>
      <Text style={styles.upiRef}>UPI Ref. No: XX 2086</Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c75bc',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d9534f',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileInitials: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  upiId: {
    fontSize: 14,
    color: '#555',
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
  upiRef: {
    fontSize: 14,
    color: '#1c75bc',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1c75bc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentConfirmation;
