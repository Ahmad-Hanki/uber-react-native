import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="rides" />
        <Stack.Screen name="chat" />
      </Stack>
    </>
  );
};

export default _layout;
