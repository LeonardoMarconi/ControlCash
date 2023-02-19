import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import { RegisterContainer, RegisterTypeButton, RegisterLabel } from './styles';

import Feather from 'react-native-vector-icons/Feather';

export default function RegisterTypes({type, sendTypeChanged}) {
    const [typeChecked, setTypeChecked] = useState(type);

    function changeType(name){
        if( name === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita');
            Keyboard.dismiss();
        }
        else{
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
            Keyboard.dismiss();
        }
    }

 return (
    <RegisterContainer>
        <RegisterTypeButton 
            checked={typeChecked === 'receita' ? true : false} 
            onPress={() => changeType('receita')}
        >
            <Feather name="arrow-up-circle" size={25} color="#1F8A70"/>
            <RegisterLabel>Receita</RegisterLabel>
        </RegisterTypeButton>

        <RegisterTypeButton 
            checked={typeChecked === 'despesa' ? true : false}
            onPress={() => changeType('despesa')}
        >
            <Feather name="arrow-down-circle" size={25} color="#EB455F"/>
            <RegisterLabel>Despesa</RegisterLabel>
        </RegisterTypeButton>
    </RegisterContainer>
  );
}