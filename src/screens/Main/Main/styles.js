import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BTN_MAIN_COLOR  } from 'utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  linearContainer:{
    
  },
  headerImg:{
    width: '100%',
    height: normalize(50),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  content:{
    marginHorizontal:normalize(30),
    flexDirection: 'row',
    height: '100%'
  },
  containerBtn:{
    marginTop: normalize(20),
    width: '30%'
  },
  btnMain:{
    marginVertical: normalize(5),
    backgroundColor: BTN_MAIN_COLOR,
    paddingVertical: normalize(5),
    paddingStart: normalize(4),
    borderRadius: normalize(4)
  },
  btnMainText:{
    fontFamily: 'Roboto-Regular',
  },
  imgContainer:{
    width: '70%',    
  },
  profe:{
    width: normalize(110),
    height: normalize(110),
    resizeMode: 'contain',
    alignSelf: 'center',
    alignSelf: 'flex-end'
  }  
})

export default styles