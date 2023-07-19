import { Button, Form, Input, InputNumber } from 'antd';
import { useState, useEffect } from 'react';
import './style/SubmitForm.css'

export default function CreateProductForm({ onSubmit }) {

  const [imageurl, setImageUrl] = useState(''); 
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };


  return (
    <div className='submitform'>
      <h1>Create Product</h1>
      <Form className='forms' layout="vertical" onFinish={(data) => {
         if (imageurl !== '') {
          onSubmit({ ...data, imageurl });
        } else {
          onSubmit(data);
      }
      } }>
        <Form.Item label="Product Name" name="productname" rules={[{required: true}]}>
          <Input.TextArea rows={1} />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{required: true}]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
          <InputNumber min={0} style={{ width: '100%' }} /> 
        </Form.Item>
        <Form.Item label="Stock Quanitity" name="quantity" rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
          <InputNumber min={0} style={{ width: '100%' }} /> 
        </Form.Item>
        <h4>Choose One Image Submit Way</h4>
        <Form.Item label="Add Image Link" name="imageurl" initialValue="http://">
          <Input.TextArea rows={1} />
        </Form.Item>
        <div className='localimgupload'>
          <Form.Item label="Add Local Image">
            <input type="file" id="img" accept="image/*"  onChange={handleImageUpload}></input>
          </Form.Item>
        <img src={imageurl} alt="Your image" width="150" height="100" />
        </div>
        <Form.Item className='formbutton'>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      
    </div>
  );
}