import { icons } from "@/constants";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({src, focused}: {src:ImageSourcePropType, focused:Boolean})=> {
    return (
      <View className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-general-300':''}`}>
        <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400':''}`}>
            <Image
            source={src}
            tintColor={'white'}
            resizeMode="contain"
            className="w-7 h-7 "
            />
        </View>
        
      </View>

    )
}


const _layout = () => {
  return (
    <>
      <Tabs
      initialRouteName="index"
      screenOptions={{
        
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'white',
         tabBarShowLabel:false,
         tabBarStyle:{
            backgroundColor:'#333333',
            borderRadius:50,
            paddingBottom:0,
            overflow:'hidden',
            marginBottom:20,
            height:78,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            position:'absolute'
         }
      }}
      >
        <Tabs.Screen name="home" options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:((options) => <TabIcon src = {icons.home} focused={options.focused}/>)
        }}/>
        <Tabs.Screen name="rides" options={{
            title:'Rides',
            headerShown:false,
            tabBarIcon:((options) => <TabIcon src = {icons.list} focused={options.focused}/>)
        }}/>
        <Tabs.Screen name="chat" options={{
            title:'Chat',
            headerShown:false,
            tabBarIcon:((options) => <TabIcon src = {icons.chat} focused={options.focused}/>)
        }}/>
        <Tabs.Screen name="profile" options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:((options) => <TabIcon src = {icons.profile} focused={options.focused}/>)
        }}/>
      </Tabs>
    </>
  );
};

export default _layout;
