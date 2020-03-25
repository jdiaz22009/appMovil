import React, { useState } from 'react'
import styles from './styles'

import { Modal, View, Text, Image,  TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FormInput from 'components/Auth/FormInput/FormInput'
import FormError from 'components/Auth/FormError/FormError'
import Loader from 'components/Shared/Loader/Loader'
import InfoAlert from 'components/Shared/Alerts/InfoAlert/InfoAlert'
import BtnApp from 'components/Shared/BtnApp/BtnApp'

import CloseImg from 'assets/images/close.png'

import { validateEmail, validatePassword, validateText } from 'utils/utils'

import auth from '@react-native-firebase/auth'


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

const ConfirmAlert = (props) => {

  const [visiblePassword, setVisiblePassword] = useState(false)
  const [formOpt, setFormOpt] = useState(formOptions)
  const [formData, setFormData] = useState(formInit)
  const [showLoader, setShowLoader] = useState(false)
  const [infoData, setInfoData] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const navigation = useNavigation()


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

  return(
    <Modal
      animationType="none"
      transparent
      visible={props.show}
      supportedOrientations={['portrait', 'landscape']}>

      <KeyboardAwareScrollView>

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
              onPress={() => console.warn('forgot')}>
              <Text style={styles.summary}>¡Olvidé mi contraseña!</Text>
            </TouchableOpacity>

            <View style={styles.rtxt}>
              <Text style={styles.tregister}>No tengo cuenta</Text>
              <TouchableOpacity>
                <Text style={styles.txtRegister}>Quiero Registrarme</Text>
              </TouchableOpacity>
            </View>

          </View>
          
        </View>

      </KeyboardAwareScrollView>
    
    </Modal>
  )
}

export default ConfirmAlert