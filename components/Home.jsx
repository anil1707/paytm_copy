import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import Camera from "./Camera";
import PaymentReceipt from "./PaymentRecietp";

const Home = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = React.useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [amount, setAmount] = useState(null);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {!openCamera && !isPaymentDone && (
        <View
          style={{
            width: "100%",
            height: "100%",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Pay with Paytm</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            style={{
              borderRadius: 10,
              borderWidth: 1,
              padding: 10,
              width: "90%",
            }}
            placeholder="Enter amount"
          />
          <TouchableOpacity
            onPress={() => {
              setOpenCamera(!openCamera);
            }}
            style={{
              backgroundColor: "lightblue",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text>Scan</Text>
          </TouchableOpacity>
        </View>
      )}
      {openCamera && !isPaymentDone && (
        <Camera
          setOpenCamera={setOpenCamera}
          setIsPaymentDone={setIsPaymentDone}
          setUserDetail={setUserDetail}
        />
      )}

      {!openCamera && isPaymentDone && (
        <PaymentReceipt
          userData={userDetail}
          isPaymentDone={isPaymentDone}
          setIsPaymentDone={setIsPaymentDone}
          amount={amount}
        />
      )}
    </View>
  );
};

export default Home;
