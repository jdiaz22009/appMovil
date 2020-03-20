import React, { useState, useEffect } from 'react'
import styles from './styles'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import auth from '@react-native-firebase/auth'

import BtnApp from 'components/Shared/BtnApp/BtnApp'
import FormInput from 'components/Auth/FormInput/FormInput'
import FormError from 'components/Auth/FormError/FormError'
import Loader from 'components/Shared/Loader/Loader'
import InforAlert from 'components/Shared/Alerts/InfoAlert/InfoAlert'

import { validateEmail, validatePassword, validateText, getAppVersion } from 'utils/utils'

import Logo from 'assets/images/plaff/logo.png'

const formInit = {
  email: '',
  password: ''
}

const formOptions = [
  {
    name: 'email',
    mode: 'text',
    placeholder: 'Email',
    msgError: 'Ingrese un email válido',
    validate: false,
    showError: false,
    keyboardType: 'email-address'
  },
  {
    name: 'password',
    mode: 'password',
    placeholder: 'Contraseña',
    msgError: 'La contraseña debe contener 6 dígitos y una mayúscula',
    validate: false,
    showError: false,
    keyboardType: 'default'
  }
]

const LoginScreen = () => {

  const [visiblePassword, setVisiblePassword] = useState(false)
  const [formOpt, setFormOpt] = useState(formOptions)
  const [formData, setFormData] = useState(formInit)
  const [showLoader, setShowLoader] = useState(false)
  const [infoData, setInfoData] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [appVersion, setAppVersion] = useState('')

  const navigation = useNavigation()

  const onAuthStateChanged = (user) => {
    if (user) {
      setShowLoader(false)
      navigation.navigate('Home')
    } else {
      setShowLoader(false)
    }
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    if (getAppVersion()) {
      setAppVersion(getAppVersion())
    }
    // return subscriber
  }, [])

  const verifyValidations = () => {
    if (formOpt.every((item) => item.validate)) {
      console.log('all validate success')
      setBtnDisabled(false)
      return
    }
    console.log('no validate')
    if (!btnDisabled) {
      setBtnDisabled(true)
    }
  }

  const updateFormOpt = (index, showError, validate) => {
    let formOptAux = [...formOpt]
    formOptAux[index].showError = showError
    formOptAux[index].validate = validate
    setFormOpt(formOptAux)
  }

  const validateTextInput = (item, index) => {
    if (item.name === 'email') {
      if (!validateEmail(formData[item.name])) {
        return updateFormOpt(index, true, false)
      }
    } else if (item.name === 'password') {
      if (!validatePassword(formData[item.name])) {
        return updateFormOpt(index, true, false)
      }
    } else {
      if (!validateText(formData[item.name])) {
        return updateFormOpt(index, true, false)
      }
    }
    updateFormOpt(index, false, true)
    verifyValidations()
  }

  const buildForm = () => {
    return formOpt.map((item, index) => {
      return (
        <View key={index} style={styles.inputContainer}>
          <FormInput
            mode={item.mode}
            visiblePassword={visiblePassword}
            icon={item.icon}
            name={item.name}
            placeholder={item.placeholder}
            keyboardType={item.keyboardType}
            value={formData[`item.name`]}
            onChangeText={text => {
              setFormData({ ...formData, [item.name]: text });
              validateTextInput(item, index)
            }}
            changeVisibility={() => setVisiblePassword(!visiblePassword)}
          //onBlur={() => validateTextInput(item, index) }
          />
          {item.showError &&
            <FormError
              message={item.msgError}
            />
          }
        </View>
      )
    })
  }

  const userSignIn = async () => {
    try {
      setShowLoader(true)
      const { email, password } = formData
      await auth().signInWithEmailAndPassword(email, password)
      setShowLoader(false)
    } catch (e) {
      console.error(`login error ` + e)
      setShowLoader(false)
      let summary = ''
      if (e.code === 'auth/user-not-found') {
        summary = 'No se encuentra el email registrado como usuario'
      } else if (e.code === 'auth/wrong-password') {
        summary = 'La clave no es correcta, verifique sus datos e intente de nuevo.'
      }

      setInfoData({
        show: true,
        title: 'Error',
        summary
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAwareScrollView>

        <View style={styles.formContainer}>

          <Image source={Logo} style={styles.logo} />

          <Text style={styles.loginTitle}>Login</Text>

          <View style={styles.containerForm}>
            {buildForm()}
          </View>

          <View style={styles.btnContainer}>
            <BtnApp
              onPress={() => userSignIn()}
              disabled={btnDisabled}
              text={`Iniciar Sesión`}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Recover')}>
            <Text style={styles.recover}>¿Olvidaste la contraseña?</Text>
          </TouchableOpacity>

          <Text style={styles.noAccount}>No tienes cuenta aún?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.noAccount}>- Registro -</Text>
          </TouchableOpacity>

          <Text style={styles.versionText}>Versión {appVersion}</Text>

        </View>

      </KeyboardAwareScrollView>

      <InforAlert
        data={infoData}
        onConfirm={() => setInfoData({ show: false, title: '', summary: '' })}
      />

      <Loader
        show={showLoader}
      />

    </SafeAreaView>
  )
}

export default LoginScreen
