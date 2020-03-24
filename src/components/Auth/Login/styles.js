import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BLUE_0, GRAY_0 } from 'utils/colors'

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
    height: '95%',
    borderRadius: normalize(5),
    backgroundColor: 'white',
    alignSelf: 'center'
    // justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',        
    // justifyContent: 'center',
    // alignContent: 'center',
    marginTop: normalize(5)
  },
  title:{
    width: '90%',
    fontSize: normalize(12),
    color: '#000',
    fontFamily: 'Roboto-Bold',
    marginBottom: normalize(10),
    textAlign: 'center',
    // alignSelf: 'center'
  },
  btnCloseContainer:{
    // alignSelf: 'flex-end'
  },
  closeBtn: {
    width: normalize(10),
    height: normalize(10),
    resizeMode: 'contain',
    
  },
  
  summary:{
    fontSize: normalize(14),
    color: GRAY_0,
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  }  
})

export default styles