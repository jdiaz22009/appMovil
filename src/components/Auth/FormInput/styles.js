import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { COLOR_BOTONES, GRAY_0 } from 'utils/colors'

const styles = StyleSheet.create({
  input:{
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',        
    borderBottomColor: COLOR_BOTONES,
    borderBottomWidth: 1,
    marginBottom: normalize(10),  
  },
  textInput:{
    flex: 1,    
    paddingTop: normalize(3),
    paddingRight: normalize(3),
    paddingBottom: normalize(3),
    paddingLeft: 0,    
    color: GRAY_0,  
    fontFamily: 'Roboto-Light',
    fontSize: normalize(10)
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