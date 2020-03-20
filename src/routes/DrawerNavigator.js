import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import HomeScreen from 'screens/App/Home/Home'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

function Navigator(){
  return (
    // <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>    
    <Drawer.Navigator>

      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ drawerLabel: 'Inicio' }}/>      

    </Drawer.Navigator>
  )
}

export default Navigator