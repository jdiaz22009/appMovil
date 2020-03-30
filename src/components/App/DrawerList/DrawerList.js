import React, { useState } from 'react'
import styles from './styles'

import { View, Button, TouchableOpacity, Text, Linking } from 'react-native'

import auth from '@react-native-firebase/auth'

import ConfirmAlert from 'components/Shared/Alerts/ConfirmAlert/ConfirmAlert'

import CONFIG from 'utils/config'

const DrawerList = () => {

  const [ showAlert, setShowAlert ] = useState(false)

  const logout = async () => {
    try{
      await auth().signOut()
      setShowAlert(false)
    }catch(e){
      console.error(e)
    }
  }

  const openUrl = async () => {
    try{
      await Linking.openURL(CONFIG.cuasicuentosUrl)
    }catch(e){
      console.error(e)
    }
  }

  return(
    <View style={styles.listContainer}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openUrl()}>
        <Text style={styles.btnText}>Cuasicuentos.com</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAlert(true)}>
        <Text style={styles.btnText}>Salir</Text>
      </TouchableOpacity>

      {/*} 
        <Button style={styles.button} title={`Cuasicuentos.com`} onPress={() => openUrl()}/>        
        <Button style={styles.button} title={`Salir`} onPress={() => logout()}/> 
      */}       

      <ConfirmAlert 
        show={showAlert}
        title={`Salir`}
        summary={`Deseas salir de la aplicación`}
        cancelText={`Cancelar`}
        confirmText={`Salir`}
        onCancel={() => setShowAlert(false)}
        onConfirm={() => logout()}
      />

    </View>
  )
}

export default DrawerList