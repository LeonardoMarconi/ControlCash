import React from 'react';
import { Alert, TouchableWithoutFeedback, Image} from 'react-native';

import { 
    Container, 
    TipoText, 
    DescText,
    IconView,
    Tipo,
    ValorText 
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({data, deleteItem}) {
    
    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'Voce tem certeza que deseja deletar esse registro ?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

 return (
   <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
    <Container> 
        <Tipo>
            <IconView tipo={data.type}>
                <Icon 
                    name={data.type === 'despesa' ? "arrow-down-circle" : "arrow-up-circle"}
                    size={20} 
                    color="#fff" 
                />
                <TipoText>{data.type}</TipoText>
            </IconView>
        </Tipo>
        <DescText>
            {data.description}
        </DescText>
        <ValorText>
            {data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </ValorText>
    </Container>
   </TouchableWithoutFeedback>
  );
}