import React, {useContext, useState} from 'react';
import { Platform, ActivityIndicator, Modal} from 'react-native';

import {
  Background, 
  Logo,
  Container,  
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Subtitulo,
  ImgMsg,
  BackgroundMsg
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

  const {signUp, loadingAuth} = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [visibilyModal, setVisibilyModal] = useState(false);

  function handleSignUp(){
    if(nome === '' || email === '' || password === ''){
      setVisibilyModal(true);
    }
    signUp(email,password,nome);
  }

 return (
   <Background>
    <Container
      behavior={Platform.OS === 'ios' ? 'padding':''}
      enabled
    >
      <Logo
          source={require('../../assets/Form.png')}
        />
        <Subtitulo> Faça seu Cadastro </Subtitulo>
        <AreaInput>
          <Input
            placeholder="Digite seu Nome"
            value={nome}
            onChangeText={(text)=> setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={(text)=> setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Digite sua Senha"
            value={password}
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.7} onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#121212"/>
            ):(
              <SubmitText>Cadastrar</SubmitText>
            )
          }
          
        </SubmitButton>
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