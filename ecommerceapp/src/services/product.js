import apiCall from './api';

export const createProduct = async ({ userId, productname, description }) => {
  return await apiCall({
    url: `/api/users/${userId}/products`,
    method: 'POST',
    data: { productname, description }
  });
};

export const fetchProducts = async () => {
  return await apiCall({
    url: '/api/products',
    method: 'GET'
  });
};

export const deleteProduct = async ({ userId, productId }) => {
  console.log(userId, productId);
  return await apiCall({
    url: `/api/users/${userId}/products/${productId}`,
    method: 'DELETE'
  });
};

// export const likeProduct = async (userId, productId) => {
//   return await apiCall({
//     url: `/api/users/${userId}/products/${productId}/like`,
//     method: 'POST'
//   });
// };