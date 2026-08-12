# Inventory API

Projeto de prática para consolidar o conceito de relacionamento **1 para N** (`hasMany` / `belongsTo`) no Sequelize, aplicado a um contexto de inventário: categorias e produtos.

## Contexto

Esse projeto foi construído de forma independente, logo após aprender o conceito de relacionamento entre tabelas em um projeto anterior (`task-api`, com Usuários e Tarefas). A ideia foi replicar o mesmo raciocínio — modelagem, associação entre models e chave estrangeira — em um domínio diferente, sem apoio direto, como forma de validar o aprendizado.

## Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- MySQL

## Modelagem

```
Category (1) → hasMany → Product (N)
```

- Uma **categoria** pode ter vários **produtos**.
- Cada **produto** pertence a uma única **categoria**, referenciada pela chave estrangeira `categoryId`.

## Estrutura do projeto

```
backend/
├── controllers/
├── db/
│   └── conn.js
├── models/
│   ├── associations.js   # Configuração do relacionamento hasMany/belongsTo
│   ├── category.js
│   └── product.js
├── routes/
│   └── inventoryRoutes.js
├── .env
├── .gitignore
└── index.js
```

## Status

Este projeto cobre a modelagem de dados e o relacionamento entre tabelas (validado via banco de dados). A camada de controllers/rotas não foi finalizada, já que o foco principal era consolidar o conceito de relacionamento — não entregar uma API completa.

## Autor

Marcelo Ursulino
