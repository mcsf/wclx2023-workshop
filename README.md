# WordCamp Lisboa 2023

## Workshop: Cria o teu próprio bloco Gutenberg

Este repositório serve de suporte para o workshop [_Cria o teu próprio bloco Gutenberg_](https://lisboa.wordcamp.org/2023/session/cria-o-teu-proprio-bloco-gutenberg/), permitindo aos participantes instalar todas as dependências necessárias ao workshop antes da sessão, evitando assim o clássico problema em que saturamos a ligação à Internet da sala.

### Instalação: Pré-requisitos

No nosso workshop, precisaremos não só de um servidor com um site WordPress instalado, como também de um ambiente de desenvolvimento baseado em Node.js. Node.js é o _runtime_ JavaScript que dá acesso ao ecossistema de pacotes [NPM](https://npm.org) (incluindo os pacotes WordPress) e que permite transformar o nosso projecto num _plugin_ (fazer "build").

As instruções seguintes supõem que já tens à disposição um editor de texto e um terminal.

#### Node.js

Verifica se está instalado no sistema usando o terminal:

```sh
node --version  # v18.x no mínimo
```

Se não estiver instalado, pode ser instalado directamente a partir de [nodejs.org](https://nodejs.org). Em alternativa, se estiver presente uma versão desactualizada que precises de manter, podes usar um gestor de versões como o [NVM](https://github.com/nvm-sh/nvm) para instalar a versão correcta com o comando `nvm use 18`.

#### Docker

Há muitas ferramentas para gerir servidores de teste. Por uma questão de eficiência no workshop, vamos usar o Docker. Para tal, instala o [Docker Desktop](https://www.docker.com/products/docker-desktop/).

#### Git

Esta já deve ser uma ferramenta de todos os dias. Se não é o teu caso, verifica que existe no sistema:

```sh
git --version
```

Se não estiver, instala a partir do [site oficial](https://git-scm.com/downloads).

### Instalação: Repositório do workshop

Vamos usar um pequeno projecto Node como ponto de partida. Assim, teremos todas as dependências já instaladas localmente durante o workshop. No mundo real, com uma ligação à Internet fiável, esta etapa seria muito mais fácil — veremos isso no workshop.

Atenção: Nos próximos passos criaremos servidores de desenvolvimento nos portos HTTP 9000 e 9001. Se precisares de os mudar, edita o ficheiro `.wp-env.json` antes de prosseguir.

```sh
# Clona o repositório do workshop para um local conveniente
git clone git@github.com:mcsf/wclx2023-workshop.git
# ou, se não funcionar: git clone https://github.com/mcsf/wclx2023-workshop.git

# Entra no directório e instala as dependências Node
cd wclx2023-workshop
npm install

# Verifica que o sistema é capaz de compilar o projecto
npm run build

# Cria sites de desenvolvimento e teste usando o pacote `@wordpress/env`. Isto
# força o sistema a puxar as imagens Docker necessárias e a última versão
# estável do WordPress. Uma vez os contentores Docker criados, pára os
# contentores.
npm run env start
npm run env stop
```
