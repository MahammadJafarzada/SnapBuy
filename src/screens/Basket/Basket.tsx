import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { Product } from "../../../layout/Home/Home";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";

type BasketProps = {
  route: RouteProp<RootStackParamList, "Basket">;
};
const Basket = ({ route }: BasketProps) => {
    const { cart } = route.params; // Get the cart parameter from the route


    const removeFromCart = () => {
        
    }


  const renderCartItem = ({ item }: { item: Product }) => (
    <View
      key={item.id}
      style={tw`flex-1 justify-around bg-gray-100 rounded-lg shadow-md p-4 mb-4`}
    >
      <Image
        style={[tw`h-40 rounded-lg mb-4 self-center`, { width: "100%" }]}
        source={{ uri: item.images[0] }}
      />
      <View style={tw`items-center mb-4`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>{item.title}</Text>
        <Text style={tw`text-lg text-green-600 font-semibold`}>
          ${item.price}
        </Text>
      </View>
      <TouchableOpacity onPress={removeFromCart}>
      <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Your Basket</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Basket;
