import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BTN_MAIN_COLOR, YELLOW_PLAFF } from 'utils/colors'

const styles = StyleSheet.create({
  btn: {
    borderRadius: normalize(50),
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(5),    
  },
  btnEnabled: {
    backgroundColor: BTN_MAIN_COLOR,
    // opacity: 0.3,
  },
  btnDisabled: {    
    backgroundColor: BTN_MAIN_COLOR,
    // opacity: 1,
  },
  text: {
    fontFamily: 'Roboto-Light',    
    fontSize: normalize(8),
    color: '#ffff',
    textAlign: 'center'
  }
})

export default styles