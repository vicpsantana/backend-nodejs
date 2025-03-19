import connection from './connection.js';

export async function inserir(turma) {
  const comando = `
    INSERT INTO tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  let [info] = await connection.query(comando, [
    turma.turma, 
    turma.curso, 
    turma.anoLetivo, 
    turma.capacidade, 
    turma.ativo
  ]);

  return info.insertId;
}

export async function alterar(id, turma) {
  const comando = `
    UPDATE tb_turma
       SET nm_turma = ?,
           ds_curso = ?,
           nr_ano_letivo = ?,
           qtd_capacidade = ?,
           bt_ativo = ?
     WHERE id_turma = ?
  `;
  
  let [info] = await connection.query(comando, [
    turma.turma, 
    turma.curso, 
    turma.anoLetivo, 
    turma.capacidade, 
    turma.ativo, 
    id
  ]);

  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM tb_turma
     WHERE id_turma = ?
  `;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}

export async function listar() {
  const comando = `
    SELECT  
      id_turma as id,
      nm_turma as turma,
      ds_curso as curso,
      nr_ano_letivo as anoLetivo,
      qtd_capacidade as capacidade,
      bt_ativo as ativo
    FROM tb_turma
  `;

  let [registros] = await connection.query(comando);
  return registros;
}
