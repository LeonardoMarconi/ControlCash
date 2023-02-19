import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    Message,
    ImageLogo, 
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogoutText
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

export default function Profile() {

    const {user, signOut} = useContext(AuthContext);
    const navigation = useNavigation();

 return (
    <Container>
        <Header title="Meu Perfil"/>
        <ImageLogo source={require('../../assets/Manage.png')}/>
        <Message>Hey, bem vindo de volta ...</Message>
        <Name numberOfLines={1}>
            {user.name}
        </Name>

        <NewLink onPress={()=> navigation.navigate('Registrar Movimentos')}>
            <NewText>Registrar Movimentações</NewText>
        </NewLink>

        <LogoutButton onPress={()=> signOut()}>
            <LogoutText>Sair da conta</LogoutText>
        </LogoutButton>
    </Container>
  );
}