import { Button, Form, Input } from 'antd';
// import { useSelector } from 'react-redux';

export default function ProductForm({ onSubmit }) {

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item label="Product Name" name="productname">
        <Input.TextArea rows={2} />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea rows={8} />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input.TextArea rows={2} />
      </Form.Item>
      <Form.Item label="Stock Quanitity" name="quantity">
        <Input.TextArea rows={2} />
      </Form.Item>
      <Form.Item label="Add Image Link" name="imageurl">
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
  );
}