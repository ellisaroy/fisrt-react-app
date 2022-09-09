import React,{useState} from  'react';
import { Form, Input,Button} from 'antd';

const TextForm = (props)=>{
    const { TextArea } = Input;
    const [text,setText] = useState("Anything to be here");
    const upperCase = () =>{
        //console.log("Uppercase button clicked");
        setText("You have clicked the Uppercase button");
    }
    const handleOnChange = (event)=>{
       console.log("handleOnChange is triggered");
        //console.log(event);
        setText(event.target.value);
    }
    return(
        <>
            <h1>{props.title}</h1>
            <Form.Item label="TextArea">
                <TextArea value={text} rows={4} onChange={handleOnChange} />
            </Form.Item>
            <Form.Item label="Button">
                 <Button onClick={upperCase}>Convert into uppercase</Button>
            </Form.Item>
        </>
    );
}

export default TextForm;