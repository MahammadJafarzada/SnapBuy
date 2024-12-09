import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white p-4`}>
      <View style={tw`flex-2`}>
        <View style={tw`w-80 bg-gray-100 rounded-lg shadow-md p-4`}>
          <Image
            style={tw`w-40 h-40 rounded-lg mb-4 self-center`}
            source={require("../../assets/toys.png")}
          />
          <View style={tw`items-center mb-4`}>
            <Text style={tw`text-lg font-bold text-gray-800`}>Oyuncaq</Text>
            <Text style={tw`text-lg text-green-600 font-semibold`}>$50</Text>
          </View>
          <TouchableOpacity
            style={tw`bg-blue-500 px-6 py-3 rounded-lg`}
            onPress={() => console.log("Add to Cart pressed")}
          >
            <Text style={tw`text-white text-center font-semibold`}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
