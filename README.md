<h1> Portfolio-Cypress (Curso da Alura) </h1>

Este repositório faz parte do meu aprendizado pessoal sobre testes automatizados usando Cypress.

## Sobre o Projeto

Este projeto foi criado como parte de um curso onde estou aprendendo os conceitos básicos e avançados de automação de testes com Cypress. 

## Como Começar

### 1. Instalação do `Node.js e npm`

O Node.js, geralmente chamado de Node, é um ambiente de execução para JavaScript do lado do servidor.
NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele é usado para instalar, compartilhar e gerenciar as dependências dos projetos JavaScript.

Certifique-se de ter o Node.js instalado.
Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

No terminal, digite `node --version` ou `node -v -`. Caso retorne um número de versão, o Node.js já está instalado.

### 2. Opcional: `nvm-windows`

Se você deseja gerenciar diferentes versões do Node.js em seu sistema, pode considerar a instalação do `nvm-windows`. Este é um gerenciador de versões do Node.js para Windows, que permite alternar facilmente entre diferentes versões do Node.js. Baixe o `nvm-windows` [aqui](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe).

No CMD, digitar o comando `nvm install` junto da versão do Node que queremos instalar; no caso, a versão será a 16.13.1: `nvm install 16.13.1`
Podemos usar o seguinte comando para ver quais versões estão sendo utilizadas e qual está instalada no computador: `nvm ls`

### 3. Instalação do Cypress
Com o Node instalado e configurado, vamos instalar o Cypress. Acessando a [página oficial do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress), verificamos o seguinte comando para instalação:
```
npm install cypress --save-dev
```
Com a instalação concluída, posso executar o seguinte comando para ver o Cypress em execução:

```
npx cypress open
```
### 4. Instalação do Alurapic na Máquina
O próximo passo será instalar o [AluraPic](https://github.com/alura-cursos/alurapic/archive/refs/heads/main.zip) na nossa máquina. Para isso, utilizaremos o link disponibilizado na seção "Preparando o Ambiente" (em texto):

Volta para o CMD, limpa a tela e cola URL até alurapic: `cd C:\Users\Seuuser\Desktop\alurapic`, próximo passo é instalar de fato na máquia utilizando `npm install`.
Instalação concluída, utilizamos o comando `npm start` para realmente rodar localmente o projeto.  

### 5. Instalação do Alurapic na Máquina
Com a instalação concluída, ele informa que o projeto foi compilado.

Abrir http://localhost:4200/ para abrir no navegador

### 6. Crie um Projeto Cypress 

Dentro do terminal, usarei o comando `npx cypress open` para iniciar o Cypress e pressionar "Enter" para executar.
Na parte onde está escrito E2E (end-to-end) testing, escolheremos a opção `cypress\fixtures\example.json`.
Feito isso, clicamos no navegador desejado, como escolhi Chrome cliquei em "Start E2E Testing in Chrome".

Na tela "Create your first spec" criaremos um teste do zero ao clicar em "Create New Spec" e nomeares como XXXXX.cy.js. 
Após clicar em "Create spec", o framework exibe a estrutura do código que será criado dentro desse projeto. Após executar, abre um painel à esquerda onde podemos conferir que o teste passou. Além disso, o Cypress explica que o teste está fazendo uma visita para a URL example.cypress.io.

### 7. Instruções do Cypress 
Para saber mais sobre os primeiros passos de instalação e configuração, [clique aqui](https://docs.cypress.io/guides/getting-started/installing-cypress) para acessar a documentação oficial do Cypress, que descreve com mais detalhes algumas configurações avançadas por sistema operacional, bem como a utilização em contêineres e integração contínua.


# Outras infos - Alurapic

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 6.0.7.

### Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você modificar algum dos arquivos de origem.

### Estrutura de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use a flag `--prod` para uma construção de produção.

### Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Executando Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end via [Protractor](http://www.protractortest.org/).

### Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI use `ng help` ou consulte o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
