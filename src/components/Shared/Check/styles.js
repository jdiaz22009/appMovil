import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({  
  check: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
    alignSelf: 'center'
  }
})

export default styles