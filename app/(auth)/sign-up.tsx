import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white ">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full  h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5 ">
          <InputField
            label={"Name"}
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(val) => setForm({ ...form, name: val })}
          />
          <InputField
            label={"E-mail"}
            placeholder="Enter your E-mail"
            icon={icons.email}
            value={form.email}
            onChangeText={(val) => setForm({ ...form, email: val })}
          />
          <InputField
            label={"Password"}
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(val) => setForm({ ...form, password: val })}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          {/* OAuth */}
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
        {/* Verification Modal*/}
      </View>
    </ScrollView>
  );
};

export default SignUp;
