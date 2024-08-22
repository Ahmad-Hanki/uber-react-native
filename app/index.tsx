import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
    className="bg-black h-screen flex-1"
    >
      <Text 
      className="bg-white"
      >Home</Text>
      <StatusBar barStyle={"default"}/>
    </SafeAreaView>
  );
};

export default Home;
