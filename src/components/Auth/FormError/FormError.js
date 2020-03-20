import React from 'react'
import styles from './styles'

import { View, Text } from 'react-native'

const FormError = (props) => {
  return(
    <View>
      <Text style={styles.txt}>{props.message}</Text>
    </View>
  )  
}

export default FormError
