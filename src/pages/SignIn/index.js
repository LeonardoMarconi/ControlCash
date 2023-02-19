import React, {useState, useContext} from 'react';
import { Platform , Modal, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import {
  Background, 
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText, 
  Link, 
  LinkText,
  Titulo,
  Subtitulo,
  ImgMsg,
  BackgroundMsg
} from './styles';

import SignUp from '../SignUp';

export default function SignIn() {
  const navigation = useNavigation();
  const {signIn, loadingAuth, user, failAuth} = useContext(AuthContext);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [visibilyModal, setVisibilyModal] = useState(false);

  function handleLogin(){
    if(email === '' || password === ''){
      setVisibilyModal(true);
    }
    signIn(email, password);
  }

 return (
  <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding':''}
        enabled
      >
        <Logo
          source={require('../../assets/Logo.png')}
        />
        <Titulo>Control Cash</Titulo>
        <Subtitulo>Faça seu Login</Subtitulo>
        <AreaInput>
          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Digite sua Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#121212"/>
            ): (
              <SubmitText>Acessar</SubmitText>
            )
          }
          
        </SubmitButton>
        <Link onPress={()=> navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
      <Modal
          animationType={'slide'}
          transparent={false}
          visible={visibilyModal}
          onRequestClose={() => {
            setVisibilyModal(false);
          }}
        >

          <BackgroundMsg>
            <Container>
              <ImgMsg
                source={require('../../assets/Sorry.png')}
              />
              <Subtitulo>Ops... Parece que alguns campos estão vazios ou preenchidos incorretamente !!!</Subtitulo>
              <SubmitButton
                onPress={() => {
                  setVisibilyModal(false);
                }}
              >
                  <SubmitText>Fechar</SubmitText>
              </SubmitButton>
            </Container>
          </BackgroundMsg>
        </Modal>
  </Background>
  );
}