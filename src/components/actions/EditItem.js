import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MdEdit } from "react-icons/md";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const EditItem = (props) => {

    // console.log(props.data[0])

    const [editData, setEditData] = useState();   // State For Storing Edited Data value 
    // console.log(editData);

    const [show, setShow] = useState(false);   // State For Showing Model Open & Close 

    const handleClose = () => setShow(false);
    
    const handleShow = () => {
        setEditData(props.data[0].inputItem);
        setShow(true);
    };

    const ItemEvent = (object) => {
        setEditData(object.target.value);
    };

    const EditItemData = (event) => {   // Edit Item Function

        event.preventDefault();

        // console.log(props.id);
        // console.log(props.data[0]);

        props.data[1]((olddata) => {   // Saving Value in List
            return (
                olddata.map((arrElement, index) => {
                    // console.log(arrElement);
                    if(index === props.id)
                    {
                        arrElement.inputItem = editData;
                    }
                    // console.log(arrElement);
                    return arrElement;
                })
            );
        })

        // console.log(editData);
        setShow(false);
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Edit Item
        </Tooltip>
    );

    return (
        <>
            {/* Edit Button */}
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >    
                <Button variant="warning" className="mx-1" onClick={handleShow} > <MdEdit size={"20px"} /> </Button>
            </OverlayTrigger> 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Item</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form.Control type="text" placeholder="Enter Items" className="py-2 my-2" value={editData} onChange={ItemEvent} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={EditItemData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditItem;