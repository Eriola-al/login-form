import './App.css';
import jordanCardo from './assets/jordanCardo.jpg';
import { Form, Input, Button, Card } from "antd";
import { useState } from "react";


function App() {

  const [password, setPassword] = useState();
    const [blurPx, setBlurPx] = useState(70)

    const checkPassStrength = (e) => {
        while(password.length < 12) {

        }
    }

  return (
    <div className='background'>
      <img src={jordanCardo} className="bg-img"/>
      <Card className="card-form" style={{ width: 370 }}>
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
                    onChange={(e) => setPassword(e.target.value.length)} />
                    {console.log(password)}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="default"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        </div>
    );
};

export default App;
