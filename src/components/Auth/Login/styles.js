import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BLUE_1, GRAY_0 } from 'utils/colors'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingRight: normalize(26),
    paddingLeft: normalize(26),
  },
  modalBody: {
    width: '70%',    
    height: '100%',
    borderRadius: normalize(5),
    backgroundColor: 'white',
    alignSelf: 'center'
    // justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',        
    justifyContent: 'center',    
    marginTop: normalize(5)
  },
  title:{
    width: '90%',
    fontSize: normalize(10),
    color: '#000',
    fontFamily: 'Roboto-Bold',
    // marginBottom: normalize(1),
    textAlign: 'center',    
  },
  btnCloseContainer:{
    // alignSelf: 'flex-end'
  },
  closeBtn: {
    width: normalize(10),
    height: normalize(10),
    resizeMode: 'contain',    
  },
  containerForm: {
    marginTop: normalize(10),
    alignItems: 'center',
    marginHorizontal: normalize(25)
  },
  btnContainer: {
    marginTop: normalize(10),
    marginBottom: normalize(15),
    width: normalize(90),
    alignSelf: 'center'
  },
  inputContainer: {
    width: '100%',
  },
  summary:{
    fontSize: normalize(7),
    color: GRAY_0,
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
  rtxt: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(10),
    marginBottom: normalize(20) 
  },
  tregister: {
    fontSize: normalize(7),
    color: GRAY_0,
    fontFamily: 'Roboto-Light',
    marginEnd: normalize(3)
  },
  txtRegister: {
    fontSize: normalize(7),
    color: BLUE_1,
    fontFamily: 'Roboto-Light',    
  }  
})

export default styles