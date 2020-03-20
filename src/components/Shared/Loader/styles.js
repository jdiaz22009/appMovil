import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    paddingRight: normalize(26),
    paddingLeft: normalize(26),
  },
})

export default styles