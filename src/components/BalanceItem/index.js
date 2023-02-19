import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }) {
    const labelName = useMemo(()=>{
        if(data.tag ==='saldo'){
            return{
                icon:'credit-card',
                label:'Saldo atual',
                color:'#3282B8'
            }
        }else if(data.tag === 'receita'){
            return{
                icon:'arrow-up-circle',
                label:'Entradas de Hoje',
                color:'#1F8A70'
            }
        }else{
            return{
                icon:'arrow-down-circle',
                label:'Saídas de Hoje',
                color:'#EB455F'
            }
        }

    },[data])

 return (
   <Container bg={labelName.color}>
<Label bg={labelName.color}> <Icon name={labelName.icon} size={30} color={labelName.color} />  {labelName.label} </Label>
    <Balance bg={labelName.color}>{data.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </Balance>
   </Container>
  );
}