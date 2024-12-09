import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import tw from 'twrnc'

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <AppNavigation />
    </SafeAreaView>
  );
}
