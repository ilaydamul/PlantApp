import { Rubik_300Light, Rubik_400Regular, Rubik_700Bold } from "@expo-google-fonts/rubik";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, StatusBar, Text, TextInput } from "react-native";

//NAVIGATOR
export default function RootLayout() {
  

  return (
    <>
      <StatusBar
        barStyle="dark-content" 
        translucent={true} 
        backgroundColor="transparent" 
      />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboard" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      </>
  );
}
