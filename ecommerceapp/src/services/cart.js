import apiCall from './api';

export const createCart = async ({ 
  cartValue, 
  productname,
  email, 
  price,
  userId,
  productId,
  imageurl
 }
  ) => {
    // /api/users/:userid/carts/:productid
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'POST',
    data: { cartValue, productname, email, price, imageurl}
  });
};

export const updateCart = async ({ 
  cartValue, 
  productname,
  email, 
  price,
  userId,
  productId,
  imageurl
 }
  ) => {
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'PUT',
    data: { cartValue, productname, email, price, imageurl }
  });
};

export const fetchCart = async (
  {
    userId,
    productId
  }
) => {
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'GET'
  });
};

export const fetchUserCart = async (
  {
    userId
  }
) => {
  return await apiCall({
    url: `/api/carts/users/${userId}`,
    method: 'GET'
  });
};

export const deleteCart = async (
  {
    userId,
    productId
  }
) => {
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'DELETE'
  });
};