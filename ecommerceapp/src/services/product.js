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


export const createCart = async ({ 
  cartValue, 
  productname,
  email, 
  price,
  userId,
  productId
 }
  ) => {
    // /api/users/:userid/carts/:productid
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'POST',
    data: { cartValue, productname, email, price}
  });
};





export const updateProduct = async ({ 
  cartValue, 
  productname,
  email, 
  price,
  userId,
  productId
 }
  ) => {
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'PUT',
    data: { cartValue, productname, email, price}
  });
};


export const updateCart = async ({ 
  cartValue, 
  productname,
  email, 
  price,
  userId,
  productId
 }
  ) => {
  return await apiCall({
    url: `/api/users/${userId}/carts/${productId}`,
    method: 'PUT',
    data: { cartValue, productname, email, price }
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