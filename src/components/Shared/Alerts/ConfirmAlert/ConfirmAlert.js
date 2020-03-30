import React from 'react'
import styles from './styles'

import { Modal, View, Text, TouchableOpacity } from 'react-native'

const ConfirmAlert = (props) => {

  return(
    <Modal
      animationType="none"
      transparent
      visible={props.show}
      supportedOrientations={['portrait', 'landscape']}>

      <View style={styles.modalContainer}>

        <View style={styles.modalBody}>
        
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.summary}>{props.summary}</Text>

          <View style={styles.btnContainer}>

            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => props.onCancel()}>
              <Text style={styles.btnCancelText}>{props.cancelText}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={() => props.onConfirm()}>
              <Text style={styles.btnConfirmText}>{props.confirmText}</Text>
            </TouchableOpacity>

          </View>

        </View>
        
      </View>
    
    </Modal>
  )
}

export default ConfirmAlert