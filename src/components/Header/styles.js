import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #0F4C75;
    border-bottom-left-radius:20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 15px;
    width: 100% ;
    max-height: 80px;
    padding: 15px;
`;

export const Title = styled.Text`
    font-size: 22px;
    margin-left: 8px;
    color: #FFB100;
`;

export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;