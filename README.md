# API listar Pokemón

Essa API de formato Rest é uma demonstração de como usar rotas express e capturando elementos endpoint trazidos pela rota, usando capturador de erro status com TRY e CATCH(ERRO), assimilando funções assincronas com async e await, aguardando o retorno de promise.

## Clonar

Como clonar o projeto:

```bash
 https://github.com/StefanyBorin/Api-Pokemon

```

Após pode ser feito a instalação do express usando o comando no terminal:

```bash
  npm install express
```

E também usaremos para listar os pokémons a biblioteca Utils-Playground:

```bash
  npm install utils-playground
```

Para manter o servidor executando precisa intalar o nodemon:

```bash
  npm install nodemon
```

Caso não tenha no script package.json o script pode adicionar para inicializar o servidor:

```bash
  "scripts": {
        "dev": "nodemon ./src/index.js"
    }
```

É preciso que instale o insomnia caso não tenha para executar o testes da API.

```http
  https://insomnia.rest/download
```

## Inicializando e encerrando o servidor

No terminal do projeto, de inicio ao servidor para ter acesso ao localhost porta 3000.

```bash
  npm run dev
```

Terminando o teste no Insomnia é necessario encerrar o servidor usando `Crl + C` e selecionando opção `s` e enter.

![Start servidor](gif-start-servidor.gif)

## Criando coleção no Insomnia

No insomnia crie uma nova coleção e rotas GET para acesso ao servidor local. Usando os parametros e instruções de instalação acima.

### Endereço a ser inserido no insomnia listar todos pokemons.

```http
  http://localhost:3000/pokemon?pagina=2
```

### Endereço a ser inserido no insomnia para detalhar o pokemon por ID ou Nome.

```http
  http://localhost:3000/pokemon/1
```

![insomnia](gif-insomnia.gif)

## API Rest Verbos

#### GET listar

```http
  GET /pokemon?pagina=
```

| Parametros | Tipo     | Descrição                                             |
| :--------- | :------- | :---------------------------------------------------- |
| `1`        | `number` | **Required**. Lista os pokemons que estao na pagina 1 |

#### GET descrição

```http
  GET /pokemon/idOuNome
```

| Parametro   | Tipo     | Descrição                                         |
| :---------- | :------- | :------------------------------------------------ |
| `1`         | `number` | **Required**. Detalha o pokemon que esta com ID 1 |
| `bulbasaur` | `string` | **Required**. Detalha o pokemon pelo nome         |

## Duvidas e contribuições:

Duvidas e contruibuições serão muito bem vindas, fico a disposição. Pode me contatar pelo link:

```http
  https://www.linkedin.com/in/stefany-borin/
```
