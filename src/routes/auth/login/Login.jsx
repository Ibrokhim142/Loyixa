import { Button, Checkbox, Form, Input } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { Link } from 'react-router-dom';
 
const { Title, Text } = Typography;


const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout='vertical'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title className='text-center'>Login</Title>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        className='w-full'
        wrapperCol={{
          span: 24,

        }}
      >
        <Button className='w-full' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Text> Don't have an account? <Link to="/auth/register" >Register</Link> </Text>
    </Form>
  )
}

export default Login