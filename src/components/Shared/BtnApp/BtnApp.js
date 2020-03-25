import React from 'react'
import styles from './styles'

import { TouchableOpacity, Text } from 'react-native'

const BtnApp = (props) => (
  <TouchableOpacity
    disabled={props.disabled ? props.disabled: false}
    style={props.disabled ? {...styles.btn, ...styles.btnDisabled } : {...styles.btn, ...styles.btnEnabled} }
    onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
)

export default BtnApp