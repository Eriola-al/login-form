import './App.css';
import image from './assets/image.jpg';
import { Form, Input, Button, Card } from "antd";
import { useState } from "react";


function App() {

const [password, setPassword] = useState('');

  return (
    <>
      <img src={image} className="bg-img" style={{filter: `blur(${24 - password.length * 2}px)`}}/>
      <Card>
            <Form layout="vertical">
                <div className="card-header">
                    <h2>Image Password Strength</h2>
                    <h4>Change the password to see the effect</h4>
                </div>
                <Form.Item label="Email">
                    <Input type="email" placeholder="Enter Email" />
                </Form.Item>
                <Form.Item label="Password:">
                    <Input 
                    type="password" 
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        </>
    );
};

export default App;
