import React, {useState} from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { 
    Container, 
    ButtonFilterText, 
    ModalContent, 
    ButtonFilter
} from './styles';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({setVisible, handleFilter}) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setmarkedDates] = useState({});

    function handleOnDayPress(date){
        setDateNow(new Date(date.dateString));
        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor:'#FFB100',
            textColor:'#121212'
        }

        setmarkedDates(markedDay);
    }

    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible();
    }

 return (
    <Container>
        <TouchableWithoutFeedback onPress={setVisible}>
            <View style={{flex:1}}></View>
        </TouchableWithoutFeedback>
        <ModalContent>
            <Calendar
                onDayPress={handleOnDayPress}
                markedDates={markedDates}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor:'#ff0000',
                    selectedDayBackgroundColor:'#FFB100',
                    selectedDayTextColor:'#121212'
                }}
            />
            <ButtonFilter onPress={handleFilterDate}>
                <ButtonFilterText>Filtrar</ButtonFilterText>
            </ButtonFilter>
        </ModalContent>
    </Container>
  );
}