import React from 'react'
import styles from './styles'

import { TouchableOpacity, Image } from 'react-native'

import plusIcon from 'assets/images/plus.png'
const BtnRound = (props) => {

  return(
    <TouchableOpacity
      style={styles.btn}
      onPress={() => props.onPress()}>
      <Image source={plusIcon} style={styles.icon} />
    </TouchableOpacity>
  )

}

export default BtnRound