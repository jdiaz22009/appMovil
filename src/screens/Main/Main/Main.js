import React from 'react'
import styles from './styles'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const MainScreen = () => {

  return(
    <SafeAreaView>

      <View>

      <Text>Ya casicuenteo (Online)</Text>
      <Text>Quiero Registrarme</Text>
      <Text>Vengo de paso (Offline)</Text>
      
      </View>
    
    </SafeAreaView>

  )
}

export default MainScreen