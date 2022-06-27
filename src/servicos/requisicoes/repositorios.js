import api from '../api';

export async function pegarRepositoriosDoUsuario(id) {
  try {
    const resultado = await api.get(`/repos?postId=${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function salvarRepositoriosDoUsuario(postId, name, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      postId,
      name,
      data,
      id,
    });
    return 'sucessso';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}
