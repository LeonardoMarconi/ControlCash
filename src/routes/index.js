import React, {useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function routes() {
    const {signed, loading} = useContext(AuthContext);

  if(loading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'#0F4C75'}}>
        <ActivityIndicator size='large' color="#dcdcdc"/>
      </View>
    )
  }

 return (
   signed ? <AppRoutes/> : <AuthRoutes/>
  );
}