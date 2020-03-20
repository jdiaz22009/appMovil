import React from 'react'
import styles from './styles'

import { View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  return(
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen