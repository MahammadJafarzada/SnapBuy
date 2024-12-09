import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { products } from "../../src/utils/ProductsAPI";
import { HomeScreenNavigationProp } from "../../types";

export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const Home = () => {
  const [cart, setCart] = useState<Product[]>([]);  // Store cart items
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Use Home navigation prop

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);  // Add product to cart
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View key={item.id} style={tw`flex-1 justify-around bg-gray-100 rounded-lg shadow-md p-4 mb-4`}>
      <Image
        style={[tw`h-40 rounded-lg mb-4 self-center`, { width: '100%' }]}
        source={{ uri: item.images[0] }}
      />
      <View style={tw`items-center mb-4`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>{item.title}</Text>
        <Text style={tw`text-lg text-green-600 font-semibold`}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={tw`bg-blue-500 px-6 py-3 rounded-lg`}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={tw`text-white text-center font-semibold`}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-4`}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={tw`pb-20`}
        columnWrapperStyle={tw`justify-between`}
      />
      <View style={tw`flex-row justify-center items-center py-4`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Basket", { cart })} // Pass cart to Basket screen
          style={tw`bg-red-500 rounded-full px-6 py-3`}
        >
          <Text style={tw`text-white font-bold`}>Basket: {cart.length}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
