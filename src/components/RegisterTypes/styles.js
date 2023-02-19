import styled from 'styled-components/native'

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    background-color: ${props => props.checked ? '#fff' : '#dcdcdc'};
    width: 47%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    margin-bottom: 14px;
    border-radius: 4px;
    border-width: 1.5px;
    border-color: ${props => props.checked ? '#0F4C75' : '#dcdcdc'};
`;

export const RegisterLabel = styled.Text`
    margin-left: 8px;
    font-size: 17px;
`;