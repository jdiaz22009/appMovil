import React from 'react'
import styles from './styles'

import { View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

const SavedScreen = () => {

  return(
    <SafeAreaView>
      <View>
        <Text>Saved stories</Text>
      </View>
    </SafeAreaView>
  )
}
export default SavedScreen