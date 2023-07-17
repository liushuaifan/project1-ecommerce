// import { Button, Form, Input, InputNumber} from 'antd';
// import { useState, useEffect } from 'react';
// import './style/SubmitForm.css'

// export default function CreateProductForm({ onSubmit }) {

//   const [imageUrl, setImageUrl] = useState("");

//   const onFileChange = event => {
//     console.log()
//     const file = event.target.files[0];
//     const fileReader = new FileReader();

//     fileReader.onloadend = () => {
//       setImageUrl(fileReader.result);
//       console.log("aaaa", imageUrl)
//     };

//     if (file) {
//       fileReader.readAsDataURL(file);
//     } else {
//       setImageUrl("");
//     }
//   };

//   return (
//     <div className='submitform'>
//       <h1>Create Product</h1>
//       <Form className='forms' layout="vertical" onFinish={onSubmit}>
//         <Form.Item label="Product Name" name="productname" rules={[{required: true}]}>
//           <Input.TextArea rows={2} />
//         </Form.Item>
//         <Form.Item label="Description" name="description" rules={[{required: true}]}>
//           <Input.TextArea rows={4} />
//         </Form.Item>
//         <Form.Item label="Price" name="price" rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
//           <InputNumber min={0} style={{ width: '100%' }} /> 
//         </Form.Item>
//         <Form.Item label="Stock Quanitity" name="quantity" rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
//           <InputNumber min={0} style={{ width: '100%' }} /> 
//         </Form.Item>
//         <Form.Item label="Add Image Link" name="imageurl" initialValue={imageUrl}>
//           <Input.TextArea rows={2} />
//         </Form.Item>
//         <input type="file" id="img" name="imageurl" accept="image/*" onChange={onFileChange}></input>
//         <Form.Item className='formbutton'>
//           <Button
//             type="primary"
//             htmlType="submit"
//           >
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }

import { Button, Form, Input, InputNumber } from 'antd';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
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
      <Form className='forms' layout="vertical" onFinish={(data) => onSubmit({ ...data, imageurl })}>
        <Form.Item label="Product Name" name="productname" rules={[{required: true}]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{required: true}]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
          <InputNumber min={0} style={{ width: '100%' }} /> 
        </Form.Item>
        <Form.Item label="Stock Quanitity" name="quantity" rules={[{required: true, type: 'number', message: 'Please input a number!'}]}>
          <InputNumber min={0} style={{ width: '100%' }} /> 
        </Form.Item>
        <Form.Item label="Add Image Link" name="imageurl">
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Add Local Image">
          <input type="file" id="img" accept="image/*"  onChange={handleImageUpload}></input>
        </Form.Item>
        
        <Form.Item className='formbutton'>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}