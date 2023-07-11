import apiCall from './api';

export const createProduct = async ({ 
  userId, 
  productname, 
  description,
  price,
  quantity,
  imageurl
 }
  ) => {
  return await apiCall({
    url: `/api/users/${userId}/products`,
    method: 'POST',
    data: { productname, description, price, quantity, imageurl }
  });
};

export const updateProduct = async ({ 
  userId, 
  productId, 
  productname, 
  description,
  price,
  quantity,
  imageurl
 }
  ) => {
  return await apiCall({
    url: `/api/users/${userId}/products/${productId}`,
    method: 'PUT',
    data: { productname, description, price, quantity, imageurl }
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