import React, { useEffect, useState } from 'react'
import styles from './styles'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import LinearGradient from 'react-native-linear-gradient'

import auth from '@react-native-firebase/auth'

import Login from 'components/Auth/Login/Login'
import Register from 'components/Auth/Register/Register'

import { getAppVersion } from 'utils/utils'

import ProfeImg from 'assets/images/profe512.png'
import LogoImg from 'assets/images/logo.png'


const BtnMain = ({onPress, text}) => (
  <TouchableOpacity
    style={styles.btnMain}
    onPress={() => onPress()}>
    <Text style={styles.btnMainText}>{text}</Text>
  </TouchableOpacity>
)
const MainScreen = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [appVersion, setAppVersion] = useState('')

  useEffect(() => {    
    if (getAppVersion()) {
      setAppVersion(getAppVersion())
    }    
  }, [])

  const signAnonymously = async () => {
    try{
      const userCredential = await auth().signInAnonymously()
      console.log(userCredential)
      console.log(userCredential.user.email)
      console.log(userCredential.user.uid)
    }catch(e){
      console.error(e)
    }
  }

  return(

    <View>

      <LinearGradient colors={['#ed6e53', '#e95b40']} style={styles.linearContainer}>

        <Image source={LogoImg} style={styles.headerImg} />

        <View style={styles.content}>

          <View style={styles.containerBtn}>

            <BtnMain
              onPress={() => setShowLogin(true)}
              text={`Ya casicuenteo (Online)`} />

            <BtnMain
              onPress={() => setShowRegister(true)}
              text={`Quiero Registrarme`} />

            <BtnMain
              onPress={() => signAnonymously()}
              text={`Vengo de paso (Offline)`} />  
              
            <Text style={styles.appVersion}>Versión V.{appVersion}</Text>
      
          </View>

          <View style={styles.imgContainer}>
            <Image source={ProfeImg} style={styles.profe} />
          </View>
          
        </View>          


      </LinearGradient>     
      
      <Login
        show={showLogin}
        close={() => setShowLogin(false)} 
      />

      <Register
        show={showRegister}
        close={() => setShowRegister(false)}
      />
    
    </View>

  )
}

export default MainScreen