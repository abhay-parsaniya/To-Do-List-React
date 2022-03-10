import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddItem = (props) => {

    const [data, setData] = useState({
        inputItem: "",
        status: true
    });   // State for Store New Item Inserted

    const ItemEvent = (object) => {   // OnChange Event on Input Field
        setData({...data, inputItem: object.target.value});
    };

    const PassAddData = (event) => {   // Pass Input Data to ToDoList Parent Component

        event.preventDefault();
        // console.log(data);
        props.onAdd(data);
        setData({...data, inputItem: ""});
    };

    return (
        <>
            {/* Input Form */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="h3 py-4">Enter Your To Do List Items</Form.Label>
                    <Form.Control type="text" placeholder="Enter Items" className="py-2 my-2" value={data.inputItem} onChange={ItemEvent} />
                </Form.Group>

                <Button variant="primary" type="submit" className="my-2 px-3" onClick={PassAddData} >
                    Add
                </Button>
            </Form>
        </>
    );
};

export default AddItem;