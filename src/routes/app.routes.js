import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
 return (
   <AppDrawer.Navigator
    drawerContent={(props)=> <CustomDrawer {...props}/>}
    screenOptions={{
      headerShown:false,
      drawerStyle:{
        backgroundColor:'#0F4C75',
        paddingTop:20,
      },
      drawerActiveBackgroundColor:'#FFB100',
      drawerActiveTintColor:'#000',
      drawerInactiveBackgroundColor:'#3282B8',
      drawerInactiveTintColor:'#fff'
    }}
   >
    <AppDrawer.Screen
        name='Home'
        component={Home}
        
    />
    <AppDrawer.Screen
        name='Registrar Movimentos'
        component={New}   
    />
    <AppDrawer.Screen
        name='Perfil do Usuário'
        component={Profile}   
    />
   </AppDrawer.Navigator>
  );
}