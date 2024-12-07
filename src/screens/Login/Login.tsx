import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import tw from 'twrnc'
import CustomButton from '../../components/CustomButton'
import InputField from '../../components/InputFields'
import { RootStackParamList } from '../../../types'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const Login = () => {

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () =>{

  }
  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView
        contentContainerStyle={tw`flex-1 justify-center items-center p-6`}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tw`w-full`}>
          <InputField
            label="İstifadəçi adı"
            iconName="person-outline"
            value={usernameInput}
            onChangeText={setUsernameInput}
          />
          <InputField
            label="Şifrə"
            iconName="eye-outline"
            secureTextEntry={!isPasswordVisible}
            value={passwordInput}
            onChangeText={setPasswordInput}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          <CustomButton
            title={isLoading ? "Daxil olunur..." : "Daxil ol"}
            onPress={handleLogin}
            disabled={isLoading}
            style={isLoading ? tw`bg-gray-400` : tw`bg-blue-500`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login