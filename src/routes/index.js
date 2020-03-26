import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import auth from '@react-native-firebase/auth'

import DrawerNavigator from './DrawerNavigator'

import SplashScreen from 'screens/Main/Splash/Splash'
import MainScreen from 'screens/Main/Main/Main'

import normalize from 'react-native-normalize'

import { BLUE_0, YELLOW_0 } from 'utils/colors'

import ButtonDrawer from 'components/App/ButtonDrawer/ButtonDrawer'

const Stack = createStackNavigator()

const Navigator = () => {
  
  const [isLoading, setLoading] = useState(true)
  const [user, setUser] = useState(null)  

  useEffect(() => {    
    let subscriber
    setTimeout(() => {
      subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    }, 2500)
    return subscriber
  }, [])  

  const onAuthStateChanged = async (user) => {    
    if (user) {      
      setLoading(false)
      setUser(user)
    } else {
      setLoading(false)
      setUser(null)
    }    
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer initialRouteName="Splash">       

          {isLoading ? (
            <>
               <Stack.Navigator>
                  <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
               </Stack.Navigator>
            </>
          )
            : !isLoading && user === null ?
              (
                <>
                  <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Main" component={MainScreen} />                    
                  </Stack.Navigator>
                </>

              )
            :
              (
                <>
                  <Stack.Navigator>

                    <Stack.Screen 
                      name="App" 
                      component={DrawerNavigator}
                      options={({navigation, route}) =>(
                        {
                          title: 'Cuasicuentos',
                          headerStyle: {
                            backgroundColor: BLUE_0,
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: normalize(20),
                            fontFamily: 'Roboto-Bold',
                          },
                          headerLeft: () => (
                            <ButtonDrawer />
                          ),
                        }
                        
                      )}
                      
                    /> 

                  </Stack.Navigator>
                </>
              )
          }

        
      </NavigationContainer>
    </SafeAreaProvider>
  )


}

export default Navigator