import React, {useContext} from 'react';
import { View, Text, Image } from 'react-native';

import {DrawerItemList, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
    const {user, signOut} = useContext(AuthContext);
 return (
    <DrawerContentScrollView {...props}>
        <View style={{alignItems:'center', justifyContent:'center', marginTop:25}}>
            <Image
                source={require('../../assets/Logo.png')}
                style={{width:100, height:100}}
                resizeMode="contain"
            />
            <Text style={{fontSize:25, marginBottom:15, color:'#fff', fontWeight:'bold', paddingHorizontal:20}}>
                Control Cash
            </Text>
            <Text style={{fontSize:18, marginTop:8, color:'#fff'}}>
                Bem Vindo
            </Text>
            <Text 
                style={{fontSize:17, marginBottom:15, color:'#fff', fontWeight:'bold', paddingHorizontal:20}}
                numberOfLines={1}
            >
                {user && user.name}
            </Text>
        </View>
        <DrawerItemList {...props}/>
        <DrawerItem 
            {...props}
            label="Sair da Conta"
            onPress={()=> signOut()}
            style={{backgroundColor:'#dcdcdc'}}
            labelStyle={{color:'#EB455F', fontWeight:'bold'}}
        />
    </DrawerContentScrollView>
  );
}