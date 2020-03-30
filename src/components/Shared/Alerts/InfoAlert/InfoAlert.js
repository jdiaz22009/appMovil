import React from 'react'
import styles from './styles'

import { Modal, View, Text, TouchableOpacity } from 'react-native'

const InfoAlert = (props) => (
  <Modal
    animationType="none"
    transparent
    visible={props.data ? props.data.show : false}
    supportedOrientations={['portrait', 'landscape']}>

    <View style={styles.modalContainer}>

      <View style={styles.modalBody}>

        {props.data &&
          <View>
            <Text style={styles.title}>{props.data.title ? props.data.title: '' }</Text>
            <Text style={styles.summary}>{props.data.summary ? props.data.summary : ''}</Text>
          </View>
        }

        <View style={styles.btnContainer}>            

          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={() => props.onConfirm()}>
            <Text style={styles.btnConfirmText}>{props.confirmText ? props.confirmText: 'Aceptar'}</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>

  </Modal>
)    
  
export default InfoAlert