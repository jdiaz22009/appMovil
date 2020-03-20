import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: normalize(150),
    height: normalize(150),
    resizeMode: 'contain'
  }
})

export default styles