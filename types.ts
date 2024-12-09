import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Basket:undefined
}
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;