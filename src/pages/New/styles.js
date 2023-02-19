import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Input = styled.TextInput`
   height: 50px;
   width: 90%;
   background-color: #ffffff;
   font-size: 17px;
   padding: 0 8px;
   margin-bottom: 14px;
   border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #FFB100;
    border-radius: 4px;
    margin-top: 5px;
`;

export const SubmitText = styled.Text`
    color:#121212;
    font-size: 21px;
    font-weight: bold;
`;

export const SafeView = styled.SafeAreaView`
    margin-top: 14px;
    align-items: center;
`;

export const ImageLogo = styled.Image`
    width: 220px;
    height: 220px;
    margin-bottom: 15px;
`;

export const BackgroundMsg = styled.View`
    flex: 1;
    background-color: #3282B8;
    align-items: center;
    justify-content: center;
`;

export const ImgMsg = styled.Image`
    width: 80%;
    height: 50%;
    margin-bottom: 15px;
`;

export const Subtitulo = styled.Text`
    color:#fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 35px;
    padding: 15px;
    align-items: center;
`;