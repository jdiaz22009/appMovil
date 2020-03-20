import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BLUE_PLAFF, YELLOW_PLAFF } from 'utils/colors'

const styles = StyleSheet.create({
  btn: {
    borderRadius: normalize(50),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  btnEnabled: {
    // backgroundColor: BLUE_PLAFF,
    backgroundColor: YELLOW_PLAFF
  },
  btnDisabled: {
    // backgroundColor: '#5E6E99',
    backgroundColor: '#FFD46E'
  },
  text: {
    fontFamily: 'NexaLight',
    // fontFamily: 'NexaBold',
    fontSize: normalize(17),
    color: '#ffff',
    textAlign: 'center'
  }
})

export default styles