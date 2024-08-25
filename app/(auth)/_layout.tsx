import { Stack } from "expo-router";
import { useAuth } from '@clerk/clerk-expo'

const Layout = () => { 
 

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
    </Stack>
  );
}

export default Layout