# Desafio 01 da Maratona FullCycle 2.0

# Description

# Desafio 1

## Instalação e preparação do ambiente

O primeiro passo para que você consiga acompanhar muito bem a Maratona é ter o seu ambiente de desenvolvimento pronto para conseguir simular tudo que te apresentaremos nos próximos vídeos. Nesse ponto o que você deve fazer como desafio será:

1. Instalar o Node.js em seu computador
2. Criar um webserver que escuta na porta 3000
3. Ao acessar o webserver, a seguinte mesagem deverá aparecer: "Maratona Full Cycle 2.0"
4. Instalar o Docker em seu computador
5. Gerar uma imagem Docker dessa aplicação a partir da imagem node:14.1-alpine.
6. Publicar a imagem no Dockerhub
7. Quando executarmos: docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem deveremos ver a mensagem na porta 3000 de nosso browser
8. Postar nos comentários do vídeo a URL da sua imagem para que possamos executar

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ node src/index.js
```  

## Support

### Criando a imagem e realizando deploy para o DockerHub
```
$ docker build -t diegoclair/desafio01 -f .\Dockerfile .
$ docker push diegoclair/desafio01
```

### Executando o container a partir da imagem do DockerHub
```
$ docker pull diegoclair/desafio01
$ docker run -p 3000:3000 diegoclair/desafio01
```