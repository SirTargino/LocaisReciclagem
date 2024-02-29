
# Visão Geral


Este projeto consiste em uma API desenvolvida em JavaScript/node.js, e tem como objetivo auxiliar usuários a encontrarem centros de reciclagem próximos de suas casas, proporcionando sustentabilidade por meio da tecnologia ♻️




## Tecnologias

**Back-end:** node.js, Express

**Banco de Dados**: MySQL


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/SirTargino/LocaisReciclagem
```

Entre no diretório do projeto

```bash
  cd LocaisReciclagem
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Acesse o projeto:
```bash
  http://localhost:4000
```

Atenção: Certifique-se de que a conexão com o banco de dados foi estabelecida. Em caso de erro, verifique o arquivo **database.js** e faça as alterações necessárias! 
## Documentação da API
#### Criando um Local de Reciclagem

```http
  POST/criarlocal
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `local_name` | `string` | **Obrigatório**. O nome do ponto de reciclagem |
| `informacoes` | `text` | Informações como número e telefone do local |
| `cep` | `string` | **Obrigatório**. O CEP da rua do local |

#### Obtendo todos os locais

```http
  GET/todoslocais
```

#### Obtendo locais de reciclagem por cidade

```http
  GET/locaisporcidade
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cidade` | `string` | **Obrigatório**. Cidade do local de reciclagem desejado |

#### Editando locais de reciclagem

```http
  PUT/editarlocal/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID do local a ser editado  |
| `newlocal_name` | `string` | **Obrigatório**. Novo nome do local  |
| `newinformacoes` | `text` | Novas informações sobre o local  |
| `newcep` | `string` | **Obrigatório**. Novo CEP do local  |

#### Excluindo locais de reciclagem

```http
  PUT/excluirlocal/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID do local a ser excluído  |


## Aprendizados

Coloquei em prática os conhecimentos necessários para criação de CRUD com ORM's, além de organização de código e fetch com API's externas.

Aprendi que a poluição plástica é um grave problema e que suas consequências poderão afetar a humanidade em um futuro muito próximo. Nós, humanos, somos os responsáveis por esse problema, e também somos responsáveis por solucioná-lo.

A tecnologia pode ser uma grande aliada na resolução dessas situações. Com ela, podemos divulgar informações sobre sustentabilidade, que auxiliam a população a compreenderem a importância da preservação do meio ambiente.

