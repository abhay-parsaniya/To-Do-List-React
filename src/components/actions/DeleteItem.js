import React from "react";
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const DeleteItem = (props) => {

    const DeleteItemData = () => {   // Delete Function For Deleting Item

        // console.log(props.id);
        // console.log(props.data[1]);

        props.data[1]((olddata) => {   // Filter Method to Delete
            return (
                olddata.filter((arrElements, index) => {
                    return (
                        index !== props.id
                    );
                })
            );
        })
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Delete Item
        </Tooltip>
    );

    return (
        <>
            {/* Delete Button */}
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Button variant="danger" className="mx-1" onClick={DeleteItemData}> <MdDelete size={"20px"} /> </Button>
            </OverlayTrigger>           

        </>
    );
};

export default DeleteItem;