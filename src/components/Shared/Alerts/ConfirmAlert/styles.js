import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

import { BLUE_0, GRAY_0, BLACK_0, BTN_MAIN_COLOR, COLOR_LETRA } from 'utils/colors'

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
    height: '80%',
    borderRadius: normalize(5),
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  title:{
    fontSize: normalize(10),
    color: BLACK_0,
    fontFamily: 'Roboto-Bold',
    marginBottom: normalize(10),
    marginTop: normalize(10),
    textAlign: 'center',
  },
  summary:{
    fontSize: normalize(10),
    color: GRAY_0,
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: normalize(20),
    marginBottom: normalize(10)
  },
  btnCancel:{
    backgroundColor: BTN_MAIN_COLOR,
    width: '30%',      
    paddingVertical: normalize(5),
    borderRadius: normalize(6),
    alignItems: 'center'   
  },
  btnCancelText:{
    fontSize: normalize(10),
    color: '#fff',
    fontFamily: 'Roboto-Light',
  },
  btnConfirm:{
    backgroundColor: COLOR_LETRA,   
    width: '30%',      
    paddingVertical: normalize(5),
    borderRadius: normalize(6),
    alignItems: 'center'   
  },
  btnConfirmText:{
    fontSize: normalize(10),
    color: '#fff',
    fontFamily: 'Roboto-Light',
  }
})

export default styles