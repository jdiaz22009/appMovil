import React from 'react'
import styles from './styles'

import { View, TextInput, TouchableOpacity } from 'react-native'

const FormInput = ({mode, visiblePassword, changeVisibility, name, placeholder, keyboardType, value, ...rest}) => (
  <View style={styles.input}> 

    <TextInput
      {...rest}
      name={name}
      secureTextEntry={mode === 'password' && !visiblePassword}
      placeholder={placeholder}
      autoCapitalize="none"
      maxLength={40}
      autoCorrect={false}      
      value={value}
      style={styles.textInput}
      keyboardType={keyboardType}
    />

    {mode === 'password' &&
      <TouchableOpacity
        onPress={() => changeVisibility() }
        style={styles.iconPassword}>
        {/*visiblePassword ? (
          <IconEye name="eye-slash" style={styles.iconEye} />
        ) : (
          <IconEye name="eye" style={styles.iconEye} />
        )*/}
      </TouchableOpacity>
    }

  </View>
)

 

export default FormInput