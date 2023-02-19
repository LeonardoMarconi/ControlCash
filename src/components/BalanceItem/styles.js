import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #fff;
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 14px;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    padding-left: 14px;
    height: 150px;
    border: ${props => props.bg } solid 2px;
`;

export const Label = styled.Text`
    color: ${props => props.bg };
    font-size: 22px;
    font-weight: bold;
    align-items: center;
`;

export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 35px;
    color: ${props => props.bg };
`;