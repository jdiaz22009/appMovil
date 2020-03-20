import DeviceInfo from 'react-native-device-info'

export const getAppVersion = () => {
  return DeviceInfo.getVersion()
}

export const validateText = (text) => {
  if (text.length > 0) {
    return true
  }
  return false
}

export const validateEmail = (email) => {
  const exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return !!exp.test(email)
}

export const validatePassword = (password) => {
  //Minimum eight characters, at least one letter and one number  
  const exp = /^(?=.*[A-Za-z])[A-Za-z\d]{5,}$/
  return !!exp.test(password)
}

export const validateArray = (array) => {
  return array !== undefined && array !== null && Array.isArray(array) && array.length > 0
}
export const truncate = (value, limit) => {
  if (value !== undefined && value !== null) {
    if (value.length > limit) {
      return value = value.substring(0, (limit - 3)) + '...'
    } else {
      return value
    }
  }
  return ''
}