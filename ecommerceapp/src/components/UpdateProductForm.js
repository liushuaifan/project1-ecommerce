import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate } from "react-router-dom";
import { deleteProductAction } from '../app/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style/SubmitForm.css'

export default function UpdateProductForm({ onSubmit , ProductId , product}) {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const { user } = useSelector(state => state.user);
  
  const handledelete = () => {
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
    <div className='submitform'>
      <h1>Update Product</h1>
      <Form className='forms' layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Product Name" name="productname" initialValue={product[0].productname} rules={[{required: true}]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Description" name="description" initialValue={product[0].description} rules={[{required: true}]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Price" name="price" initialValue={product[0].price}  rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
          <InputNumber min={0} style={{ width: '100%' }} /> 
        </Form.Item>
        <Form.Item label="Stock Quanitity" name="quantity" initialValue={product[0].quantity} rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
          <InputNumber min={0} style={{ width: '100%' }} /> 
        </Form.Item>
        <Form.Item label="Add Image Link" name="imageurl" initialValue={product[0].imageurl} rules={[{required: true}]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item className='formbutton'>
          <Button
            type="primary"
            htmlType="submit"
          >
            UPDATE
          </Button>
          <Button  type="primary" onClick={handledelete}>DELETE</Button>
        </Form.Item>
      </Form>
      
    </div>
  );
}