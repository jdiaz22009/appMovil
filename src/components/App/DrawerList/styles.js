import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  listContainer: {    
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  button: {
    marginVertical: normalize(5),
    marginStart: normalize(6) 
  },
  btnText:{
    fontSize: normalize(6),
    fontFamily: 'Roboto-Regular'
  }

})

export default styles