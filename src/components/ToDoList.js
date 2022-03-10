import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Button from 'react-bootstrap/Button';
import AddItem from "./actions/AddItem";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./ToDoList.css";
const LOCAL_STORAGE_KEY = "Abhay-react-todo-list-task";

const ToDoList = () => {

    // This is Main Component

    const [itemList, setItemList] = useState([]);   // Array for Store All Items
    // console.log(itemList);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setItemList(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(itemList));
    }, [itemList]);

    const AddData = (data) => {   // Function for Adding Items in List 
        // console.log(data);
        setItemList((olddata) => {
            return [...olddata, data];
        });
    };

    const ClearList = () => {   // Function for Clear Whole List
        setItemList([]);
    };
 
    return (
        <>
            {/* Main Card Component */}

            <div className="Main-Card-Div">
                <Card bg={'dark'} text={'white'} className="Card" >
                    <Card.Header>
                        <AddItem onAdd={AddData} />
                    </Card.Header>

                    <Card.Body>
                        <Card.Title> <h3> Item Lists </h3> </Card.Title>
                        <Card.Title>

                            {/* All Items Array Maping */}
                            
                            <ListGroup as="ol" numbered>
                                {
                                    itemList.map((itemList, index) => {
                                        return (
                                            <ListGroup.Item as="li" className="List-li" key={index}>
                                            <>
                                                <div className="Item ms-2 me-auto">
                                                {!itemList.status ? (
                                                    <p>
                                                        <del>{itemList.inputItem}</del>
                                                    </p>
                                                )  : (<p> {itemList.inputItem} </p>) }
                                                {/* {itemList.inputItem} */}
                                                </div>
                                                <div>
                                                    <Buttons id={index} data={[itemList, setItemList]} />
                                                </div>
                                            </>
                                            </ListGroup.Item>
                                        );
                                    })
                                }
                            </ListGroup>
                        </Card.Title>
                        <Button variant="danger" className="mx-1" onClick={ClearList} > Clear List </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default ToDoList;