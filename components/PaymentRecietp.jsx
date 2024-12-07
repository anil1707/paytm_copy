import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { formatDate } from "../utils/formatDate";

const PaymentReceipt = ({ userData, isPaymentDone, setIsPaymentDone, amount }) => {
  console.log("userData", userData);
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
      onPress={() => {
        setIsPaymentDone(!isPaymentDone)
      }}
        style={{
          position: "absolute",
          top: 10,
          right: 15,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
          paddingHorizontal: 15,
          borderRadius: 10,
          paddingBottom:5
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>x</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>paytm</Text>
        <Text style={styles.subHeaderText}>PAYMENT RECEIPT</Text>
      </View>

      {/* Payment Info */}
      <View style={styles.paymentInfoContainer}>
        <Text style={styles.paymentStatus}>Payment Successful</Text>
        <Text style={styles.amount}>₹{amount}</Text>
        <Text style={styles.amountWords}>Rupees Three Hundred Only</Text>
      </View>

      {/* Transaction Details */}
      <View style={styles.transactionDetails}>
        <View style={styles.row}>
          <Text style={styles.label}>To:</Text>
          <Text style={styles.value}>
            {decodeURIComponent(userData?.data?.split("=")[2])}
          </Text>
        </View>
        <Text style={styles.subValue}>
          UPI ID:{" "}
          {decodeURIComponent(userData?.data?.split("=")[1]?.split("&")[0])}
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>From:</Text>
          <Text style={styles.value}>Anil Kumar Yadav</Text>
        </View>
        <Text style={styles.subValue}>HDFC Bank - 6387</Text>

        <View style={styles.row}>
          <Text style={styles.label}>UPI Ref ID:</Text>
          <Text style={styles.value}>346828076711</Text>
        </View>
        <Text style={styles.subValue}>{formatDate(new Date())}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>100% SECURE PAYMENTS</Text>
        <Text style={styles.footerLogos}>[UPI Logos Placeholder]</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal:10,
    width: "100%",
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003DB6",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#757575",
    marginTop: 5,
  },
  paymentInfoContainer: {
    width: "100%",
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
  paymentStatus: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#43A047",
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#212121",
    marginVertical: 10,
  },
  amountWords: {
    fontSize: 14,
    color: "#757575",
  },
  transactionDetails: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    gap:10,
    marginVertical: 5,
    width: "100%",
  },
  label: {
    fontSize: 14,
    color: "#757575",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#212121",
  },
  subValue: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 10,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 5,
  },
  footerLogos: {
    fontSize: 12,
    color: "#212121",
  },
});

export default PaymentReceipt;
