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
  password: '',
  repeat: '',
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
  },
  {
    name: 'repeat',
    mode: 'repeat',
    placeholder: 'Repetir Contraseña',
    msgError: 'La contraseña no coincide y/o debe contener 6 dígitos y una mayúscula',
    validate: false,
    showError: false,
    keyboardType: 'default'
  },
]

const Register = (props) => {

  const [visiblePassword, setVisiblePassword] = useState(false)
  const [formOpt, setFormOpt] = useState(formOptions)
  const [formData, setFormData] = useState(formInit)
  const [showLoader, setShowLoader] = useState(false)
  const [infoData, setInfoData] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true) 


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
    } else if (item.name === 'password' || item.name === 'repeat') {
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


  const userSignUp = async () => {
    try{
      const { email, password, repeat } = formData
    }catch(e){
      console.error(e)
      setShowLoader(false)
      setInfoData({
        show: true,
        title: 'Error',
        summary: 'Ha ocurrido un error al registrar al usuario'
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

              <Text style={styles.title}>Registrarse</Text>
              
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
                onPress={() => userSignUp()}
                disabled={btnDisabled}
                text={`Registro`}
              />
            </View>


          </View>
        </View>
      </KeyboardAwareScrollView>
    </Modal>

  )
}

export default Register