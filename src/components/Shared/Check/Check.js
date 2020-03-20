import React from 'react'
import styles from './styles'

import { Image, TouchableOpacity } from 'react-native'

import Round from 'assets/images/check-round.png'
import RoundActive from 'assets/images/check-round-active.png'
import Square from 'assets/images/check-square.png'
import SquareActive from 'assets/images/check-square-active.png'

const Check = (props) => {

  const getIcon = () => {
    if(props.mode == 'square'){
      if(props.check){
        return SquareActive        
      }else{
        return Square
      }
    }else if(props.mode === 'round'){
      if(props.check){
        return RoundActive
      }else{
        return Round
      }
    }
  }
  return(
    <TouchableOpacity
      onPress={() => props.click()}>
      <Image source={getIcon()} style={styles.check} />
    </TouchableOpacity>
  )
}



export default Check