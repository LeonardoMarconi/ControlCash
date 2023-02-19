import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #0F4C75;
`;

export const BackgroundMsg = styled.View`
    flex: 1;
    background-color: #3282B8;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 15px;
`;

export const ImgMsg = styled.Image`
    width: 80%;
    height: 50%;
    margin-bottom: 15px;
`;

export const Titulo = styled.Text`
    color:#fff;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 25px;
`;

export const Subtitulo = styled.Text`
    color:#fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 35px;
`;

export const AreaInput = styled.View`
   flex-direction: row;
`;

export const Input = styled.TextInput`
   background-color: #fff;
   width: 90%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #121212;
   margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
   background-color: #FFB100;
   width: 90%;
   height: 45px;
   border-radius: 8px;
   margin-top: 10px;
   align-items: center;
   justify-content: center;
`;

export const SubmitText = styled.Text`
   font-size: 20px;
   color: #121212;
   font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const LinkText = styled.Text`
   color:#ffffff;
`;