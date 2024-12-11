import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from "./layout/Home/Home";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    ProductDetails:undefined;
    Basket: undefined;
}
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type BasketScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Basket'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
