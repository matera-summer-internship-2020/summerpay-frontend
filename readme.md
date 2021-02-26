# SummerPay

[![Cover.png](https://i.postimg.cc/8PcrwYd3/Cover.png)](https://postimg.cc/56c02nRq)

## 

####	🚧  Em construção... 🚧

## Conteúdo
<!--ts-->
   * [Conteúdo](#conteúdo)
   * [Pré-requisitos](#pré-requisitos) 
   * [Manual Técnico do App](#manual-técnico-do-app)
      * [Comandos utilizados](#comandos-utilizados)
      * [Passo a Passo para a instalação e execução em modo de depuração](#passo-a-passo-para-a-instalação-e-execução-em-modo-de-depuração)
      * [Passo a Passo para geração de um aplicativo em modo de release ou produção](#passo-a-passo-para-geração-de-um-aplicativo-em-modo-de-release-ou-produção)
   * [Tecnologias](#tecnologias)
<!--te-->

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Android Studio](https://developer.android.com/studio), [IntelliJ IDEA](https://www.jetbrains.com/pt-br/idea/), e seguir os passos sobre o backend destes dois repositórios: [account-api](https://github.com/matera-summer-internship-2020/account-api) e [central-register-api](https://github.com/matera-summer-internship-2020/central-register-api). E ao rodar o [Manual Técnico do App](#manual-técnico-do-app), você precisará estar com as duas APIs ativas.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

## Manual Técnico do App

### Comandos utilizados

Os seguintes comandos são relacionados ao aplicativo mobile e devem ser executados em um terminal no diretório raiz do projeto summerpay.

- **yarn** para instalar as dependências.
- **yarn install** igual ao comando _yarn_ acima para instalar as dependências.
- **yarn android** para instalar a aplicação em modo de depuração em algum dispositivo conectado
- **yarn start** para subir o servidor react local.
  - deve ser mantido em execução no terminal durante a depuração

### Passo a Passo para a instalação e execução em modo de depuração

- Rodar **yarn** ou **yarn install** para instalar as dependências
- Rodar **yarn android** para instalar a aplicação em modo de depuração em algum dispositivo conectado
- Rodar **yarn start** para subir o servidor react local

### Passo a Passo para geração de um aplicativo em modo de release ou produção

- Rodar **yarn** ou **yarn install** para instalar as dependências
- Rodar **yarn build** para gerar o apk (pacote instalável)
  - o apk será gerado na pasta _android/app/build/outputs/apk/release_

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
