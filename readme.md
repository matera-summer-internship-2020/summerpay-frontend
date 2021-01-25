# Manual Técnico do App

## Comandos utilizados

Os seguintes comandos são relacionados ao aplicativo mobile e devem ser executados em um terminal no diretório raiz do projeto summerpay.

- **yarn** para instalar as dependências.
- **yarn install** igual ao comando _yarn_ acima para instalar as dependências.
- **yarn android** para instalar a aplicação em modo de depuração em algum dispositivo conectado
- **yarn start** para subir o servidor react local.
  - deve ser mantido em execução no terminal durante a depuração

## Passo a Passo para a instalação e execução em modo de depuração

- Rodar **yarn** ou **yarn install** para instalar as dependências
- Rodar **yarn android** para instalar a aplicação em modo de depuração em algum dispositivo conectado
- Rodar **yarn start** para subir o servidor react local

## Passo a Passo para geração de um aplicativo em modo de release/produção

- Rodar **yarn** ou **yarn install** para instalar as dependências
- Rodar **yarn build** para gerar o apk (pacote instalável)
  - o apk será gerado na pasta _android/app/build/outputs/apk/release_
