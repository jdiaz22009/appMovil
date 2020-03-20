import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { YELLOW_0, GRAY_0 } from 'utils/colors'

const styles = StyleSheet.create({
  input:{
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',        
    borderBottomColor: YELLOW_0,
    borderBottomWidth: 1,
    marginBottom: normalize(20),  
  },
  textInput:{
    flex: 1,    
    paddingTop: normalize(10),
    paddingRight: normalize(10),
    paddingBottom: normalize(10),
    paddingLeft: 0,    
    color: GRAY_0,  
    fontFamily: 'NexaLight',
    fontSize: normalize(16)
  },
  iconPassword:{
    padding: normalize(10),
    marginRight: normalize(10),
    opacity: 0.7
  },
  iconEye:{
    color: '#cecece',
    fontSize: normalize(20)
  },
})

export default styles