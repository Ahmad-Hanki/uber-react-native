import { icons } from "@/constants";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

const TabIcon = ({
  src,
  focused,
  name,
}: {
  src: ImageSourcePropType;
  focused: Boolean;
  name: string;
}) => {
  return (
    <View
      className={`
       w-15 h-15 // 16
       w-12 h-12 
        p-2 flex 
        flex-coll // col
        flex-row 
        justify-center items-center }`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}
      >
        <Image
          source={src}
          tintColor={focused ? "white" : "gray"}
          resizeMode="contain"
          className="w-7 h-7 "
        />
      </View>

      {/* <View className="w-full h-4">
        <Text className="text-white  text-center text-xs">{name}</Text>
      </View> */}
    </View>
  );
};

const _layout = () => {
  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginBottom: 20,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "relative",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: (options) => (
              <TabIcon
                src={icons.home}
                focused={options.focused}
                name={"Home"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: (options) => (
              <TabIcon
                src={icons.list}
                focused={options.focused}
                name={"Rides"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: (options) => (
              <TabIcon
                src={icons.chat}
                focused={options.focused}
                name={"Chat"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: (options) => (
              <TabIcon
                src={icons.profile}
                focused={options.focused}
                name={"Profile"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
