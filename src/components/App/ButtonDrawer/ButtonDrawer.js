import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import { DrawerActions, useNavigation } from '@react-navigation/native'

import menuIcon from  'assets/images/menu.png'

const ButtonDrawer = () => {

  const navigation = useNavigation()

  const toggleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return(
    <TouchableOpacity
      onPress={() => toggleMenu()}>
      <Image source={menuIcon} style={{width: 20, height: 15, marginLeft: 10}} />
    </TouchableOpacity>
  )
}

export default ButtonDrawer