import express from 'express';
import routes from './database/routes';

const app = express();

app.use(express.json());

// http://localhost:3333/users
// http://localhost:3333/contacts

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização e um registro (request.body)
// Route Params: Identificar qual recurso eu quero atualizar ou deletar (request.params)
// Query Params: Paginação, filtros, ordenação (request.query)

app.use(routes);

app.listen(3434);