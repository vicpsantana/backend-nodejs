import { Router } from 'express';
import { listar, inserir, alterar, remover } from '../repository/turmaRepository.js';

const router = Router();

router.get('/turma', async (req, res) => {
  let registros = await listar();
  res.send(registros);
});

router.post('/turma', async (req, res) => {
  let turma = req.body;
  let novoId = await inserir(turma);
  res.send({ novoId });
});

router.put('/turma/:id', async (req, res) => {
  let id = req.params.id;
  let turma = req.body;
  let linhasAfetadas = await alterar(id, turma);
  res.send({ linhasAfetadas });
});

router.delete('/turma/:id', async (req, res) => {
  let id = req.params.id;
  let linhasAfetadas = await remover(id);

  if (linhasAfetadas == 0) {
    return res.status(404).send({ erro: 'Registro não encontrado.' });
  }

  res.send({ linhasAfetadas });
});

export default router;
