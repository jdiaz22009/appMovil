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
    borderRadius: normalize(20),
    height: normalize(200),
    backgroundColor: 'white',
    width: '100%',    
    justifyContent: 'center',
  },
  title:{
    fontSize: normalize(18),
    color: BLUE_0,
    fontFamily: 'NexaBold',
    marginBottom: normalize(15),
    textAlign: 'center',
  },
  summary:{
    fontSize: normalize(14),
    color: GRAY_0,
    fontFamily: 'NexaLight',
    textAlign: 'center',
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: normalize(20),
    marginBottom: normalize(10)
  },
  btnCancel:{
    backgroundColor: BLUE_0,
    width: '30%',      
    paddingVertical: normalize(15),
    borderRadius: normalize(6),
    alignItems: 'center'   
  },
  btnCancelText:{
    fontSize: normalize(13),
    color: '#fff',
    fontFamily: 'NexaLight',
  },
  btnConfirm:{
    backgroundColor: BLUE_0,   
    width: '30%',      
    paddingVertical: normalize(15),
    borderRadius: normalize(6),
    alignItems: 'center'   
  },
  btnConfirmText:{
    fontSize: normalize(13),
    color: '#fff',
    fontFamily: 'NexaLight',
  }
})

export default styles