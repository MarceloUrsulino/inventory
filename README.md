# Inventory 

Projeto de prática de relacionamento **1 para N** (`hasMany` / `belongsTo`) no Sequelize, aplicado a categorias e produtos.

Construído de forma independente após aprender o conceito no projeto `task-api`, como forma de validar o aprendizado em um contexto diferente.

## Tecnologias

Node.js · Express · Sequelize · MySQL

## Modelagem

```
Category (1) → hasMany → Product (N)
```

Uma categoria tem vários produtos; cada produto pertence a uma categoria, via chave estrangeira `categoryId`.

## Status

Modelagem e relacionamento entre tabelas concluídos e validados no banco. Controllers e rotas não foram finalizados — o foco do projeto foi consolidar o conceito de relacionamento, não entregar uma API completa.

## Autor

Marcelo Ursulino
