import React from 'react'
import './style/notfound.css';
import { Button, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';

function UpdatePassWord() {
  return (
    <div className="updatepassword">
    <p style={{fontWeight: "bold", fontSize:"30px"}}>Update your password</p>
    <p>enter your email, we will send you a recovery link</p>
    <Form layout="vertical">
        <Form.Item label="Email" name="Email" >
          <Input.TextArea rows={2} />
        </Form.Item>
        <Button
            type="primary"
            htmlType="submit"
            style={{ width: '80%' }}
            // loading={status === 'pending'}
          >
            update password
          </Button>
    </Form>
    </div>
  )
}

export default UpdatePassWord;