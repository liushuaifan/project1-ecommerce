import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { updateProductAction, deleteProductAction } from '../app/productSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

export default function ProductForm({ onSubmit , ProductId , product}) {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const { user } = useSelector(state => state.user);
  
  const handledelete = () => {
    // console.log(product);
    dispatch(deleteProductAction({ 
      userId: user.id, 
      productId: ProductId, 
     })).then(
      () => {
        navigate('/');
      }
    );
  }

  return (
    <>
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Product Name" name="productname" initialValue={product[0].productname}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Description" name="description" initialValue={product[0].description}>
          <Input.TextArea rows={8} />
        </Form.Item>
        <Form.Item label="Price" name="price" initialValue={product[0].price}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Stock Quanitity" name="quantity" initialValue={product[0].quantity}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Add Image Link" name="imageurl" initialValue={product[0].imageurl}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            // loading={status === 'pending'}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    <button onClick={handledelete}>DELETE</button>
    </>

  );
}