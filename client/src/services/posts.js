import api from './api-helper';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

export const getOnePost = async (user_id, id) => {
  const resp = await api.get(`/users/${user_id}/posts/${id}`);
  return resp.data;
}

export const postPost = async (user_id, postData) => {
  const resp = await api.post(`/users/${user_id}/posts`, { post: postData })
  return resp.data;
}

export const putPost = async (user_id, id, postData) => {
  const resp = await api.put(`/users/${user_id}/posts/${id}`, { post: postData })
  return resp.data;
}

export const deletePost = async (user_id, id) => {
  const resp = await api.delete(`/users/${user_id}/posts/${id}`);
  return resp
}