import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
    flex:1;
    background-color: #f0f4ff;
    display: flex;
`;

export const ListBalance = styled.FlatList`
    max-height: 190px;
`;

export const TextSaudacao = styled.Text`
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #0F4C75;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 4px;
    width: 100% ;
    padding: 10px;
`;

export const TextDados = styled.Text`
    font-size: 16px;
    margin-bottom: 15px;
    color: #121212;
    margin-top: 14px;
`;

export const Area = styled.View`
    background-color: #FFB100;
    border-top-left-radius: 20px;
    border-top-right-radius:20px;
    flex-direction: row;
    padding-left: 14px;
    padding-right: 14px;
    align-items: baseline;
    padding-top: 10px;
`;
export const ViewMsg = styled.View`
    background-color: #FFB100;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    flex-grow: 1;
`;

export const Title = styled.Text`
    margin-left: 14px;
    color: #121212;
    margin-bottom: 14px;
    font-weight: bold;
    font-size: 18px;
`;

export const TitleButton = styled.Text`
    font-size: 12px;
    color: #121212;
    font-weight: bold;
`;

export const List = styled.FlatList`
    flex: 1;
    background-color: #FFB100;
`;