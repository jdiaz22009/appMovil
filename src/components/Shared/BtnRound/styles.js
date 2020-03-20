import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BLUE_PLAFF, YELLOW_PLAFF } from 'utils/colors'

const styles = StyleSheet.create({  
  btn:{    
    width: normalize(40),
    height: normalize(40),
    backgroundColor: YELLOW_PLAFF,
    borderRadius:  normalize(60) / 2,    
    justifyContent: 'center',
    position: 'absolute',    
  },
  icon: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
    alignSelf: 'center'
  }
})

export default styles