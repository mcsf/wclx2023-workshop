## WordCamp Lisboa 2023

### Workshop: Cria o teu próprio bloco Gutenberg

Este repositório serve de suporte para o workshop [_Cria o teu próprio bloco Gutenberg_](https://lisboa.wordcamp.org/2023/session/cria-o-teu-proprio-bloco-gutenberg/), permitindo aos participantes instalar todas as dependências necessárias ao workshop antes da sessão, evitando assim o clássico problema em que saturamos a ligação à Internet da sala.

#### Instalação: Pré-requisitos

* Node.js, versão LTS ou superior (>=18), instalável via [nodejs.org](https://nodejs.org) ou gestores de versões tais como Volta ou NVM
* Docker Desktop, instalável via [docker.com](https://www.docker.com/products/docker-desktop/)
* Git

Confirmar a presença destes na consola:

```sh
node --version    # v18.x no mínimo
npm --version     # 7 no mínimo
docker --version
git --version
```

#### Instalação: Repositório do workshop

* Vamos usar um pequeno projecto Node como ponto de partida. Assim, teremos todas as dependências já instaladas localmente durante o workshop.
* Estes passos serão explicados durante o workshop.
* No mundo real, com uma ligação à Internet fiável, esta etapa é muito mais fácil.

Atenção: Nos próximos passos criaremos servidores de desenvolvimento nos portos HTTP 9000 e 9001. Se precisares de os mudar, edita o ficheiro `.wp-env.json` antes de prosseguir.

```sh
# Clona o repositório do workshop para um local conveniente
git clone git@github.com:mcsf/wclx2023-workshop.git
# ou: git clone https://github.com/mcsf/wclx2023-workshop.git

# Entra no directório e instala as dependências Node
cd wclx2023
npm install

# Cria sites de desenvolvimento e teste usando o pacote `@wordpress/env`. Isto
# força o sistema a puxar as imagens Docker necessárias e a última versão
# estável do WordPress. Uma vez os contentores Docker criados, pára os
# contentores.
npm run env start
npm run env stop
```
