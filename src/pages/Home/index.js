import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconList from 'react-native-vector-icons/Feather';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import BalanceItem from '../../components/BalanceItem';
import HistoricoList from '../../components/HistoricoList';
import CalendarModal from '../../components/CalendarModal';

import { 
  Background,
  ListBalance,
  TextSaudacao,
  Area,
  Title,
  TitleButton,
  List,
  ViewMsg,
  TextDados
} from './styles';

import api from '../../services/api';

import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState('');
  const [dateMovements, setDateMovements] = useState(new Date());
  const [saudacao, setSaudacao] = useState('');
  const {user} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    let isActive = true;

    function getSaudacao(){

      let dataHora = new Date();
      let xHora = dataHora.getHours();

      if (xHora >= 0 && xHora <12) {setSaudacao('Bom Dia, ')}
      if (xHora >= 12 && xHora < 18) {setSaudacao('Boa Tarde, ')}
      if (xHora >= 18 && xHora <= 23) {setSaudacao('Boa Noite, ')}

    }

    async function getMovements(){
      
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate,'dd/MM/yyyy');

      const receives = await api.get('/receives',{
        params:{
          date: dateFormated
        }
      })

      const balance = await api.get('/balance',{
        params:{
          date: dateFormated
        }
      })

      if(isActive){
        setMovements(receives.data);
        setListBalance(balance.data);
      }

    }
    getSaudacao();
    getMovements();
    return () => isActive = false;

  },[isFocused, dateMovements])

  async function handleDelete(id){
    try {
      await api.delete('receives/delete',{
        params:{
          item_id:id
        }
      })

      setDateMovements(new Date());
      
    } catch (error) {
      console.log(error);
    }
  }

  function filterDateMovements(dateSelected){
    setDateMovements(dateSelected);
  }

 return (
   <Background>
    <Header title="Minhas Movimentações"/>
    <TextSaudacao>{saudacao}{user.name}!</TextSaudacao>
    <ListBalance
      data={listBalance}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.tag}
      renderItem={({item}) => (<BalanceItem data={item}/>)}
    />

    <Area>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="event" color="#121212" size={30} />
        <TitleButton>Filtro</TitleButton>
      </TouchableOpacity>
      <Title>{format(dateMovements,'dd/MM/yyyy')} - Últimas Movimentações </Title>
    </Area>
    {
      movements =='' ? (
        <ViewMsg>
        <IconList name="layers" color="#EB455F" size={60} />
        <TextDados>Não há movimentos registrados... </TextDados>
        </ViewMsg>
      ):
      (
        <List 
          data={movements}
          keyExtractor={item => item.id}
          renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDelete}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBotton: 20}}
        />
      )
    }
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <CalendarModal
        setVisible={() => setModalVisible(false)}
        handleFilter={filterDateMovements}
      />
    </Modal>

   </Background>
  );
}