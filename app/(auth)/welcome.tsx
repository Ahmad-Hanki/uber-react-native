import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
// this swiper is very good
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [active, setActive] = useState(0);
  const isLastIndex = active == onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white py-10">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(i) => {
          setActive(i);
        }}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="w-full items-center justify-center p-5 "
          >
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode={"contain"}
            />
            <View className="flex flex-row items-center justify-center w-full">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg text-center font-JakartaSemiBold text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        onPress={() => {
          if (!isLastIndex) {
            swiperRef.current?.scrollBy(1);
            return;
          }

          router.replace("/(auth)/sign-up");
        }}
        title={isLastIndex ? "Get Started" : "Next"}
        className={"w-11/12 mt-10"}
      />
    </SafeAreaView>
  );
};

export default Welcome;
