import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import HomeScreen from 'screens/App/Home/Home'
import SavedScreen from 'screens/App/Saved/Saved'
import ProfileScreen from 'screens/App/Profile/Profile'

import DrawerList from 'components/App/DrawerList/DrawerList'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerList />
    </DrawerContentScrollView>
  )
}

function Navigator(){
  return (
    // <Drawer.Navigator>
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>    

      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ drawerLabel: 'Tus Packs' }}/>
        
      <Drawer.Screen 
        name="Saved" 
        component={SavedScreen} 
        options={{ drawerLabel: 'Cuasicuentos Guardados' }}/>

      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ drawerLabel: 'Mi Perfil' }}/>

    </Drawer.Navigator>
  )
}

export default Navigator