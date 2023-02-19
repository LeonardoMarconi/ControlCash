import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #f0f4ff;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 14px;
    padding: 12px;
`;

export const TipoText = styled.Text`
    color:#fff;
    font-size: 16px;
    font-style: italic;
    margin-left: 4px;
`;

export const DescText = styled.Text`
    color:#121212;
    font-size: 16px;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#EB455F' : '#1F8A70'};
    padding-bottom: 4px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
    margin-bottom: 4px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const ValorText = styled.Text`
    color:#121212;
    font-size: 22px;
`;