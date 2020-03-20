import React from 'react'
import styles from './styles'

import { Modal, View, ActivityIndicator } from 'react-native'

import { BLUE_PLAFF } from 'utils/colors'

const Loader = (props) => (
  <Modal
    animationType="none"
    transparent
    visible={props.show}>
    
    <View style={styles.modalContainer}>
      <ActivityIndicator 
        animating={props.show}
        size="large"
        color={BLUE_PLAFF} />
    </View>
    
  </Modal>
)

export default Loader