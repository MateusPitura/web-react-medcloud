<h1 align="center"> 
  <p>Patient Management</p> 
</h1> 

<p> 
  <img src="https://img.shields.io/badge/Release-May%202024-green" alt="Badge da data de lançamento: Maio de 2024">  
  <img src="https://img.shields.io/badge/Status-Closed-brightgreen" alt="Badge do status: fechado">  
</p> 

> :checkered_flag: Este projeto está finalizado :checkered_flag:  

## Descrição 

Este sistema para gerenciamento de pacientes é uma aplicação cliente-servidor, na qual o cliente feito em React se comunica com o servidor desenvolvido em Node. Para persistência de dados foi utilizado o Firebase, da Google. A aplicação ainda
conta com integração com o ViaCEP e paginação de resultados

Para alguns componentes, como o campo de busca e o controle da paginação, foi utilizado o pacote Material UI. Além disso, foi utilizado o pacote Moment para manipulação de dadas e react-toastify para exibição dos Toasts

## Índice 

- [Funcionalidades](#funcionalidades) 
- [Como executar](#como-executar) 
- [Tecnologias usadas](#tecnologias-usadas) 
- [Autores](#autores) 

## Funcionalidades 

:fire: **Firebase:** para a persistência dos dados foi usado o sistema de banco de dados Firestore, um recurso do Firebase, o qual é mantido pela Google 

:mailbox_with_mail: **ViaCEP:** para a validação dos CEPs foi utilizado a API do ViaCEP 

:page_with_curl: **Paginação:** os dados são carregados em páginas

https://github.com/MateusPitura/development-challenge-nine/assets/119008106/de1bda45-19ab-47ba-b434-d59fb005c52c

## Como executar 

**Para devs | cliente:** 

1. Clone o repositório

2. `npm install` 

3. `npm start`

**Para devs | servidor:** 

1. Clone o repositório

2. `npm install`

3. No arquivo `server.js` altere o caminho da `key.json` (uma chave privada fornecida pelo Firebase para conexão) no trecho de código `const credentials = require("../../key.json")`

4. `npm start`

## Tecnologias usadas 

:heavy_check_mark: React 

:heavy_check_mark: Node 
 
:heavy_check_mark: Firebase  

## Autores 

| Mateus Pitura | 
|------| 
| <p align="center"><img src="https://user-images.githubusercontent.com/119008106/227821967-fac62c31-0d62-485b-829e-ef56c033e21a.jpeg" width="100" height="100"></p> | 
| <a href="https://www.linkedin.com/in/mateuspitura/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"> |
