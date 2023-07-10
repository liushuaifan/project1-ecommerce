import { Button, Form, Input } from 'antd';
// import { useSelector } from 'react-redux';

export default function ProductForm({ onSubmit }) {
  // const { status } = useSelector(state => state.messages);

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item label="Product Name" name="productname">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea rows={8} />
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