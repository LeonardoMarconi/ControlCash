# Control Cash 💲

App Control Cash

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://facebook.github.io/react-native/)
- [Styled Components](https://www.styled-components.com/)

## 💻 Projeto

O ControlCash é um app de controle financeiro, sendo multiplo usuário, protegido por usuário e senha com autenticação JWT, utilizando tecnologias do React-Native (Axios, React Navigation, Styled-Components, etc).
Esse app consome a API REST desenvolvida por [Matheus Fraga](https://github.com/devfraga/backend-financas). 
Ao clonar o projeto deve rodar :
```sh
cd ControlCash
npm install
```
Após terminar a instalação, rodar (O Emulador, ou dispositivo deve estar configurado previamente):
```sh
npx react-native run-android
```
Em paralelo deve-se clonar o projeto [Finanças APP](https://github.com/devfraga/backend-financas), e executar os comandos:
```sh
cd backend-financas
npx prisma migrate dev
```
Após isso, rode o backend:
```sh
npm run dev
```

## 📷 Screenshots  
<div style="flex-direction: row;">
<video controls autoplay>
  <source src="https://drive.google.com/file/d/1ajISPm97yANrvN_YDWtB-F6FdEanZn8D/view?usp=sharing" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>
