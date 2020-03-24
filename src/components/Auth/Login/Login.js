import React from 'react'
import styles from './styles'

import { Modal, View, Text, Image,  TouchableOpacity } from 'react-native'


import CloseImg from 'assets/images/close.png'

const ConfirmAlert = (props) => {

  return(
    <Modal
      animationType="none"
      transparent
      visible={props.show}
      supportedOrientations={['portrait', 'landscape']}>

      <View style={styles.modalContainer}>

        <View style={styles.modalBody}>

          <View style={styles.header}>

            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <TouchableOpacity
              style={styles.btnCloseContainer}
              onPress={() => props.close()}>
              <Image source={CloseImg} style={styles.closeBtn} />
            </TouchableOpacity>
          </View>
        

          

          <Text style={styles.title}>¡Olvidé mi contraseña!</Text>

          <View>
            <Text>No tengo cuenta</Text>
            <TouchableOpacity>
              <Text>Quiero Registrarme</Text>
            </TouchableOpacity>
          </View>

        </View>
        
      </View>
    
    </Modal>
  )
}

export default ConfirmAlert