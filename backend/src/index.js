/*
* Metodos HTPP
*
* GET: Buscar informações no back-end
* POST: Criar informações no back-end
* PUT: Alterar informações no back-end
* DELETE: Deletar informações no back-end
*/

/**
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
* Route Params: Parâmtros utilizados para identificar recursos
* Request Body: Corpo da requisição utilizado, para cirar ou alterar recursos
**/

/** 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 * **/

/**
 * DRIVER: SELECT * FROM users
 * Query Builder: Table ('users').select('*').where()
 */
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);