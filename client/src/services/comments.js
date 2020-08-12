import api from './api-helper';

export const getAllComments = async (user_id, post_id) => {
  const resp = await api.get(`/users/${user_id}/posts/${post_id}/comments`);
  return resp.data;
};

export const getOneComment = async (user_id, post_id, id) => {
  const resp = await api.get(`/users/${user_id}/posts/${post_id}/comments/${id}`);
  return resp.data;
}

export const postComment = async (user_id, post_id, commentData) => {
  const resp = await api.post(`/users/${user_id}/posts/${post_id}/comments`, { comment: commentData })
  return resp.data;
}

export const putComment = async (user_id, post_id, id, commentData) => {
  const resp = await api.put(`/users/${user_id}/posts/${post_id}/comments/${id}`, { comment: commentData })
  return resp.data;
}

export const deleteComment = async (user_id, post_id, id) => {
  const resp = await api.delete(`/users/${user_id}/posts/${post_id}/comments/${id}`);
  return resp
}