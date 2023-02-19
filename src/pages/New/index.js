import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, Modal, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { SafeView, Background, Input, SubmitButton, SubmitText, ImageLogo, BackgroundMsg, ImgMsg, Subtitulo } from './styles';

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';

import api from '../../services/api';

export default function New() {
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');
    const [message, setMessage] = useState('');
    const [img, setImg] = useState(require('../../assets/Sorry.png'));
    const [visibilyModal, setVisibilyModal] = useState(false);

    const navigation = useNavigation();

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null){
            setImg(require('../../assets/Sorry.png'));
            setMessage('Ops.... Verifique se todos os campos foram preenchidos...');
            setVisibilyModal(true);
            return;
        }
            Alert.alert(
                `Confirmando dados... \nDescrição: ${labelInput}`,
                `Tipo: ${type} - Valor R$ ${valueInput}`,
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel'
                    },
                    {
                        text: 'Continuar',
                        onPress: () => handleAdd()
                    }
                ]
            )
    }

    async function handleAdd(){
        Keyboard.dismiss();
        let valor = valueInput;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ".$1");

          if (valor.length > 6) {
              valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ",$1.$2");
          }
        if(valor === 'NaN') value = '';
        
        await api.post('/receive',{
            description:labelInput,
            value: Number(valor),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        setImg(require('../../assets/Saving.png'));
        setMessage(':) Sua movimentação foi registrada com sucesso !!!');
        setVisibilyModal(true);
    }

    function formatCurrencyBr(text){
      let valor = text;

      valor = valor + '';
      valor = parseInt(valor.replace(/[\D]+/g, ''));
      valor = valor + '';
      valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
      if(valor === 'NaN') setValueInput('');
      setValueInput(valor);
    }

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
   <Background>
    <Header title="Registrando Movimentações" />

    <SafeView>
        <ImageLogo
          source={require('../../assets/Custo.png')}
        />
        <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
        />
        <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => formatCurrencyBr(text)}
        />
        <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>
        <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
        </SubmitButton>
    </SafeView>
    <Modal
          animationType={'slide'}
          transparent={false}
          visible={visibilyModal}
          onRequestClose={() => {
            setVisibilyModal(false);
            setMessage('');
          }}
        >

          <BackgroundMsg>
            
              <ImgMsg
                source={img}
              />
              <Subtitulo>{message}</Subtitulo>
              <SubmitButton
                onPress={() => {
                  setVisibilyModal(false);
                }}
              >
                  <SubmitText>Fechar</SubmitText>
              </SubmitButton>
              <SubmitButton
                onPress={() => {
                  navigation.navigate('Home');
                  setVisibilyModal(false);
                }}
              >
                  <SubmitText>Voltar para Home</SubmitText>
              </SubmitButton>
            
          </BackgroundMsg>
        </Modal>
   </Background>
   </TouchableWithoutFeedback>
   
  );
}