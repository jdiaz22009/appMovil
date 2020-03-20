import React from 'react'
import styles from './styles'

import { View, Image } from 'react-native'

import logo from 'assets/images/logo.png'

const SplashScreen = () => {

  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  )
}

export default SplashScreen